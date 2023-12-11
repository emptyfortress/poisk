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
				fields: [],
			},
			{
				text: 'Мои командировки',
				text1: 'Описание поиска',
				hidden: false,
				selected: false,
				type: 1,
				fields: [
					{
						id: 1,
						check: true,
						sort: true,
						filter: true,
						type: 2,
						label: 'Тип',
						options: ['Документ', 'Задание', 'Группа заданий', 'Любой'],
						val: 'Документ',
						notset: false,
					},
				],
			},
			{
				text: 'Задания на контроле',
				text1: 'Описание поиска',
				hidden: false,
				selected: false,
				type: 1,
				fields: [
					{
						id: 1,
						check: true,
						sort: true,
						filter: true,
						type: 2,
						label: 'Тип',
						options: ['Документ', 'Задание', 'Группа заданий', 'Любой'],
						val: 'Документ',
						notset: false,
					},
					{
						id: 2,
						check: true,
						sort: true,
						filter: true,
						type: 2,
						label: 'Вид карточки',
						val: 'Любой',
						options: [
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
						],
						notset: false,
					},
				],
			},
		],
	},
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
						id: 3,
						check: true,
						sort: true,
						filter: true,
						type: 2,
						label: 'Статус',
						options: [
							'Любой',
							'Подготовка',
							'В работе',
							'Делегировано',
							'На согласовании',
							'Согласовано',
							'В архиве',
						],
						val: 'Любой',
						notset: false,
					},
					{
						id: 4,
						check: true,
						sort: true,
						filter: true,
						type: 1,
						label: 'Рег. номер',
						notset: false,
					},
				],
			},
			{
				text: 'Задания',
				selected: false,
				hidden: false,
				type: 1,
				text1: 'Описание',
				fields: [
					{
						id: 4,
						check: true,
						sort: true,
						filter: true,
						type: 1,
						label: 'Рег. номер',
						notset: false,
					},
					{
						id: 3,
						check: true,
						sort: true,
						filter: true,
						type: 2,
						label: 'Статус',
						options: [
							'Любой',
							'Подготовка',
							'В работе',
							'Делегировано',
							'На согласовании',
							'Согласовано',
							'В архиве',
						],
						val: 'Любой',
						notset: false,
					},
					{ id: 6, check: true, sort: true, filter: true, type: 3, label: 'Автор', notset: false },
				],
			},
			{
				text: 'Отдел кадров',
				selected: false,
				hidden: false,
				type: 1,
				text1: 'Описание',
				fields: [
					{
						id: 12,
						check: true,
						sort: true,
						filter: true,
						type: 4,
						label: 'Срок исполнения',
						notset: false,
					},
					{
						id: 10,
						check: true,
						sort: true,
						filter: true,
						type: 4,
						label: 'Создано',
						notset: false,
					},
					{
						id: 14,
						check: true,
						sort: true,
						filter: true,
						type: 3,
						label: 'Согласущие',
						notset: false,
					},
				],
			},
		],
	},
]

