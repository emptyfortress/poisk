import { defineStore } from 'pinia'

export const useEditor = defineStore({
	id: 'editor',
	state: () => ({
		type: 'Документ',
		typeOptions: ['Документ', 'Задание', 'Группа заданий'],

		vid: 'Не указано',
		vidOptions: [
			[
				'Не указано',
				'Договор',
				'Заявка',
				'Служебная записка',
				'Исходящий',
				'ОРД',
				'Рабочий',
				'Входящий',
			],
			['Не указано', 'На исполнение', 'На ознакомление', 'На согласование'],
			['Не указано'],
		],
	}),
	getters: {
		calcVid: (state) => {
			if (state.type == 'Документ') return state.vidOptions[0]
			if (state.type == 'Задание') return state.vidOptions[1]
			if (state.type == 'Группа заданий') return state.vidOptions[2]
		},
	},
	actions: {},
})
