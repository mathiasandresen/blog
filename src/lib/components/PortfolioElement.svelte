<script lang="ts">
	export let imageUrl: string;
	export let title: string;
	export let description: string;
	export let url: string;
	export let forceLightImage: boolean | undefined = undefined;
</script>

<a href={url}>
	<div
		class="w-48 h-48 rounded-md shadow-md hover:shadow-lg flex flex-col overflow-hidden bg-white  dark:bg-slate-700 hover:scale-110 transition-all ease-in-out cursor-pointer"
		style="--image-url: url({imageUrl});"
	>
		<div class="portfolio-image w-full h-32 py-4 rounded-md" class:force-white={forceLightImage} />
		<div class="p-2 ">
			<h3 class="dark:text-white font-bold">{title}</h3>
			<p class="dark:text-white font-light">{description}</p>
		</div>
	</div>
</a>

<style lang="postcss">
	.portfolio-image {
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
