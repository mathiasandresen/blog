<script lang="ts">
	import Info from 'tabler-icons-svelte/icons/InfoCircle';
	import AlertTriangle from 'tabler-icons-svelte/icons/AlertTriangle';

	export let variant: 'info' | 'warning' = 'info';
</script>

<div
	class="px-4 bg-slate-300 dark:bg-slate-800 rounded-sm text-black dark:text-white flex flex-row gap-4 items-center border-l-4"
	class:variant-info={variant === 'info'}
	class:variant-warning={variant === 'warning'}
>
	<div class="icon text-xl">
		{#if variant === 'info'}
			<Info />
		{:else if variant === 'warning'}
			<AlertTriangle />
		{/if}
	</div>
	<p>
		<slot />
	</p>
</div>

<style lang="postcss">
	.variant-info {
		@apply border-l-blue-500 bg-blue-500/20;
	}

	.variant-info .icon {
		@apply text-blue-500;
	}

	.variant-warning {
		@apply border-l-orange-500 bg-orange-500/20;
	}

	.variant-warning .icon {
		@apply text-orange-500;
	}

	:global(.dark) .variant-info {
	}
</style>
