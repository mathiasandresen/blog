<script lang="ts">
	import { darkMode } from '$lib/stores/darkmode';
</script>

<button
	class="text-xl hover:scale-110 transition-transform ease-in-out duration-200"
	on:click={() => {
		$darkMode = !$darkMode;
	}}
>
	<div class="hidden dark:block">🌙</div>
	<div class="dark:hidden">☀️</div>
</button>
