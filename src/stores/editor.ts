import { fields } from '@/stores/select'
import { defineStore } from 'pinia'

const isDoc = (el: string) => el == 'doc'
const isTask = (el: string) => el == 'task'

export const useEditor = defineStore({
	id: 'editor',
	state: () => ({
		type: 'Документ',
		typeOptions: ['Документ', 'Задание', 'Группа заданий'],

		vid: 'Не указано',
		vidOptions: [
			[
				'Не указано',
				'Входящий',
				'Исходящий',
				'Заявка',
				'Служебная записка',
				'ОРД',
				'Рабочий',
				'Договор',
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
		calcFirst: (state) => {
			if (state.type == 'Документ') {
				return fields.filter((e: any) => e.kind.some(isDoc))
			}
			if (state.type == 'Задание' || 'Группа заданий') {
				return fields.filter((e: any) => e.kind.some(isTask))
			}
			return null
		},
	},
	actions: {
		resetVid() {
			this.vid = 'Не указано'
		},
	},
})
