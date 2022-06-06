<header
	class="
    bg-white dark:bg-slate-600 border-b border-slate-200 dark:border-slate-700 dark:text-white
    w-screen h-14 flex flex-row items-center px-8 shadow-sm
    "
>
	<div class="flex-1">
		<slot />
	</div>
	<div>
		<slot name="end" />
	</div>
</header>

<style lang="postcss">
	header :global(a) {
		@apply text-lg font-bold;
		@apply hover:scale-110 transition-transform ease-in-out duration-200;
		/* @apply hover:bg-slate-700 px-4 -mx-4 py-2 rounded-full transition-colors ease-in-out duration-200; */
	}

	:global(.dark) header :global(a) {
		@apply text-white;
		@apply hover:scale-110 transition-transform ease-in-out duration-200;
	}

	header :global(nav) {
		@apply flex gap-8;
	}
</style>
