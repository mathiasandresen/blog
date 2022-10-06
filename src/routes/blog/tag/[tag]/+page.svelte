<script lang="ts">
	import H from '$lib/components/core/H.svelte';
	import PostList from '$lib/components/PostList.svelte';
	import { page } from '$app/stores';
	import X from 'tabler-icons-svelte/icons/X';
	import { slide } from 'svelte/transition';
	import type { BlogPost } from '$lib/model/blogpost';

	export let data: { posts: BlogPost[] };

	export const { posts } = data;
</script>

<div>
	<H level={2} class="mb-4">Check out my blog posts</H>
	<a href="/blog">
		<div
			class="
			mb-4 bg-blue-600 hover:scale-105 w-fit px-2 py-1 rounded-md flex flex-row items-center gap-2 text-white
			transition-transform duration-200 ease-in-out cursor-pointer
			"
		>
			<p>#{$page.params.tag}</p>
			<span class="">
				<X size="1rem" />
			</span>
		</div>
	</a>
	{#if posts}
		<PostList {posts} />
	{/if}
</div>
