<script lang="ts">
	export let level: 1 | 2 | 3 | 4 | 5 | 6;
	let _class: string = '';

	export { _class as class };
</script>

<svelte:element this={`h${level}`} class="dark:text-white level-{level} {_class}">
	<slot />
</svelte:element>

<style lang="postcss">
	.level-1 {
		@apply text-5xl font-bold;
	}

	.level-2 {
		@apply text-4xl font-semibold;
	}
</style>
