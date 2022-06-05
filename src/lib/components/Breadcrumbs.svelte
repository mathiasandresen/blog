<script lang="ts" context="module">
	type BreadcrumbElement = {
		href?: string;
		text: string;
	};
</script>

<script lang="ts">
	export let elements: BreadcrumbElement[] = [];
</script>

<nav class="flex" aria-label="Breadcrumb">
	<ol class="inline-flex items-center space-x-1 md:space-x-3">
		{#each elements as element, index}
			{@const isLast = index === elements.length - 1}
			<li class="inline-flex items-center text-sm font-medium text-slate-700  dark:text-slate-400 ">
				{#if !isLast}
					<a
						href={element.href}
						class="inline-flex items-center hover:text-slate-900 dark:hover:text-white"
					>
						{element.text}
					</a>
				{:else}
					<div>{element.text}</div>
				{/if}
			</li>
			{#if !isLast}
				<svg
					class="w-6 h-6 text-gray-400"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
						clip-rule="evenodd"
					/></svg
				>
			{/if}
		{/each}
	</ol>
</nav>
