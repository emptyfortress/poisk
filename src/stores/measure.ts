import type { QTableColumn } from 'quasar'

interface MyCol extends QTableColumn {
	id?: number
	use?: boolean
}

let columns: MyCol[] = [
	{
		id: 0,
		name: 'time',
		required: true,
		label: 'Дата измерения',
		field: 'time',
		sortable: true,
		align: 'left',
		use: true,
	},
]

