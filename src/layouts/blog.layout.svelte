<script>
	import Breadcrumbs from '$lib/components/Breadcrumbs.svelte';
	import H from '$lib/components/core/H.svelte';
	import PostTagElement from '$lib/components/PostTagElement.svelte';
	import { darkMode } from '$lib/stores/darkmode';
	import dayjs from 'dayjs';

	import '../prism.css';

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

<div
	style={`
		--link-element: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-link' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='${
			$darkMode ? 'white' : 'currentColor'
		}' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cdesc%3EDownload more icon variants from https://tabler-icons.io/i/link%3C/desc%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'/%3E%3Cpath d='M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5' /%3E%3Cpath d='M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5' /%3E%3C/svg%3E");
	`}
>
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

	article :global(:where(h2, h3, h4, h5, h6)) :global(.icon-link) {
		position: relative;
	}

	article {
		--color: red;
	}

	article :global(:where(h2, h3, h4, h5, h6)) :global(.icon-link)::before {
		content: var(--link-element);
		position: absolute;
		left: -1.75rem;
		top: 0;
		line-height: 1.4;
		opacity: 0;

		padding-right: 0.35rem;
	}

	article :global(:where(h2, h3, h4, h5, h6)):hover :global(.icon-link)::before {
		opacity: 1;
	}
</style>
