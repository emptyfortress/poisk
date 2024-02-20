import { uid } from 'quasar'

const zero = [
	{
		id: uid(),
		text: 'Документы',
		value: 'Документы',
		selected: false,
		level: 0,
		parent: [],
	},
	{
		id: uid(),
		text: 'Задания',
		value: 'Задания',
		selected: false,
		level: 0,
		parent: [],
	},
	{
		id: uid(),
		text: 'Цели',
		value: 'Цели',
		selected: false,
		level: 0,
		parent: [],
	},
	{
		id: uid(),
		text: 'Командировки',
		value: 'Командировки',
		selected: false,
		level: 0,
		parent: [],
	},
	{
		id: uid(),
		text: 'Исходящий',
		value: 'Исходящий',
		selected: false,
		parent: ['Документы'],
		level: 1,
	},
	{
		id: uid(),
		text: 'Входящий',
		value: 'Входящий',
		selected: false,
		parent: ['Документы'],
		level: 1,
	},
	{
		id: uid(),
		text: 'Договор',
		value: 'Договор',
		selected: false,
		parent: ['Документы'],
		level: 1,
	},
	{
		id: uid(),
		text: 'Доп.соглашение',
		value: 'Доп.соглашение',
		selected: false,
		parent: ['Документы'],
		level: 1,
	},
]

export { zero }
