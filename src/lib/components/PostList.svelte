<script lang="ts">
	import type { BlogPost } from 'src/routes/posts.json';
	import BlogpostPreview from './blogpost-preview.svelte';

	export let posts: BlogPost[];
</script>

<div class="flex flex-col gap-2 max-h-full">
	{#each posts as post}
		<BlogpostPreview {post} />
	{/each}
</div>
