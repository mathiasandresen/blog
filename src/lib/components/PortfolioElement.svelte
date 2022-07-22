<script lang="ts">
	import type { SvelteComponent } from 'svelte';

	export let imageUrl: string | undefined = undefined;
	export let title: string;
	export let description: string;
	export let url: string;
	export let forceLightImage: boolean | undefined = undefined;
</script>

<a href={url}>
	<div
		class="min-w-[14rem] h-48 rounded-md shadow-md hover:shadow-lg flex flex-col overflow-hidden bg-white  dark:bg-slate-700 hover:scale-110 transition-all ease-in-out cursor-pointer"
		style={typeof imageUrl === 'string' ? `--image-url: url(${imageUrl});` : ''}
	>
		<div
			class="portfolio-image w-full h-32 py-4 rounded-md flex justify-center items-center"
			class:force-white={forceLightImage}
			class:img-url={typeof imageUrl === 'string'}
		>
			<slot name="image" />
		</div>
		<div class="p-2 ">
			<h3 class="dark:text-white font-bold">{title}</h3>
			<p class="dark:text-white font-light">{@html description}</p>
		</div>
	</div>
</a>

<style lang="postcss">
	.portfolio-image.img-url {
		background-image: var(--image-url);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		background-origin: content-box;
	}

	.portfolio-image.force-white {
		@apply bg-white;
	}
</style>
