import { fields, man, org } from '@/stores/select'
import { defineStore } from 'pinia'

const isVhod = (el: string) => el == 'vhod'
const isIshod = (el: string) => el == 'ishod'
const isTask = (el: string) => el == 'task'
const isTasks = (el: string) => el == 'tasks'

export const useEditor = defineStore({
	id: 'editor',
	state: () => ({
		type: 'Документ',
		typeOptions: ['Документ', 'Задание', 'Группа заданий'],

		vid: { label: 'Не указано', value: 'Не указано', type: 0 },

		vidOptions: [
			[
				{ type: 0, label: 'Не указано', value: 'Не указано' },
				{ type: 1, label: 'Входящий', value: 'Входящий' },
				{ type: 1, label: 'Исходящий', value: 'Исходящий' },
				{ type: 0, label: 'Заявка', value: 'Заявка' },
				{ type: 0, label: 'Договор', value: 'Договор' },
				{ type: 0, label: 'Письмо', value: 'Письмо' },
				{ type: 0, label: 'Приказ', value: 'Приказ' },
				{ type: 0, label: 'Заявление', value: 'Заявление' },
				{ type: 0, label: 'Письмо', value: 'Письмо' },
				{ type: 0, label: 'Черновик', value: 'Черновик' },
			],
			[
				{ type: 1, value: 'Не указано', label: 'Не указано' },
				{ type: 1, value: 'На исполнение', label: 'На исполнение' },
				{ type: 1, value: 'На ознакомление', label: 'На ознакомление' },
				{ type: 1, value: 'На согласование', label: 'На согласование' },
			],
			[{ type: 1, value: 'Не указано', label: 'Не указано' }],
		],
	}),
	getters: {
		calcVid: (state) => {
			if (state.type == 'Документ') return state.vidOptions[0]
			if (state.type == 'Задание') return state.vidOptions[1]
			if (state.type == 'Группа заданий') return state.vidOptions[2]
		},
		calcFirst: (state) => {
			if (state.vid.label == 'Входящий') {
				return fields.filter((e: any) => e.kind.some(isVhod))
			}
			if (state.vid.label == 'Исходящий') {
				return fields.filter((e: any) => e.kind.some(isIshod))
			}
			if (state.type == 'Задание') {
				return fields.filter((e: any) => e.kind.some(isTask))
			}
			if (state.type == 'Группа заданий') {
				return fields.filter((e: any) => e.kind.some(isTasks))
			}
			return []
		},
	},
	actions: {
		resetVid() {
			this.vid = {
				type: 0,
				label: 'Не указано',
				value: 'Не указано',
			}
		},
	},
})
