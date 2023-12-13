import { uid } from 'quasar'

const fields = [
	{
		id: uid(),
		text: 'Операторы',
		hidden: false,
		open: true,
		type: 0,
		selected: false,
		drag: false,
		children: [
			{
				id: uid(),
				text: 'И',
				hidden: false,
				type: 0,
				selected: false,
				drag: true,
				drop: true,
			},
			{
				id: uid(),
				text: 'ИЛИ',
				hidden: false,
				type: 0,
				typ: true,
				selected: false,
				drag: true,
				drop: true,
			},
		],
	},
	{
		id: uid(),
		text: 'Тип карточки',
		hidden: false,
		open: true,
		type: 1,
		selected: false,
		drag: false,
		children: [
			{
				id: uid(),
				text: 'Документ',
				hidden: false,
				type: 1,
				selected: false,
				drag: false,
				drop: false,
				children: [
					{
						type: 1,
						id: uid(),
						parent: ['Документ'],
						text: 'Заявка',
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						type: 1,
						id: uid(),
						parent: ['Документ'],
						text: 'Договор',
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						type: 1,
						id: uid(),
						parent: ['Документ'],
						text: 'Письмо',
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						type: 1,
						id: uid(),
						parent: ['Документ'],
						text: 'Входящий',
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						type: 1,
						id: uid(),
						parent: ['Документ'],
						text: 'Исходящий',
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						type: 1,
						id: uid(),
						parent: ['Документ'],
						text: 'Приказ',
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						type: 1,
						id: uid(),
						parent: ['Документ'],
						text: 'Заявление',
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						type: 1,
						id: uid(),
						parent: ['Документ'],
						text: 'Письмо',
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						type: 1,
						id: uid(),
						parent: ['Документ'],
						hidden: false,
						selected: false,
						drag: true,
					},
				],
			},
			{
				id: uid(),
				text: 'Задание',
				hidden: false,
				type: 1,
				selected: false,
				drag: false,
				children: [
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Тема',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Дата завершения',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						date: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Дата контроля',
						date: true,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Дата отправки',
						date: true,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Важность',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Автор',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						man: true,
						children: [
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Фамилия',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Имя',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Отчество',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Дата рождения',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Должность',
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Руководитель',
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Местный телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Домашний телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Факс',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Номер паспорта',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Паспорт выдан',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Комната',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Сотовый телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'IP телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Значимость',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Email',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Организация',
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Автор'],
								text: 'Является руководителем',
								drag: true,
								ruk: true,
							},
						],
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Содержание ',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Документ',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Исполнители',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						man: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Состояние ',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Подчиненные группы заданий',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Подчиненные задания',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Контролер',
						man: true,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						children: [
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Фамилия',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Имя',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Отчество',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Дата рождения',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Должность',
								man: true,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Руководитель',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Местный телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Домашний телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Факс',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Номер паспорта',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Паспорт выдан',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Комната',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Сотовый телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'IP телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Значимость',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Email',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Организация',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Контролер'],
								text: 'Является руководителем',
								drag: true,
								ruk: true,
							},
						],
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Вид контроля',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						children: [
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Вид контроля'],
								text: 'Option 1',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Вид контроля'],
								text: 'Option 2',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Вид контроля'],
								text: 'Option 3',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Вид контроля'],
								text: 'Option 4',
								drag: true,
							},
						],
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Делегат',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						children: [
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Делегат'],
								text: 'Option 1',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Делегат'],
								text: 'Option 2',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Делегат'],
								text: 'Option 3',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['Задание', 'Делегат'],
								text: 'Option 4',
								drag: true,
							},
						],
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Длительность фактическая',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Завершено позже срока',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['Задание'],
						text: 'Задание ответственного исполнителя',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
				],
			},
			{
				id: uid(),
				text: 'Группа заданий',
				hidden: false,
				type: 1,
				selected: false,
				drag: false,
				children: [
					{
						id: uid(),
						parent: ['ГЗ'],
						text: 'Тема',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['ГЗ'],
						text: 'Отправлено',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['ГЗ'],
						text: 'Срок исполнения',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['ГЗ'],
						text: 'Автор',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
						man: true,
						children: [
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Фамилия',
								man: true,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Имя',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Отчество',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Дата рождения',
								date: true,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Должность',
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Руководитель',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Местный телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Домашний телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Факс',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Номер паспорта',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Паспорт выдан',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Комната',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Сотовый телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'IP телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Значимость',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Email',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Организация',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parent: ['ГЗ', 'Автор'],
								text: 'Является руководителем',
								drag: true,
								ruk: true,
							},
						],
					},
					{
						id: uid(),
						parent: ['ГЗ'],
						text: 'Содержание ',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['ГЗ'],
						text: 'Документ',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['ГЗ'],
						text: 'Исполнители',
						man: true,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['ГЗ'],
						text: 'Состояние ',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['ГЗ'],
						text: 'Подчиненные задания',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parent: ['ГЗ'],
						text: 'Контролер',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
						man: true,
					},
					{
						id: uid(),
						parent: ['ГЗ'],
						text: 'Тип',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
				],
			},
		],
	},
]

export { fields }
