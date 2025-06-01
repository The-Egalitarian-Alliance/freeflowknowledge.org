import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [sveltekit()],
	mode: import.meta.env.PROD ? 'prooduction' : 'development',
	clearScreen: false,
	server: {
		open: false,
	},
});
