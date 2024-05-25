import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

const host = '0.0.0.0';
const siteUrl = 'https://signalizejs.com'

// https://astro.build/config
export default defineConfig({
	integrations: [
		mdx(),
		sitemap(),
	],
	markdown: {
		syntaxHighlight: 'prism',
	},
	server: {
		host,
	},
	site: siteUrl,
});
