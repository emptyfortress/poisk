const mySearches = [
	{
		text: 'Мои поиски',
		text1: '',
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
		text1: '',
		selected: false,
		hidden: false,
		type: 0,
		children: [
			{
				text: 'Договоры',
				selected: false,
				text1: 'Поиск договоров до 100 тыс. руб',
				hidden: false,
				type: 1,
			},
			{
				text: 'Мои документы',
				selected: false,
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
		text1: '',
		selected: false,
		hidden: false,
		type: 0,
		children: [
			{
				text: 'Digest',
				selected: false,
				hidden: false,
				type: 1,
				text1: 'Описание'
			},
			{
				text: 'Задания',
				selected: false,
				hidden: false,
				type: 1,
				text1: 'Описание'
			},
			{
				text: 'Отдел кадров',
				selected: false,
				hidden: false,
				type: 1,
				text1: 'Описание'
			},
		],
	},
]
export { searches, views, mySearches }
