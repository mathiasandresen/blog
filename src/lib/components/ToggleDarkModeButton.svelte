<script lang="ts">
	import { darkMode } from '$lib/stores/darkmode';
	import Moon from 'tabler-icons-svelte/icons/Moon';
	import Sun from 'tabler-icons-svelte/icons/Sun';
</script>

<button
	class="text-xl hover:scale-110 transition-transform ease-in-out duration-200"
	on:click={() => {
		$darkMode = !$darkMode;
	}}
>
	<div class="hidden dark:block"><Moon /></div>
	<div class="dark:hidden"><Sun color="currentColor" /></div>
</button>
