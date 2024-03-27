import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VueRouter from 'unplugin-vue-router/vite';

export default defineConfig({
	plugins: [
		VueRouter({
			routesFolder: './views',
			extensions: ['.vue'],
			dts: './typings/typed-router.d.ts',
			importMode: 'async'
		}),
		vue()
	]
});
