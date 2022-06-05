<script lang="ts" context="module">
	import type { Load } from '@sveltejs/kit';

	export const load: Load = async ({ params, fetch }) => {
		const data = await (await fetch(`/posts.json`)).json();

		return {
			status: 200,
			props: {
				posts: data.posts,
			},
		};
	};
</script>

<script lang="ts">
	import BlogpostPreview from '$lib/components/blogpost-preview.svelte';
	import H from '$lib/components/core/H.svelte';

	import type { BlogPost } from './posts.json';
	import PostList from '$lib/components/PostList.svelte';

	export let posts: BlogPost[];
</script>

<svelte:head>
	<title>Blog • Mathias Andresen</title>
</svelte:head>

<div>
	<H level={2} class="mb-4">Check out my blog posts</H>
	{#if posts}
		<PostList {posts} />
	{/if}
</div>
