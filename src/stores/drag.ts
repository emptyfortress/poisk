import { defineStore } from 'pinia'

export const useDrag = defineStore({
	id: 'drag',
	state: () => ({
		dragNode: null as Stat | null,
	}),
	getters: {},
	actions: {
		setCurrentDrag(e: Stat | null) {
			this.dragNode = e
		},
	},
})
