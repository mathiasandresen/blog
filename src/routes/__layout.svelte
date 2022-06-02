<script lang="ts">
	import { browser } from '$app/env';
	import { darkMode } from '$lib/stores/darkmode';
	import '../app.css';

	$: {
		if (browser) {
			if ($darkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	}
</script>

<svelte:head>
	<script>
		if ($browser) {
			const isDarkMode = getIsDarkMode();

			if (isDarkMode) {
				document.documentElement.classList.add('dark');
			} else {
				document.documentElement.classList.remove('dark');
			}
		}
	</script>
</svelte:head>
<main class="dark:bg-slate-600">
	<slot />
</main>

<style lang="postcss">
	:root {
		@apply p-4;
	}

	.dark:root {
		@apply bg-slate-600;
	}
</style>
