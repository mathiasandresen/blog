<script lang="ts">
	import H from '$lib/components/core/H.svelte';
	import PostList from '$lib/components/PostList.svelte';
	import type { BlogPost } from '$lib/model/blogpost';

	export let data: { posts: BlogPost[] };
</script>

<svelte:head>
	<title>Blog • Mathias Andresen</title>
</svelte:head>

<div>
	<H level={2} class="mb-4">Check out my blog posts</H>
	{#if data.posts}
		<PostList posts={data.posts} />
	{/if}
</div>
