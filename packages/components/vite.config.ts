import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
// 引入Unocss
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss';

export default defineConfig({
	build: {
		//打包文件目录
		outDir: 'es',
		//压缩
		//minify: false,
		rollupOptions: {
			//忽略打包vue文件
			external: ['vue', 'gsap'],
			input: ['index.ts'],
			output: [
				{
					//打包格式
					format: 'es',
					//打包后文件名
					entryFileNames: '[name].mjs',
					//让打包目录和我们目录对应
					preserveModules: true,
					preserveModulesRoot: './../components',
					exports: 'named',
					//配置打包根目录
					dir: 'matrix-ui/es/components'
				},
				{
					//打包格式
					format: 'cjs',
					//打包后文件名
					entryFileNames: '[name].js',
					//让打包目录和我们目录对应
					preserveModulesRoot: './../components',
					preserveModules: true,
					exports: 'named',
					//配置打包根目录
					dir: 'matrix-ui/lib/components'
				}
			]
		},
		lib: {
			entry: './index.ts'
		}
	},
	plugins: [
		vue(),
		Unocss({
			// 使用Unocss
			presets: [presetUno(), presetAttributify(), presetIcons()]
		}),
		dts({
			entryRoot: './src',
			outDir: ['matrix-ui/es/components/src', 'matrix-ui/lib/components/src'],
			//指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
			tsconfigPath: '../../tsconfig.json'
		})
	]
});
