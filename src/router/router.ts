import { createRouter, createWebHashHistory } from 'vue-router'
import { useStore } from '@/stores/store'
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
			path: '/search',
			name: 'search',
			component: () => import('@/pages/Search.vue'),
			// meta: { title: 'Admin console', bread: [{ label: 'Dashboard', to: '/' }] },
		},
		{
			path: '/layout',
			name: 'layout',
			component: () => import('@/pages/Layout.vue'),
			// meta: { title: 'Admin console', bread: [{ label: 'Dashboard', to: '/' }] },
		},
	],
})

const DEFAULT_TITLE = 'Поиски и представления'
router.beforeEach((to) => {
	const store = useStore()
	document.title = to.meta.title || DEFAULT_TITLE
	store.offEdit()
})
