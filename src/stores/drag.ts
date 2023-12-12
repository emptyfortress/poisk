import { defineStore } from 'pinia'

export const useDrag = defineStore({
	id: 'drag',
	state: () => ({
		dragNode: null as NodeData | null,
	}),
	getters: {},
	actions: {
		setCurrentDrag(e: NodeData | null) {
			this.dragNode = e
		},
	},
})
