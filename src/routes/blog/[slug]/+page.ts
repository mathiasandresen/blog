import type { BlogPost } from '$lib/model/blogpost';
import { error, type Load } from '@sveltejs/kit';

export const load: Load = async ({ params }) => {
	if (!params.slug) {
		throw error(404, 'Post not found');
	}

	try {
		const data = await import(`../../../../content/${params.slug}.svx`);
		const post: BlogPost = { metadata: data.metadata, slug: params.slug };

		console.log({ post });
		const content = data.default;
		console.log({ content });

		return {
			post,
			Content: content,
		};
	} catch (err) {
		throw error(404, 'Post not found');
	}
};
