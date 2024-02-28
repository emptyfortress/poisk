import { defineStore } from 'pinia'

export const useChips = defineStore({
	id: 'chips',
	state: () => ({
		chips: [
			{
				id: 0,
				label: 'Все',
				ticked: true,
			},
			{
				id: 1,
				label: 'Документ',
				ticked: false,
				children: [
					{ id: 2, ticked: false, label: 'Входящий' },
					{ id: 3, ticked: false, label: 'Исходящий' },
					{ id: 4, ticked: false, label: 'Договор' },
				],
			},
			{
				id: 6,
				label: 'Задание',
				ticked: false,
				children: [
					{ id: 7, ticked: false, label: 'На исполнение' },
					{ id: 8, ticked: false, label: 'На ознакомление' },
					{ id: 9, ticked: false, label: 'На согласование' },
				],
			},
			{
				id: 10,
				label: 'ГЗ',
				ticked: false,
			},
			{
				id: 11,
				label: 'Цель',
				ticked: false,
			},
			{
				id: 12,
				label: 'Командировка',
				ticked: false,
			},
		],
		rows: [] as Option[],
		updateTree: false,
		newSearchItem: '',
		count: 0,
	}),
	getters: {},
	actions: {
		setChips(e: Chip[]) {
			this.chips = e
		},
		setRows(data: Option[]) {
			this.rows = data
		},
		toggleUpdateTree() {
			this.updateTree = !this.updateTree
		},
		setNewItem(e: string) {
			this.newSearchItem = e
		},
	},
})
