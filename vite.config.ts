import { purgeCss } from 'vite-plugin-tailwind-purgecss';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import wasm from "vite-plugin-wasm";
import topLevelAwait from "vite-plugin-top-level-await";

export default defineConfig({
	assetsInclude: ['src/**/*.pdf'],
	base: '/austin.engineer/',
	plugins: [
		wasm(),
    	topLevelAwait(),
		sveltekit(), 
		purgeCss(),
	],
	server: {
		port: 3000,
	}
});