import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		editMode: false,
		editMode1: false,
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
		setCurrentNode(e: Stat | null) {
			this.currentNode = e
		},
		toggleEdit() {
			this.editMode = !this.editMode
		},
		toggleEdit1() {
			this.editMode1 = !this.editMode1
		},
		toggleDel() {
			this.del = !this.del
		},
		toggleDub() {
			this.dub = !this.dub
		}
	},
})
