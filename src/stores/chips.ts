import { defineStore } from 'pinia'

export const useChips = defineStore({
	id: 'chips',
	state: () => ({
		chips: [] as Chip[],
	}),
	getters: {
		// flatChips: (state) => {
		//
		// }
	},
	actions: {
		setChips(e: Chip[]) {
			this.chips = e
		},
	},
})
