<script lang="ts">
	export let tag: string;

	const tagHref = `/blog/tag/${encodeURIComponent(tag)}`;
</script>

<a href={tagHref}>
	<div
		class="bg-blue-600 rounded-md px-2 before:content-['#'] text-white hover:bg-blue-700 cursor-pointer"
	>
		{tag}
	</div>
</a>
