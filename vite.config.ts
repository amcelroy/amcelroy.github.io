import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	assetsInclude: ['**/*.pdf'],
	base: '/austin.engineer/build/',
	plugins: [
		sveltekit(), 
		purgeCss(),
	],
});