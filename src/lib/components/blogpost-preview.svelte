<script lang="ts">
	import type { BlogPost } from 'src/routes/posts.json';
	import dayjs from 'dayjs';
	import PostTagElement from './PostTagElement.svelte';

	export let post: BlogPost;
</script>

<a href="/blog/{post.slug}" rel="prefetch">
	<div
		class="
			p-4 bg-white dark:bg-slate-700 dark:text-white rounded-md
			shadow-md hover:shadow-lg
			hover:scale-105 transition-all ease-in-out cursor-pointer
		"
	>
		{#if post.metadata.tags}
			<div class="flex flex-row gap-1 mb-2 ">
				{#each post.metadata.tags as tag}
					<PostTagElement {tag} />
				{/each}
			</div>
		{/if}
		<div class="flex flex-col justify-between mb-1">
			{#if post.metadata.date}
				<div class="dark:text-slate-400 text-sm text-slate-600 font-light my-1">
					{dayjs(post.metadata.date).format('MMMM D, YYYY')}
				</div>
			{/if}
			<h3 class="font-bold text-xl">{post.metadata.title}</h3>
		</div>
		{#if post.metadata.standfirst}
			<p class="dark:text-white italic">{post.metadata.standfirst}</p>
		{/if}
		<!-- <p class="italic">{post.metadata.standfirst}</p> -->
	</div>
</a>

<style>
</style>
