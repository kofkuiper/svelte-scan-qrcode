import adapter from '@sveltejs/adapter-netlify';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		target: '#svelte',
		adapter: adapter(),
		paths: {
			base: '/svelte-scan-qrcode'
		}
	},
	package: {
		dir: 'package',
		emitTypes: true
	}
};

export default config;
