<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import ToggleDarkModeButton from '$lib/components/ToggleDarkModeButton.svelte';
	import '../app.css';
</script>

<svelte:head>
	<script>
		if (document) {
			let isDarkMode = undefined;

			if ('darkMode' in localStorage) {
				isDarkMode = localStorage.getItem('darkMode') === 'true';
			} else {
				isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
			}

			if (isDarkMode) {
				document.documentElement.classList.add('dark');
			}
		}
	</script>
</svelte:head>

<Header>
	<nav>
		<a href="/">Home</a>
		<a href="/blog">Blog</a>
	</nav>
	<div slot="end" class="flex flex-row gap-4 items-center">
		<ToggleDarkModeButton />
	</div>
</Header>

<div class="p-4 flex">
	<main class="flex flex-col gap-16 min-w-3/4 max-w-screen-md w-full mx-auto py-8">
		<slot />
	</main>
</div>

<style lang="postcss">
	:root {
		@apply bg-slate-50 overflow-y-scroll;
	}
	.dark:root {
		@apply bg-slate-600;
	}

	:global(body) {
		@apply w-full;
	}
</style>
