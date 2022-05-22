import type { RequestHandler } from '@sveltejs/kit';
import Path from 'path';

export type BlogPost = {
	slug: string;
	metadata: {
		title: string;
	};
};

export const get: RequestHandler = async () => {
	const _modules = import.meta.glob('./blog/*.svx');

	const body = [];
	for (const path in _modules) {
		body.push(
			_modules[path]().then(({ metadata }) => ({ metadata, slug: Path.basename(path, '.svx') }))
		);
	}

	const posts = await Promise.all(body);

	return {
		body: {
			posts: posts as BlogPost[],
		},
	};
};
