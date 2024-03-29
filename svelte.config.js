import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	extensions: ['.svelte', '.md', '.svx'],

	preprocess: [
		mdsvex({
			extensions: ['.svx', '.md'],
			layout: {
				blog: './src/layouts/blog.layout.svelte',
			},
			rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
		}),
		preprocess({
			postcss: true,
		}),
	],

	kit: {
		adapter: adapter(),
	},
};

export default config;
