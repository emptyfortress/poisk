import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'

declare module 'vue-router' {
	interface RouteMeta {
		title: string
		transition: any
	}
}

export const router = createRouter({
	history: createWebHashHistory(),

	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			// meta: { title: 'Admin console', bread: [{ label: 'Dashboard', to: '/' }] },
		},
		{
			path: '/switches',
			name: 'switches',
			component: () => import('@/pages/Switches.vue')
		},
		{
			path: '/reverse',
			name: 'reverse',
			component: () => import('@/pages/Item1.vue'),
			meta: {
				title: 'Тест',
				transition: 'page'
			},
		},
		{
			path: '/reverse1',
			name: 'reverse1',
			component: () => import('@/pages/Item2.vue'),
			meta: {
				title: 'Тест',
				transition: 'page'
			},
		},
		{
			path: '/chart',
			name: 'chart',
			component: () => import('@/pages/Chart.vue'),
			meta: {
				title: 'Chart',
				transition: 'page'
			},
		},
		{
			path: '/item/:id',
			name: 'item',
			component: () => import('@/pages/Item.vue'),
			props: true,
			meta: {
				title: 'Выключатель',
				transition: 'page'
			},
		},
	],
})

const DEFAULT_TITLE = 'Цифровой двойник'
router.beforeEach((to) => {
	document.title = to.meta.title || DEFAULT_TITLE
})
