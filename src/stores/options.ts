import { uid } from 'quasar'

const options = [
	{
		id: uid(),
		text: 'Документы',
		value: 'Документы',
		selected: false,
		parent: [],
		children: [],
	},
	{
		id: uid(),
		text: 'Задания',
		value: 'Задания',
		selected: false,
		parent: [],
		children: [],
	},
	{
		id: uid(),
		text: 'Цели',
		value: 'Цели',
		selected: false,
		parent: [],
		children: [],
	},
	{
		id: uid(),
		text: 'Командировки',
		value: 'Командировки',
		selected: false,
		parent: [],
		children: [],
	},
]

export { options }
