<script lang="ts">
	export let url: string;
</script>

<a href={url}>
	<div
		class="w-16 h-16 p-3 flex justify-center items-center bg-white dark:bg-slate-700 shadow-md hover:shadow-lg dark:text-white rounded-full hover:scale-110 transition-all ease-in-out cursor-pointer"
	>
		<slot />
	</div>
</a>

<style>
	:global(svg) {
		width: 100%;
		height: 100%;
	}
</style>
