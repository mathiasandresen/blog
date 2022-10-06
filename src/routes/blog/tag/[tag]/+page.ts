import type { Load } from '@sveltejs/kit';

export const load: Load = async ({ fetch, params }) => {
	const data = await (
		await fetch(`/api/posts?tag=${encodeURIComponent(params?.tag ?? '')}`)
	).json();

	return {
		posts: data.posts,
	};
};
