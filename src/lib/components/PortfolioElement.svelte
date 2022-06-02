<script lang="ts">
	import { darkMode } from '$lib/stores/darkmode';

	export let imageUrl: string;
	export let title: string;
	export let description: string;
	export let imageDark = $darkMode;
</script>

<div
	class="w-48 h-48 rounded-md shadow-md flex flex-col overflow-hidden dark:bg-slate-700 hover:scale-110 transition-transform ease-in-out cursor-pointer"
	style="--image-url: url({imageUrl});"
>
	<div
		class="portfolio-image  w-full h-32 py-4 rounded-md"
		class:bg-slate-800={imageDark}
		class:bg-white={!imageDark}
	/>
	<div class="p-2">
		<h3 class="dark:text-white font-bold">{title}</h3>
		<p class="dark:text-white font-light">{description}</p>
	</div>
</div>

<style>
	.portfolio-image {
		background-image: var(--image-url);
		background-size: contain;
		background-repeat: no-repeat;
		background-position: center;
		background-origin: content-box;
	}
</style>
