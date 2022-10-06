import type { BlogPost } from '$lib/model/blogpost';
import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch }) => {
	const data = await (await fetch(`/api/posts`)).json();

	console.log({ data });

	return {
		posts: data.posts as BlogPost[],
	};
};
