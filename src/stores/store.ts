import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		currentNode: null as Stat | null,
		editMode: false
	}),
	getters: {
	},
	actions: {
		toggleMini() {
			this.mini = !this.mini
		},
		setCurrentNode(e: Stat) {
			this.currentNode = e
		},
		toggleEdit() {
			this.editMode = !this.editMode
		},
	},
})
