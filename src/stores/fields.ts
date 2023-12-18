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
						parents: ['Документ'],
						text: 'Заявка',
						hidden: false,
						selected: false,
						drag: false,
					},
					{
						type: 1,
						id: uid(),
						parents: ['Документ'],
						text: 'Договор',
						hidden: false,
						selected: false,
						drag: false,
					},
					{
						type: 1,
						id: uid(),
						parents: ['Документ'],
						text: 'Письмо',
						hidden: false,
						selected: false,
						drag: false,
					},
					{
						type: 1,
						id: uid(),
						parents: ['Документ'],
						text: 'Входящий',
						hidden: false,
						selected: false,
						drag: false,
						children: [
							{
								id: uid(),
								parents: ['Документ', 'Входящий'],
								text: 'Тема',
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
							{
								id: uid(),
								parents: ['Документ', 'Входящий'],
								text: 'Номер',
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
							{
								id: uid(),
								parents: ['Документ', 'Входящий'],
								text: 'Дата регистрации',
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								date: true,
							},
							{
								id: uid(),
								parents: ['Документ', 'Входящий'],
								text: 'Подготовил',
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
							},
							{
								id: uid(),
								parents: ['Документ', 'Входящий'],
								text: 'Содержание',
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
							{
								id: uid(),
								parents: ['Документ', 'Входящий'],
								text: 'Согласующие',
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
							},
							{
								id: uid(),
								parents: ['Документ', 'Входящий'],
								text: 'Подписывают',
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
							},
							{
								id: uid(),
								parents: ['Документ', 'Входящий'],
								text: 'Получатели',
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
							},
							{
								id: uid(),
								parents: ['Документ', 'Входящий'],
								text: 'Состояние',
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
							{
								id: uid(),
								parents: ['Документ', 'Входящий'],
								text: 'Заданиe',
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
							{
								id: uid(),
								parents: ['Документ', 'Входящий'],
								text: 'Группа заданий',
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
						],
					},
					{
						type: 1,
						id: uid(),
						parents: ['Документ'],
						text: 'Исходящий',
						hidden: false,
						selected: false,
						drag: false,
					},
					{
						type: 1,
						id: uid(),
						parents: ['Документ'],
						text: 'Приказ',
						hidden: false,
						selected: false,
						drag: false,
					},
					{
						type: 1,
						id: uid(),
						parents: ['Документ'],
						text: 'Заявление',
						hidden: false,
						selected: false,
						drag: false,
					},
					{
						type: 1,
						id: uid(),
						parents: ['Документ'],
						text: 'Черновик',
						hidden: false,
						selected: false,
						drag: false,
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
						parents: ['', 'Задание'],
						text: 'Тема',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Дата завершения',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						date: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Дата контроля',
						date: true,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Дата отправки',
						date: true,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Важность',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
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
								parents: ['', 'Задание', 'Автор'],
								text: 'Фамилия',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Имя',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Отчество',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Дата рождения',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Должность',
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Руководитель',
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Местный телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Домашний телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Факс',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Номер паспорта',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Паспорт выдан',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Комната',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Сотовый телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'IP телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Значимость',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Email',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Организация',
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Автор'],
								text: 'Является руководителем',
								drag: true,
								ruk: true,
							},
						],
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Содержание ',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Докумeнт',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Исполнители',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						man: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Состояние ',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Подчиненные группы заданий',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Подчиненные задания',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
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
								parents: ['', 'Задание', 'Контролер'],
								text: 'Фамилия',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Имя',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Отчество',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Дата рождения',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Должность',
								man: true,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Руководитель',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Местный телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Домашний телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Факс',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Номер паспорта',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Паспорт выдан',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Комната',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Сотовый телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'IP телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Значимость',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Email',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Организация',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Контролер'],
								text: 'Является руководителем',
								drag: true,
								ruk: true,
							},
						],
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
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
								parents: ['', 'Задание', 'Вид контроля'],
								text: 'Option 1',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Вид контроля'],
								text: 'Option 2',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Вид контроля'],
								text: 'Option 3',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Вид контроля'],
								text: 'Option 4',
								drag: true,
							},
						],
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
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
								parents: ['', 'Задание', 'Делегат'],
								text: 'Option 1',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Делегат'],
								text: 'Option 2',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Делегат'],
								text: 'Option 3',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'Задание', 'Делегат'],
								text: 'Option 4',
								drag: true,
							},
						],
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Длительность фактическая',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
						text: 'Завершено позже срока',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						ruk: true,
					},
					{
						id: uid(),
						parents: ['', 'Задание'],
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
						parents: ['', 'ГЗ'],
						text: 'Тема',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'ГЗ'],
						text: 'Отправлено',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'ГЗ'],
						text: 'Срок исполнения',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'ГЗ'],
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
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Фамилия',
								man: true,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Имя',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Отчество',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Дата рождения',
								date: true,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Должность',
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Руководитель',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Местный телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Домашний телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Факс',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Номер паспорта',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Паспорт выдан',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Комната',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Сотовый телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'IP телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Значимость',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Email',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Организация',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Автор'],
								text: 'Является руководителем',
								drag: true,
								ruk: true,
							},
						],
					},
					{
						id: uid(),
						parents: ['', 'ГЗ'],
						text: 'Содержание ',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'ГЗ'],
						text: 'Докумeнт',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'ГЗ'],
						text: 'Исполнители',
						man: true,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'ГЗ'],
						text: 'Состояние ',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'ГЗ'],
						text: 'Подчиненные задания',
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: uid(),
						parents: ['', 'ГЗ'],
						text: 'Контролер',
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
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Фамилия',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Имя',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Отчество',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Дата рождения',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Должность',
								man: true,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Руководитель',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Местный телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Домашний телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Факс',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Номер паспорта',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Паспорт выдан',
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Комната',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Сотовый телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'IP телефон',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Значимость',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Email',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Организация',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: uid(),
								parents: ['', 'ГЗ', 'Контролер'],
								text: 'Является руководителем',
								drag: true,
								ruk: true,
							},
						],
					},
					{
						id: uid(),
						parents: ['', 'ГЗ'],
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
