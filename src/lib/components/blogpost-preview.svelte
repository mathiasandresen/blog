<script lang="ts">
	import type { BlogPost } from 'src/routes/blog';

	export let post: BlogPost;
</script>

<a href="blog/{post.slug}" rel="prefetch">
	<div class="p-2 bg-slate-300 hover:bg-slate-200">
		<h2 class="font-bold">{post.metadata.title}</h2>
	</div>
</a>

<style>
</style>
