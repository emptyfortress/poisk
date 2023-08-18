const searches = [
	{
		text: 'Поиски DV',
		hidden: false,
		type: 0,
		children: [
			{
				text: 'Договоры',
				hidden: false,
				type: 1,
			},
			{
				text: 'Мои документы',
				hidden: false,
				type: 1,
			},
		],
	},
]

const views = [
	{
		text: 'Представления',
		hidden: false,
		type: 0,
		children: [
			{
				text: 'Digest',
				hidden: false,
				type: 1,
			},
			{
				text: 'Задания',
				hidden: false,
				type: 1,
			},
			{
				text: 'Отдел кадров',
				hidden: false,
				type: 1,
			},
		],
	},
]
export { searches, views }
