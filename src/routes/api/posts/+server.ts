import { json, type RequestHandler } from '@sveltejs/kit';
import Path from 'path';

export type BlogPost = {
	slug: string;
	metadata: {
		title: string;
		standfirst?: string;
		date: string;
		tags?: string[];
	};
};

export const GET: RequestHandler = async ({ url: { searchParams } }) => {
	const _modules = import.meta.glob('../../../../content/*.svx');

	const body = [];
	for (const path in _modules) {
		body.push(
			_modules[path]().then(({ metadata }) => ({ metadata, slug: Path.basename(path, '.svx') }))
		);
	}

	let posts = (await Promise.all(body)) as BlogPost[];

	if (searchParams.has('tag')) {
		// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
		posts = posts.filter(({ metadata }) => metadata.tags?.includes(searchParams.get('tag')!));
	}

	const sortedPosts = posts.sort((a, b) => {
		return new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime();
	});

	return json({ posts: sortedPosts });
};
