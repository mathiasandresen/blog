<script>
	import H from '$lib/components/core/H.svelte';
	import BrandGithub from '$lib/components/icons/brand-github.svelte';
	import BrandLinkedin from '$lib/components/icons/brand-linkedin.svelte';
	import BrandTwitter from '$lib/components/icons/brand-twitter.svelte';
	import PortfolioElement from '$lib/components/PortfolioElement.svelte';
	import SocialElement from '$lib/components/SocialElement.svelte';
	import Notebook from 'tabler-icons-svelte/icons/Notebook';
</script>

<svelte:head>
	<title>Mathias Andresen</title>
</svelte:head>

<div class="flex flex-row items-center gap-8">
	<img class="rounded-full w-48" src="/images/me_256.png" alt="Me" />
	<div class="dark:text-white">
		<h1 class="flex flex-col">
			<span class="text-4xl">Hello, my name is</span>
			<span class="text-4xl font-bold">Mathias Andresen</span>
		</h1>
		<p class="mt-2">
			I'm an upcoming Software Pilot at TRIFORK Aalborg ✈
		</p>
	</div>
</div>
<div>
	<H level={2} class="mb-4">Some of my projects</H>
	<div class="flex flex-row flex-wrap gap-4 ">
		<PortfolioElement
			title="Blog"
			description="My developer blog where I write about whatever I want"
			url="/blog"
		>
			<div
				slot="image"
				class="w-20 h-20 flex flex-row justify-center items-center absolute dark:text-white"
			>
				<Notebook strokeWidth="1.5" />
			</div>
		</PortfolioElement>
		<PortfolioElement
			title="RPG Cards"
			description="An open source RPG card generator"
			imageUrl="/images/rpg-cards.png"
			url="https://rpg-cards.mathiasandresen.dk/"
		/>
		<PortfolioElement
			title="ABK Aalborg"
			description="A website I help build and maintain"
			imageUrl="/images/ABK.png"
			url="https://abk-aalborg.dk/"
			forceLightImage
		/>
		<PortfolioElement
			title="Github"
			description="Check out my work on Github"
			imageUrl="/images/github.png"
			url="https://github.com/mathiasandresen"
			forceLightImage
		/>
	</div>
</div>
<div>
	<H level={2} class="mb-4">You can also find me here</H>
	<div class="flex flex-row flex-wrap gap-4">
		<SocialElement url="https://github.com/mathiasandresen">
			<BrandGithub />
		</SocialElement>
		<SocialElement url="https://linkedin.com/in/mathias-andresen">
			<BrandLinkedin />
		</SocialElement>
		<SocialElement url="https://twitter.com/Math5969">
			<BrandTwitter />
		</SocialElement>
	</div>
</div>

<style lang="postcss">
	:root {
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
