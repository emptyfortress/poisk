enum Kind {
	Text,
	Date,
	Org,
	Num,
	Man,
	Status,
	Link,
	Phone,
	Email,
	Bool,
}
const fields = [
	{
		id: 'oper',
		text: 'Операторы',
		hidden: false,
		open: true,
		type: 0,
		selected: false,
		drag: false,
		children: [
			{
				id: '1',
				text: 'И',
				hidden: false,
				type: 0,
				selected: false,
				drag: true,
				drop: true,
			},
			{
				id: '2',
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
		id: 'type',
		text: 'Тип карточки',
		hidden: false,
		open: true,
		type: 1,
		selected: false,
		drag: false,
		children: [
			{
				id: 'doc',
				text: 'Документ',
				hidden: false,
				type: 1,
				selected: false,
				drag: false,
				drop: false,
				open: true,
				children: [
					{
						id: 'doctheme',
						parents: ['Документ'],
						text: 'Тема',
						type: 1,
						hidden: false,
						open: true,
						selected: false,
						drag: true,
						drop: false,
						kind: Kind.Text,
						inp: true,
					},
					{
						id: 'docnumber',
						parents: ['Документ'],
						text: 'Номер',
						kind: Kind.Num,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
						inp: true,
					},
					{
						id: 'docdate',
						parents: ['Документ'],
						text: 'Дата регистрации',
						kind: Kind.Date,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
						date: true,
					},
					{
						type: 1,
						id: '3',
						parents: ['Документ'],
						text: 'Заявка',
						hidden: false,
						selected: false,
						drag: false,
					},
					{
						type: 1,
						id: '4',
						parents: ['Документ'],
						text: 'Договор',
						hidden: false,
						selected: false,
						drag: false,
					},
					{
						type: 1,
						id: '5',
						parents: ['Документ'],
						text: 'Письмо',
						hidden: false,
						selected: false,
						drag: false,
					},
					{
						type: 1,
						id: '6',
						parents: ['Документ'],
						text: 'Исходящий',
						hidden: false,
						selected: false,
						drag: false,
						children: [
							{
								id: '7',
								parents: ['Документ', 'Исходящий'],
								text: 'Тема',
								kind: Kind.Text,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								inp: true,
							},
							{
								id: '8',
								parents: ['Документ', 'Исходящий'],
								text: 'Номер',
								kind: Kind.Num,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								inp: true,
							},
							{
								id: '9',
								parents: ['Документ', 'Исходящий'],
								text: 'Дата регистрации',
								kind: Kind.Date,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								date: true,
							},
							{
								id: '10',
								parents: ['Документ', 'Исходящий'],
								text: 'Подготовил',
								kind: Kind.Man,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
							},
							{
								id: '11',
								parents: ['Документ', 'Исходящий'],
								text: 'Содержание',
								kind: Kind.Text,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								inp: true,
							},
							{
								id: '12',
								parents: ['Документ', 'Исходящий'],
								text: 'Согласующие',
								kind: Kind.Man,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
							},
							{
								id: '13',
								parents: ['Документ', 'Исходящий'],
								text: 'Подписывают',
								kind: Kind.Man,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
							},
							{
								id: '14',
								parents: ['Документ', 'Исходящий'],
								text: 'Получатели',
								kind: Kind.Org,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
								children: [
									{
										id: '15',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Контактное лицо',
										kind: Kind.Man,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
									{
										id: '16',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Организация',
										kind: Kind.Org,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
									{
										id: '17',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Телефон',
										kind: Kind.Phone,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
									{
										id: '18',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Email',
										kind: Kind.Email,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
								],
							},
							{
								id: '19',
								parents: ['Документ', 'Исходящий'],
								text: 'Состояние',
								kind: Kind.Status,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
							{
								id: '20',
								parents: ['Документ', 'Исходящий'],
								text: 'Заданиe',
								kind: Kind.Link,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
							{
								id: '21',
								parents: ['Документ', 'Исходящий'],
								text: 'Группа заданий',
								kind: Kind.Link,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
						],
					},
					{
						type: 1,
						id: '22',
						parents: ['Документ'],
						text: 'Входящий',
						hidden: false,
						selected: false,
						drag: false,
						children: [
							{
								id: '23',
								parents: ['Документ', 'Входящий'],
								text: 'Тема',
								kind: Kind.Text,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								inp: true,
							},
							{
								id: '24',
								parents: ['Документ', 'Входящий'],
								text: 'Номер',
								kind: Kind.Num,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								inp: true,
							},
							{
								id: '25',
								parents: ['Документ', 'Входящий'],
								text: 'Дата регистрации',
								kind: Kind.Date,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								date: true,
							},
							{
								id: '26',
								parents: ['Документ', 'Входящий'],
								text: 'Регистратор',
								kind: Kind.Man,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
							},
							{
								id: '27',
								parents: ['Документ', 'Входящий'],
								text: 'Содержание',
								kind: Kind.Text,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								inp: true,
							},
							{
								id: '28',
								parents: ['Документ', 'Входящий'],
								text: 'Получатели',
								kind: Kind.Org,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
								children: [
									{
										id: '29',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Контактное лицо',
										kind: Kind.Man,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
									{
										id: '30',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Организация',
										kind: Kind.Org,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
									{
										id: '31',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Телефон',
										kind: Kind.Phone,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
									{
										id: '32',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Email',
										kind: Kind.Email,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
								],
							},
							{
								id: '33',
								parents: ['Документ', 'Входящий'],
								text: 'Исх.номер',
								kind: Kind.Num,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
							},
							{
								id: '34',
								parents: ['Документ', 'Входящий'],
								text: 'Дата документа',
								kind: Kind.Date,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
							},
							{
								id: '35',
								parents: ['Документ', 'Входящий'],
								text: 'Отправитель',
								kind: Kind.Org,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
								man: true,
								children: [
									{
										id: '36',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Контактное лицо',
										kind: Kind.Man,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
									{
										id: '37',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Организация',
										kind: Kind.Org,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
									{
										id: '38',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Телефон',
										kind: Kind.Phone,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
									{
										id: '39',
										parents: ['Документ', 'Исходящий', 'Получатели'],
										text: 'Email',
										kind: Kind.Email,
										type: 1,
										hidden: false,
										selected: false,
										drag: true,
										man: true,
									},
								],
							},
							{
								id: '40',
								parents: ['Документ', 'Входящий'],
								text: 'Состояние',
								kind: Kind.Status,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
							{
								id: '41',
								parents: ['Документ', 'Входящий'],
								text: 'Заданиe',
								kind: Kind.Link,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
							{
								id: '42',
								parents: ['Документ', 'Входящий'],
								text: 'Группа заданий',
								kind: Kind.Link,
								type: 1,
								hidden: false,
								selected: false,
								drag: true,
							},
						],
					},
					{
						type: 1,
						id: '43',
						parents: ['Документ'],
						text: 'Приказ',
						hidden: false,
						selected: false,
						drag: false,
					},
					{
						type: 1,
						id: '44',
						parents: ['Документ'],
						text: 'Заявление',
						hidden: false,
						selected: false,
						drag: false,
					},
					{
						type: 1,
						id: '45',
						parents: ['Документ'],
						text: 'Черновик',
						hidden: false,
						selected: false,
						drag: false,
					},
				],
			},
			{
				id: 'task',
				text: 'Задание',
				hidden: false,
				type: 1,
				selected: false,
				drag: false,
				children: [
					{
						id: '46',
						parents: ['Задание', 'На исполнение'],
						text: 'Тема',
						kind: Kind.Text,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						inp: true,
					},
					{
						id: '47',
						parents: ['Задание', 'На исполнение'],
						text: 'Дата завершения',
						kind: Kind.Date,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						date: true,
					},
					{
						id: '48',
						parents: ['Задание', 'На исполнение'],
						text: 'Дата контроля',
						kind: Kind.Date,
						date: true,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: '49',
						parents: ['Задание', 'На исполнение'],
						text: 'Дата отправки',
						kind: Kind.Date,
						date: true,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: '50',
						parents: ['Задание', 'На исполнение'],
						text: 'Важность',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: '51',
						parents: ['Задание', 'На исполнение'],
						text: 'Автор',
						kind: Kind.Man,
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
								id: '52',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Фамилия',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '53',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Имя',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '54',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Отчество',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '55',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Дата рождения',
								kind: Kind.Date,
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '56',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Должность',
								kind: Kind.Text,
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '57',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Руководитель',
								kind: Kind.Bool,
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '58',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Местный телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '59',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Домашний телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '60',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Факс',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '61',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Номер паспорта',
								kind: Kind.Text,
								drag: true,
								inp: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '62',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Паспорт выдан',
								kind: Kind.Text,
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '63',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Комната',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '64',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Сотовый телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '65',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'IP телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '66',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Значимость',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '67',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Email',
								kind: Kind.Email,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '68',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Организация',
								kind: Kind.Org,
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '69',
								parents: ['Задание', 'На исполнение', 'Автор'],
								text: 'Является руководителем',
								kind: Kind.Bool,
								drag: true,
								ruk: true,
							},
						],
					},
					{
						id: '70',
						parents: ['Задание', 'На исполнение'],
						text: 'Содержание ',
						kind: Kind.Text,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						inp: true,
					},
					{
						id: '71',
						parents: ['Задание', 'На исполнение'],
						text: 'Докумeнт',
						kind: Kind.Link,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: '72',
						parents: ['Задание', 'На исполнение'],
						text: 'Исполнители',
						kind: Kind.Man,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						man: true,
					},
					{
						id: '73',
						parents: ['Задание', 'На исполнение'],
						text: 'Состояние ',
						kind: Kind.Status,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: '74',
						parents: ['Задание', 'На исполнение'],
						text: 'Подчиненные группы заданий',
						kind: Kind.Link,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: '75',
						parents: ['Задание', 'На исполнение'],
						text: 'Подчиненные задания',
						kind: Kind.Link,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: '76',
						parents: ['Задание', 'На исполнение'],
						text: 'Контролер',
						kind: Kind.Man,
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
								id: '77',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Фамилия',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '78',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Имя',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '79',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Отчество',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '80',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Дата рождения',
								kind: Kind.Text,
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '81',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Должность',
								kind: Kind.Text,
								man: true,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '82',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Руководитель',
								kind: Kind.Man,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '83',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Местный телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '84',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Домашний телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '85',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Факс',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '86',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Номер паспорта',
								kind: Kind.Text,
								drag: true,
								inp: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '87',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Паспорт выдан',
								kind: Kind.Text,
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '88',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Комната',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '89',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Сотовый телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '90',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'IP телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '91',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Значимость',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '92',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Email',
								kind: Kind.Email,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '93',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Организация',
								kind: Kind.Org,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '94',
								parents: ['Задание', 'На исполнение', 'Контролер'],
								text: 'Является руководителем',
								kind: Kind.Bool,
								drag: true,
								ruk: true,
							},
						],
					},
					{
						id: '95',
						parents: ['Задание', 'На исполнение'],
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
								id: '96',
								parents: ['Задание', 'На исполнение', 'Вид контроля'],
								text: 'Option 1',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '97',
								parents: ['Задание', 'На исполнение', 'Вид контроля'],
								text: 'Option 2',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '98',
								parents: ['Задание', 'На исполнение', 'Вид контроля'],
								text: 'Option 3',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '99',
								parents: ['Задание', 'На исполнение', 'Вид контроля'],
								text: 'Option 4',
								drag: true,
							},
						],
					},
					{
						id: '100',
						parents: ['Задание', 'На исполнение'],
						text: 'Делегат',
						kind: Kind.Man,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						children: [
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '101',
								parents: ['Задание', 'На исполнение', 'Делегат'],
								text: 'Фамилия',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '102',
								parents: ['Задание', 'На исполнение', 'Делегат'],
								text: 'Имя',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '103',
								parents: ['Задание', 'На исполнение', 'Делегат'],
								text: 'Отчество',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '104',
								parents: ['Задание', 'На исполнение', 'Делегат'],
								text: 'Дата рождения',
								kind: Kind.Text,
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '105',
								parents: ['Задание', 'На исполнение', 'Делегат'],
								text: 'Должность',
								kind: Kind.Text,
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '106',
								parents: ['Задание', 'На исполнение', 'Делегат'],
								text: 'Руководитель',
								kind: Kind.Man,
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '107',
								parents: ['Задание', 'На исполнение', 'Делегат'],
								text: 'Местный телефон',
								kind: Kind.Phone,
								drag: true,
							},
						],
					},
					{
						id: '108',
						parents: ['Задание', 'На исполнение'],
						text: 'Длительность фактическая',
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
					{
						id: '109',
						parents: ['Задание', 'На исполнение'],
						text: 'Завершено позже срока',
						kind: Kind.Bool,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
						ruk: true,
					},
					{
						id: '110',
						parents: ['Задание', 'На исполнение'],
						text: 'Задание ответственного исполнителя',
						kind: Kind.Bool,
						hidden: false,
						type: 1,
						selected: false,
						drag: true,
					},
				],
			},
			{
				id: '111',
				text: 'Группа заданий',
				hidden: false,
				type: 1,
				selected: false,
				drag: false,
				children: [
					{
						id: '112',
						parents: ['ГЗ'],
						text: 'Тема',
						kind: Kind.Text,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
						inp: true,
					},
					{
						id: '113',
						parents: ['ГЗ'],
						text: 'Отправлено',
						kind: Kind.Date,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: '114',
						parents: ['ГЗ'],
						text: 'Срок исполнения',
						kind: Kind.Date,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: '115',
						parents: ['ГЗ'],
						text: 'Автор',
						kind: Kind.Man,
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
								id: '116',
								parents: ['ГЗ', 'Автор'],
								text: 'Фамилия',
								kind: Kind.Text,
								man: true,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '117',
								parents: ['ГЗ', 'Автор'],
								text: 'Имя',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '118',
								parents: ['ГЗ', 'Автор'],
								text: 'Отчество',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '119',
								parents: ['ГЗ', 'Автор'],
								text: 'Дата рождения',
								kind: Kind.Text,
								date: true,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '120',
								parents: ['ГЗ', 'Автор'],
								text: 'Должность',
								kind: Kind.Text,
								drag: true,
								man: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '121',
								parents: ['ГЗ', 'Автор'],
								text: 'Руководитель',
								kind: Kind.Man,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '122',
								parents: ['ГЗ', 'Автор'],
								text: 'Местный телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '123',
								parents: ['ГЗ', 'Автор'],
								text: 'Домашний телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '124',
								parents: ['ГЗ', 'Автор'],
								text: 'Факс',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '125',
								parents: ['ГЗ', 'Автор'],
								text: 'Номер паспорта',
								kind: Kind.Text,
								drag: true,
								inp: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '126',
								parents: ['ГЗ', 'Автор'],
								text: 'Паспорт выдан',
								kind: Kind.Text,
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '127',
								parents: ['ГЗ', 'Автор'],
								text: 'Комната',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '128',
								parents: ['ГЗ', 'Автор'],
								text: 'Сотовый телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '129',
								parents: ['ГЗ', 'Автор'],
								text: 'IP телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '130',
								parents: ['ГЗ', 'Автор'],
								text: 'Значимость',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '131',
								parents: ['ГЗ', 'Автор'],
								text: 'Email',
								kind: Kind.Email,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '132',
								parents: ['ГЗ', 'Автор'],
								text: 'Организация',
								kind: Kind.Org,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '133',
								parents: ['ГЗ', 'Автор'],
								text: 'Является руководителем',
								kind: Kind.Bool,
								drag: true,
								ruk: true,
							},
						],
					},
					{
						id: '134',
						parents: ['ГЗ'],
						text: 'Содержание ',
						kind: Kind.Text,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
						inp: true,
					},
					{
						id: '135',
						parents: ['ГЗ'],
						text: 'Докумeнт',
						kind: Kind.Link,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: '136',
						parents: ['ГЗ'],
						text: 'Исполнители',
						kind: Kind.Man,
						man: true,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: '137',
						parents: ['ГЗ'],
						text: 'Состояние ',
						kind: Kind.Status,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: '138',
						parents: ['ГЗ'],
						text: 'Подчиненные задания',
						kind: Kind.Link,
						type: 1,
						hidden: false,
						selected: false,
						drag: true,
					},
					{
						id: '139',
						parents: ['ГЗ'],
						text: 'Контролер',
						kind: Kind.Man,
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
								id: '140',
								parents: ['ГЗ', 'Контролер'],
								text: 'Фамилия',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '141',
								parents: ['ГЗ', 'Контролер'],
								text: 'Имя',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '142',
								parents: ['ГЗ', 'Контролер'],
								text: 'Отчество',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '143',
								parents: ['ГЗ', 'Контролер'],
								text: 'Дата рождения',
								kind: Kind.Date,
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '144',
								parents: ['ГЗ', 'Контролер'],
								text: 'Должность',
								kind: Kind.Text,
								man: true,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '145',
								parents: ['ГЗ', 'Контролер'],
								text: 'Руководитель',
								kind: Kind.Man,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '146',
								parents: ['ГЗ', 'Контролер'],
								text: 'Местный телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '147',
								parents: ['ГЗ', 'Контролер'],
								text: 'Домашний телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '148',
								parents: ['ГЗ', 'Контролер'],
								text: 'Факс',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '149',
								parents: ['ГЗ', 'Контролер'],
								text: 'Номер паспорта',
								kind: Kind.Text,
								drag: true,
								inp: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '150',
								parents: ['ГЗ', 'Контролер'],
								text: 'Паспорт выдан',
								kind: Kind.Text,
								drag: true,
								date: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '151',
								parents: ['ГЗ', 'Контролер'],
								text: 'Комната',
								kind: Kind.Text,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '152',
								parents: ['ГЗ', 'Контролер'],
								text: 'Сотовый телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '153',
								parents: ['ГЗ', 'Контролер'],
								text: 'IP телефон',
								kind: Kind.Phone,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '154',
								parents: ['ГЗ', 'Контролер'],
								text: 'Значимость',
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '155',
								parents: ['ГЗ', 'Контролер'],
								text: 'Email',
								kind: Kind.Email,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '156',
								parents: ['ГЗ', 'Контролер'],
								text: 'Организация',
								kind: Kind.Org,
								drag: true,
							},
							{
								type: 1,
								hidden: false,
								selected: false,
								id: '157',
								parents: ['ГЗ', 'Контролер'],
								text: 'Является руководителем',
								kind: Kind.Bool,
								drag: true,
								ruk: true,
							},
						],
					},
					{
						id: '158',
						parents: ['ГЗ'],
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
