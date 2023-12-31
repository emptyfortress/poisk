const mySearches = [
	{
		text: 'Мои поиски',
		text1: '',
		hidden: false,
		type: 0,
		selected: false,
		fields: [],
		children: [
			{
				text: 'Заявки от АХУ',
				text1: 'Описание поиска',
				hidden: false,
				selected: false,
				type: 1,
				fields: []
			},
			{
				text: 'Мои командировки',
				text1: 'Описание поиска',
				hidden: false,
				selected: false,
				type: 1,
				fields: [
					{ id: 1, check: true, sort: true, filter: true, type: 2, label: 'Тип', options: ['Документ', 'Задание', 'Группа заданий', 'Любой'], val: 'Документ', notset: false },
				]
			},
			{
				text: 'Задания на контроле',
				text1: 'Описание поиска',
				hidden: false,
				selected: false,
				type: 1,
				fields: [
					{ id: 1, check: true, sort: true, filter: true, type: 2, label: 'Тип', options: ['Документ', 'Задание', 'Группа заданий', 'Любой'], val: 'Документ', notset: false },
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
						], notset: false,
					},
				]
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
		fields: [],
		children: [
			{
				text: 'Договоры',
				selected: false,
				text1: 'Поиск договоров до 100 тыс. руб',
				hidden: false,
				type: 1,
				fields: [],
			},
			{
				text: 'Мои документы',
				selected: false,
				text1: 'Поиск моих документов. Я - автор',
				hidden: false,
				type: 1,
				fields: [],
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
		fields: [],
		children: [
			{
				text: 'Digest',
				selected: false,
				hidden: false,
				type: 1,
				text1: 'Описание',
				fields: [
					{
						id: 3, check: true, sort: true, filter: true, type: 2, label: 'Статус', options: [
							'Любой',
							'Подготовка',
							'В работе',
							'Делегировано',
							'На согласовании',
							'Согласовано',
							'В архиве',
						], val: 'Любой', notset: false
					},
					{ id: 4, check: true, sort: true, filter: true, type: 1, label: 'Рег. номер', notset: false, },
				]
			},
			{
				text: 'Задания',
				selected: false,
				hidden: false,
				type: 1,
				text1: 'Описание',
				fields: [
					{ id: 4, check: true, sort: true, filter: true, type: 1, label: 'Рег. номер', notset: false, },
					{
						id: 3, check: true, sort: true, filter: true, type: 2, label: 'Статус', options: [
							'Любой',
							'Подготовка',
							'В работе',
							'Делегировано',
							'На согласовании',
							'Согласовано',
							'В архиве',
						], val: 'Любой', notset: false
					},
					{ id: 6, check: true, sort: true, filter: true, type: 3, label: 'Автор', notset: false, },
				]
			},
			{
				text: 'Отдел кадров',
				selected: false,
				hidden: false,
				type: 1,
				text1: 'Описание',
				fields: [
					{ id: 12, check: true, sort: true, filter: true, type: 4, label: 'Срок исполнения', notset: false, },
					{ id: 10, check: true, sort: true, filter: true, type: 4, label: 'Создано', notset: false, },
					{ id: 14, check: true, sort: true, filter: true, type: 3, label: 'Согласущие', notset: false, },
				]
			},
		],
	},
]
export { searches, views, mySearches }
