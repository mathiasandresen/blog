<script lang="ts">
	import Info from 'tabler-icons-svelte/icons/InfoCircle';

	export let variant: 'info' = 'info';
</script>

<div
	class="px-4 bg-slate-300 dark:bg-slate-800 rounded-sm text-black dark:text-white flex flex-row gap-4 items-center border-l-4"
	class:variant-info={variant === 'info'}
>
	<div class="icon">
		{#if variant === 'info'}
			<Info />
		{/if}
	</div>
	<p>
		<slot />
	</p>
</div>

<style lang="postcss">
	.variant-info {
		@apply border-l-blue-500;
		background-color: hwb(217 23% 4% / 0.2);
	}

	.variant-info .icon {
		@apply text-blue-500;
	}

	:global(.dark) .variant-info {
	}
</style>
