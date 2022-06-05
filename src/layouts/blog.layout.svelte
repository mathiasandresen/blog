<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import H from '$lib/components/core/H.svelte';
	import PostTagElement from '$lib/components/PostTagElement.svelte';
	import dayjs from 'dayjs';

	/** @type {string} */
	export let title;

	/**	@type {string[]} */
	export let tags;

	/** @type {string} */
	export let standfirst;

	/** @type {string} */
	export let date;

	const dateString = dayjs(date).format('MMMM D, YYYY');
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<div>
	<!-- <Breadcrumbs elements={[{ text: 'Blog', href: '/blog' }, { text: title }]} /> -->
	{#if tags}
		<div class="flex flex-row gap-2 mb-4 text-white">
			{#each tags as tag}
				<PostTagElement {tag} />
			{/each}
		</div>
	{/if}
	<H level={1} class="mb-2 mt-2">{title}</H>
	<div class="flex flex-row gap-2 mb-6 dark:text-white italic">
		<div class="dark:text-slate-400 text-slate-600 font-light ">{dateString}</div>
		-
		<div>Mathias Andresen</div>
	</div>
	{#if standfirst}
		<p class="mb-2 text-lg dark:text-white italic">{standfirst}</p>
	{/if}

	<div class="border-b-4 my-8 dark:border-slate-700" />

	<article
		class="blog-content prose prose-slate dark:prose-invert before:prose-code:hidden after:prose-code:hidden"
	>
		<slot />
	</article>
</div>

<style lang="postcss">
	article :global(:not(pre)) :global(code) {
		@apply bg-slate-200 px-[.4em] py-[.2em] rounded-sm text-[75%];
	}

	:global(.dark) article :global(:not(pre)) :global(code) {
		@apply bg-slate-700;
	}
</style>
