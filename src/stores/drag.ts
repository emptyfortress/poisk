import { defineStore } from 'pinia'

export const useDrag = defineStore({
	id: 'drag',
	state: () => ({
		dragNode: null as NodeData | null,
		treeKey: null as string | null,
	}),
	getters: {},
	actions: {
		setCurrentDrag(e: NodeData | null) {
			this.dragNode = e
		},
		setTreeKey(e: string | null) {
			this.treeKey = e
		},
	},
})
