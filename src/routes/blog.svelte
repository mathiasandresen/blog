<script lang="ts">
	import BlogpostPreview from '$lib/components/blogpost-preview.svelte';

	import type { BlogPost } from './blog';

	export let posts: BlogPost[];
</script>

Checkout my blog posts:

<div class="flex flex-col gap-2 max-h-full">
	{#each posts as post}
		<BlogpostPreview {post} />
	{/each}
</div>
