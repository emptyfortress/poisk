import { defineStore } from 'pinia'

export const useView = defineStore({
	id: 'view',
	state: () => ({
		head: {
			auto: false,
			size: 0.8,
			weight: 500,
			style: 'normal',
			align: 'left',
			fontColor: '#666666',
			padding: [6, 16],
			bgColor: '#ffffff',
			borderWidth: [0, 0, 0, 0],
			borderColor: '#e0e0e0',
			shadowColor: '#000000',
		},
	}),
	getters: {},
	actions: {},
})
