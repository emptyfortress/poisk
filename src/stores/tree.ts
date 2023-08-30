const mySearches = [
	{
		text: 'Мои поиски',
		hidden: false,
		type: 0,
		selected: false,
		children: [
			{
				text: 'Заявки от АХУ',
				text1: 'Пояснительный текст про поиск',
				hidden: false,
				selected: false,
				type: 1,
			},
			{
				text: 'Мои командировки',
				text1: 'Пояснительный текст про поиск',
				hidden: false,
				selected: false,
				type: 1,
			},
			{
				text: 'Задания на контроле',
				text1: 'Пояснительный текст про поиск',
				hidden: false,
				selected: false,
				type: 1,
			},
		]
	}
]

const searches = [
	{
		text: 'Поиски DV',
		hidden: false,
		type: 0,
		children: [
			{
				text: 'Договоры',
				text1: 'Поиск договоров до 100 тыс. руб',
				hidden: false,
				type: 1,
			},
			{
				text: 'Мои документы',
				text1: 'Поиск моих документов. Я - автор',
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
export { searches, views, mySearches }
