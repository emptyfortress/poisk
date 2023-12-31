import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue({
			template: {
				transformAssetUrls,
				// compilerOptions: {
				// 	isCustomElement: (tag) => ['draggable'].includes(tag),
				// }
			},
			script: {
				defineModel: true
			}
		}),

		quasar({
			sassVariables: 'src/quasar-variables.scss',
		}),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, '/src'),
		},
	},
})
