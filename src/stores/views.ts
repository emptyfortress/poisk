import { defineStore } from 'pinia'

export const useView = defineStore({
	id: 'view',
	state: () => ({
		head: {
			auto: false,
			size: 0.9,
			weight: 400,
			style: 'normal',
			align: 'left',
			fontColor: '#00000',
			padding: [8, 16],
			bgColor: '#ffffff',
			borderWidth: [0, 0, 0, 0],
			borderColor: '#000000',
			shadowColor: '#000000',
		},
	}),
	getters: {},
	actions: {},
})
