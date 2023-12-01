import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import { useStore } from '@/stores/store'

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
			path: '/mysearch',
			name: 'mysearch',
			component: () => import('@/pages/MySearch.vue'),
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
	document.title = to.meta.title || DEFAULT_TITLE
	const store = useStore()
	store.setCurrentNode(null)
})
