<script>
	import PortfolioElement from '$lib/components/PortfolioElement.svelte';
	import { darkMode } from '$lib/stores/darkmode';
</script>

<div class="absolute top-2 right-2">
	<button
		class="w-12 h-12 text-xl dark:bg-slate-700 shadow-md hover:scale-110 rounded-lg"
		on:click={() => {
			$darkMode = !$darkMode;
		}}
	>
		{$darkMode ? '🌙' : '☀️'}
	</button>
</div>

<div class="flex flex-col gap-16 min-w-3/4 max-w-screen-xl mx-auto">
	<div class="flex flex-row items-center gap-8 mt-8">
		<img class="rounded-full" src="https://via.placeholder.com/150" alt="Me" />
		<div class="dark:text-white">
			<h1 class="text-4xl">Hello, my name is</h1>
			<h1 class="text-4xl font-bold">Mathias Andresen</h1>
			<p class="max-w-sm mt-2">
				I'm studying Software Engineering at Aalborg University in Denmark, and is a student
				developer at WEXO A/S
			</p>
		</div>
	</div>
	<div>
		<h2 class="text-4xl font-semibold dark:text-white mb-4">Some of my projects</h2>
		<div class="flex flex-row flex-wrap gap-4">
			<PortfolioElement
				title="RPG Cards"
				description="An open source RPG card generator"
				imageUrl="https://github.com/mathiasandresen/rpg-cards/blob/main/static/logo_256.png?raw=true"
			/>
			<PortfolioElement
				title="Github"
				description="Checkout my work on Github"
				imageUrl="/images/github.png"
				imageDark={false}
			/>
		</div>
	</div>
</div>

<style lang="postcss">
	:root {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
