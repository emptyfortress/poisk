import { defineStore } from 'pinia'
import { columns } from '@/stores/data'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		allcolumns: [...columns],
		addSwitchDialog: false,
		addMeasureDialog: false,
	}),
	getters: {
		columns(state) {
			return state.allcolumns.filter(item => item.use)
		},
	},
	actions: {
		setColumns() {
			this.allcolumns = [...columns]
		},
		toggleMini() {
			this.mini = !this.mini
		},
		resetColumns() {
			this.allcolumns.map(item => item.use = true)
		},
		toggleSwitchDialog() {
			this.addSwitchDialog = !this.addSwitchDialog
		},
		toggleMeasureDialog() {
			this.addMeasureDialog = !this.addMeasureDialog
		},
	},
})
