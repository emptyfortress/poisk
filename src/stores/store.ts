import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		editMode: false,
		currentNode: null as Stat | null,
		del: false,
		dub: false,
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
		toggleDel() {
			this.del = !this.del
		},
		toggleDub() {
			this.dub = !this.dub
		}
	},
})
