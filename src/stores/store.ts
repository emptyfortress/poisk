import { defineStore } from 'pinia'

export const useStore = defineStore({
	id: 'store',
	state: () => ({
		mini: false,
		currentNode: null as Stat | null,
		del: false,
		dub: false,
		dialog: false,
		attributes: [
			{ id: 1, check: true, sort: true, filter: true, type: 2, label: 'Тип', options: ['Документ', 'Задание', 'Группа заданий', 'Любой'], val: 'Документ', notset: false},
			{
				id: 2, check: true, sort: true, filter: true, type: 2, label: 'Вид карточки', val: 'Любой', options: [
					'Любой',
					'Заявка',
					'Договор',
					'Письмо',
					'Входящий',
					'Исходящий',
					'Приказ',
					'Заявление',
					'Письмо',
					'Черновик',
				], notset: false
			},
		]
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
		toggleDel() {
			this.del = !this.del
		},
		toggleDub() {
			this.dub = !this.dub
		},
		savePoisk(e: string, c: string) {
			this.currentNode!.data.text = e
			this.currentNode!.data.text1 = c
		}
	},
})
