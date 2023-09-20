const mySearches = [
	{
		text: 'Мои поиски',
		hidden: false,
		type: 0,
		selected: false,
		children: [
			{
				text: 'Заявки от АХУ',
				text1: 'Описание поиска',
				hidden: false,
				selected: false,
				type: 1,
			},
			{
				text: 'Мои командировки',
				text1: 'Описание поиска',
				hidden: false,
				selected: false,
				type: 1,
			},
			{
				text: 'Задания на контроле',
				text1: 'Описание поиска',
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
				text1: 'Описание'
			},
			{
				text: 'Задания',
				hidden: false,
				type: 1,
				text1: 'Описание'
			},
			{
				text: 'Отдел кадров',
				hidden: false,
				type: 1,
				text1: 'Описание'
			},
		],
	},
]
export { searches, views, mySearches }
