import { uid } from 'quasar'

const options = [
	{
		id: uid(),
		text: 'Документы',
		value: 'Документы',
		selected: false,
		level: 0,
		parent: [],
		children: [
			{
				id: uid(),
				text: 'Исходящий',
				value: 'Исходящий',
				selected: false,
				parent: ['Документы'],
				children: [],
			},
			{
				id: uid(),
				text: 'Входящий',
				value: 'Входящий',
				selected: false,
				parent: ['Документы'],
				children: [],
			},
			{
				id: uid(),
				text: 'Договор',
				value: 'Договор',
				selected: false,
				parent: ['Документы'],
				children: [],
			},
			{
				id: uid(),
				text: 'Доп.соглашение',
				value: 'Доп.соглашение',
				selected: false,
				parent: ['Документы'],
				children: [],
			},
		],
	},
	{
		id: uid(),
		text: 'Задания',
		value: 'Задания',
		selected: false,
		level: 0,
		parent: [],
		children: [],
	},
	{
		id: uid(),
		text: 'Цели',
		value: 'Цели',
		selected: false,
		level: 0,
		parent: [],
		children: [],
	},
	{
		id: uid(),
		text: 'Командировки',
		value: 'Командировки',
		selected: false,
		level: 0,
		parent: [],
		children: [],
	},
]

export { options }