const fields = [
	{
		text: 'Операторы',
		hidden: false,
		open: true,
		type: 0,
		selected: false,
		children: [
			{ text: 'И', hidden: false, type: 1, selected: false },
			{ text: 'ИЛИ', hidden: false, type: 1, selected: false },
		],
	},
	{
		text: 'Тип карточки',
		hidden: false,
		open: true,
		type: 0,
		selected: false,
		children: [
			{
				text: 'Документ',
				hidden: false,
				type: 0,
				selected: false,
				children: [
					{ type: 0, text: 'Заявка', hidden: false, selected: false },
					{ type: 0, text: 'Договор', hidden: false, selected: false },
					{ type: 0, text: 'Письмо', hidden: false, selected: false },
					{ type: 1, text: 'Входящий', hidden: false, selected: false },
					{ type: 1, text: 'Исходящий', hidden: false, selected: false },
					{ type: 0, text: 'Приказ', hidden: false, selected: false },
					{ type: 0, text: 'Заявление', hidden: false, selected: false },
					{ type: 0, text: 'Письмо', hidden: false, selected: false },
					{ type: 0, text: 'Черновик', hidden: false, selected: false },
				],
			},
			{
				text: 'Задание',
				hidden: false,
				type: 0,
				selected: false,
				children: [
					{ text: 'Тема', hidden: false, type: 0, selected: false },
					{ text: 'Дата завершения плановая', hidden: false, type: 0, selected: false },
					{
						text: 'Дата завершения плановая до переносов',
						hidden: false,
						type: 0,
						selected: false,
					},
					{ text: 'Дата завершения фактическая', hidden: false, type: 0, selected: false },
					{ text: 'Дата контроля', hidden: false, type: 0, selected: false },
					{ text: 'Дата напоминания', hidden: false, type: 0, selected: false },
					{ text: 'Дата начала плановая', hidden: false, type: 0, selected: false },
					{ text: 'Дата начала плановая до переносов', hidden: false, type: 0, selected: false },
					{ text: 'Дата начала фактическая', hidden: false, type: 0, selected: false },
					{ text: 'Дата отправки', hidden: false, type: 0, selected: false },
					{ text: 'Важность', hidden: false, type: 0, selected: false },
					{
						text: 'Автор',
						hidden: false,
						type: 0,
						selected: false,
						children: [
							{ type: 0, hidden: false, selected: false, text: 'Фамилия' },
							{ type: 0, hidden: false, selected: false, text: 'Имя' },
							{ type: 0, hidden: false, selected: false, text: 'Отчество' },
							{ type: 2, hidden: false, selected: false, text: 'Дата рождения' },
							{ type: 1, hidden: false, selected: false, text: 'Должность' },
							{ type: 1, hidden: false, selected: false, text: 'Руководитель' },
							{ type: 0, hidden: false, selected: false, text: 'Местный телефон' },
							{ type: 0, hidden: false, selected: false, text: 'Домашний телефон' },
							{ type: 0, hidden: false, selected: false, text: 'Факс' },
							{ type: 0, hidden: false, selected: false, text: 'Номер паспорта' },
							{ type: 2, hidden: false, selected: false, text: 'Паспорт выдан' },
							{ type: 0, hidden: false, selected: false, text: 'Комната' },
							{ type: 0, hidden: false, selected: false, text: 'Сотовый телефон' },
							{ type: 0, hidden: false, selected: false, text: 'IP телефон' },
							{ type: 0, hidden: false, selected: false, text: 'Значимость' },
							{ type: 0, hidden: false, selected: false, text: 'Email' },
							{ type: 1, hidden: false, selected: false, text: 'Организация' },
							{ type: 5, hidden: false, selected: false, text: 'Является руководителем' },
						],
					},
					{ text: 'Содержание ', hidden: false, type: 0, selected: false },
					{ text: 'Документ', hidden: false, type: 0, selected: false },
					{ text: 'Исполнители', hidden: false, type: 0, selected: false },
					{ text: 'Состояние ', hidden: false, type: 0, selected: false },
					{ text: 'Подчиненные группы заданий', hidden: false, type: 0, selected: false },
					{ text: 'Подчиненные задания', hidden: false, type: 0, selected: false },
					{
						text: 'Контролер',
						hidden: false,
						type: 0,
						selected: false,
						children: [
							{ type: 0, hidden: false, selected: false, text: 'Фамилия' },
							{ type: 0, hidden: false, selected: false, text: 'Имя' },
							{ type: 0, hidden: false, selected: false, text: 'Отчество' },
							{ type: 2, hidden: false, selected: false, text: 'Дата рождения' },
							{ type: 1, hidden: false, selected: false, text: 'Должность' },
							{ type: 1, hidden: false, selected: false, text: 'Руководитель' },
							{ type: 0, hidden: false, selected: false, text: 'Местный телефон' },
							{ type: 0, hidden: false, selected: false, text: 'Домашний телефон' },
							{ type: 0, hidden: false, selected: false, text: 'Факс' },
							{ type: 0, hidden: false, selected: false, text: 'Номер паспорта' },
							{ type: 2, hidden: false, selected: false, text: 'Паспорт выдан' },
							{ type: 0, hidden: false, selected: false, text: 'Комната' },
							{ type: 0, hidden: false, selected: false, text: 'Сотовый телефон' },
							{ type: 0, hidden: false, selected: false, text: 'IP телефон' },
							{ type: 0, hidden: false, selected: false, text: 'Значимость' },
							{ type: 0, hidden: false, selected: false, text: 'Email' },
							{ type: 1, hidden: false, selected: false, text: 'Организация' },
							{ type: 5, hidden: false, selected: false, text: 'Является руководителем' },
						],
					},
					{
						text: 'Вид контроля',
						hidden: false,
						type: 0,
						selected: false,
						children: [
							{ type: 0, hidden: false, selected: false, text: 'Option 1' },
							{ type: 0, hidden: false, selected: false, text: 'Option 2' },
							{ type: 0, hidden: false, selected: false, text: 'Option 3' },
							{ type: 0, hidden: false, selected: false, text: 'Option 4' },
						],
					},
					{
						text: 'Делегат',
						hidden: false,
						type: 0,
						selected: false,
						children: [
							{ type: 0, hidden: false, selected: false, text: 'Option 1' },
							{ type: 0, hidden: false, selected: false, text: 'Option 2' },
							{ type: 0, hidden: false, selected: false, text: 'Option 3' },
							{ type: 0, hidden: false, selected: false, text: 'Option 4' },
						],
					},
					{ text: 'Длительность фактическая', hidden: false, type: 0, selected: false },
					{ text: 'Завершено позже срока', hidden: false, type: 0, selected: false },
					{ text: 'Задание ответственного исполнителя', hidden: false, type: 0, selected: false },
					{ text: 'Запрошенный срок', hidden: false, type: 0, selected: false },
				],
			},
			{
				text: 'Группа заданий',
				hidden: false,
				type: 0,
				selected: false,
				children: [
					{ text: 'Тема', type: 0, hidden: false, selected: false },
					{ text: 'Отправлено', type: 0, hidden: false, selected: false },
					{ text: 'Срок исполнения', type: 0, hidden: false, selected: false },
					{ text: 'Автор', type: 0, hidden: false, selected: false },
					{ text: 'Содержание ', type: 0, hidden: false, selected: false },
					{ text: 'Документ', type: 0, hidden: false, selected: false },
					{ text: 'Исполнители', type: 0, hidden: false, selected: false },
					{ text: 'Состояние ', type: 0, hidden: false, selected: false },
					{ text: 'Подчиненные задания', type: 0, hidden: false, selected: false },
					{ text: 'Контролер', type: 0, hidden: false, selected: false },
					{ text: 'Тип', type: 0, hidden: false, selected: false },
				],
			},
		],
	},
]
export { searches, views, mySearches, fields }
