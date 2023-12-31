const man = [
	{ type: 0, kind: [], value: 'Фамилия', label: 'Фамилия' },
	{ type: 0, kind: [], value: 'Имя', label: 'Имя' },
	{ type: 0, kind: [], value: 'Отчество', label: 'Отчество' },
	{ type: 2, kind: [], value: 'Дата рождения', label: 'Дата рождения' },
	{ type: 0, kind: [], value: 'Должность', label: 'Должность' },
	{ type: 1, kind: [], value: 'Руководитель', label: 'Руководитель' },
	{ type: 0, kind: [], value: 'Местный телефон', label: 'Местный телефон' },
	{ type: 0, kind: [], value: 'Домашний телефон', label: 'Домашний телефон' },
	{ type: 0, kind: [], value: 'Факс', label: 'Факс' },
	{ type: 0, kind: [], value: 'Номер паспорта', label: 'Номер паспорта' },
	{ type: 2, kind: [], value: 'Паспорт выдан', label: 'Паспорт выдан' },
	{ type: 0, kind: [], value: 'Комната', label: 'Комната' },
	{ type: 0, kind: [], value: 'Сотовый телефон', label: 'Сотовый телефон' },
	{ type: 0, kind: [], value: 'IP телефон', label: 'IP телефон' },
	{ type: 0, kind: [], value: 'Значимость', label: 'Значимость' },
	{ type: 0, kind: [], value: 'Email', label: 'Email' },
	{ type: 1, kind: [], value: 'Организация', label: 'Организация' },
	{ type: 0, kind: [], value: 'Является руководителем', label: 'Является руководителем' },
]
const org = [
	{ type: 1, kind: [], value: 'Название', label: 'Название' },
	{ type: 1, kind: [], value: 'Полное название', label: 'Полное название' },
	{ type: 1, kind: [], value: 'Руководитель', label: 'Руководитель' },
	{ type: 1, kind: [], value: 'Контактное лицо', label: 'Контактное лицо' },
	{ type: 0, kind: [], value: 'Адрес', label: 'Адрес' },
	{ type: 0, kind: [], value: 'Почтовый адрес', label: 'Почтовый адрес' },
	{ type: 0, kind: [], value: 'Юридический адрес', label: 'Юридический адрес' },
	{ type: 0, kind: [], value: 'Телефон', label: 'Телефон' },
	{ type: 0, kind: [], value: 'Телекс', label: 'Телекс' },
	{ type: 0, kind: [], value: 'Email', label: 'Email' },
	{ type: 0, kind: [], value: 'Банк', label: 'Банк' },
	{ type: 0, kind: [], value: 'Расчетный счет', label: 'Расчетный счет' },
	{ type: 0, kind: [], value: 'БИК', label: 'БИК' },
	{ type: 0, kind: [], value: 'ОКПО', label: 'ОКПО' },
	{ type: 0, kind: [], value: 'ОГРН', label: 'ОГРН' },
	{ type: 0, kind: [], value: 'КПП', label: 'КПП' },
	{ type: 0, kind: [], value: 'Корр.счет', label: 'Корр.счет' },
	{ type: 0, kind: [], value: 'ИНН', label: 'ИНН' },
	{ type: 0, kind: [], value: 'ОКВЭД', label: 'ОКВЭД' },
]
const fields = [
	{ type: 0, kind: ['vhod', 'ishod', 'task', 'tasks'], value: 'Тема', label: 'Тема' },
	{ type: 0, kind: ['vhod', 'ishod'], value: 'Номер', label: 'Номер' },
	{ type: 2, kind: ['vhod', 'ishod'], value: 'Дата регистрации', label: 'Дата регистрации' },
	{ type: 1, kind: ['vhod'], value: 'Регистратор', label: 'Регистратор' },
	{ type: 0, kind: ['vhod', 'ishod', 'task', 'tasks'], value: 'Содержание', label: 'Содержание' },
	{ type: 1, kind: ['vhod', 'ishod'], value: 'Получатели', label: 'Получатели' },
	{ type: 0, kind: ['vhod'], value: 'Исх.номер', label: 'Исх.номер' },
	{ type: 2, kind: ['vhod'], value: 'Дата документа', label: 'Дата документа' },
	{ type: 1, kind: ['vhod'], value: 'Отправитель', label: 'Отправитель' },
	{ type: 0, kind: ['vhod', 'ishod', 'task', 'tasks'], value: 'Состояние', label: 'Состояние' },
	{ type: 0, kind: ['vhod', 'ishod'], value: 'Задание', label: 'Задание' },
	{ type: 0, kind: ['vhod', 'ishod'], value: 'Группа заданий', label: 'Группа заданий' },
	{ type: 1, kind: ['ishod'], value: 'Подготовил', label: 'Подготовил' },
	{ type: 1, kind: ['ishod'], value: 'Согласущие', label: 'Согласущие' },
	{ type: 1, kind: ['ishod'], value: 'Подписывают', label: 'Подписывают' },
	{ type: 2, kind: ['task', 'tasks'], value: 'Отправлен', label: 'Отправлен' },
	{ type: 2, kind: ['task', 'tasks'], value: 'Срок исполнения', label: 'Срок исполнения' },
	{ type: 1, kind: ['task', 'tasks'], value: 'Автор', label: 'Автор' },
	{ type: 0, kind: ['task', 'tasks'], value: 'Документ', label: 'Документ' },
	{ type: 1, kind: ['task', 'tasks'], value: 'Исполнители', label: 'Исполнители' },
	{
		type: 0,
		kind: ['task'],
		value: 'Подчиненные группы заданий',
		label: 'Подчиненные группы заданий',
	},
	{ type: 0, kind: ['task', 'tasks'], value: 'Подчиненные задания', label: 'Подчиненные задания' },
	{ type: 1, kind: ['task', 'tasks'], value: 'Контролер', label: 'Контролер' },
	{ type: 0, kind: ['tasks'], value: 'Тип', label: 'Тип' },
]

const cols = ['Название', 'Тип', 'Вид карточки', 'Статус', 'Автор', 'Изменено']

const conditions = [
	{ type: 0, kind: ['man'], value: 'Равно', label: 'Равно' },
	{ type: 0, kind: ['man'], value: 'Не равно', label: 'Не равно' },
	{ type: 0, kind: ['man'], value: 'Значение задано', label: 'Значение задано' },
	{ type: 0, kind: ['man'], value: 'Значение не задано', label: 'Значение не задано' },
	{ type: 0, kind: ['man'], value: 'Начинается с', label: 'Начинается с' },
	{ type: 0, kind: ['man'], value: 'Заканчивается на', label: 'Заканчивается на' },
	{ type: 0, kind: ['man'], value: 'Содержит', label: 'Содержит' },
	{ type: 0, kind: ['man'], value: 'Не содержит', label: 'Не содержит' },
	{ type: 0, kind: [], value: 'Больше, чем', label: 'Больше, чем' },
	{ type: 0, kind: [], value: 'Меньше, чем', label: 'Меньше, чем' },
	{ type: 0, kind: [], value: 'Больше или равно', label: 'Больше или равно' },
	{ type: 0, kind: [], value: 'Меньше или равно', label: 'Меньше или равно' },
	{ type: 0, kind: ['date'], value: 'В указанную дату', label: 'В указанную дату' },
	{ type: 0, kind: ['date'], value: 'Раньше, чем', label: 'Раньше, чем' },
	{ type: 0, kind: ['date'], value: 'Позже, чем', label: 'Позже, чем' },
	{ type: 0, kind: ['date'], value: 'В период между', label: 'В период между' },
	{ type: 0, kind: ['date'], value: 'Исключая период', label: 'Исключая период' },
]

const values = [
	'Значение 0',
	'Значение 1',
	'Значение 2',
	'Значение 3',
	'Значение 4',
	'Значение 5',
	'Значение 6',
	'Значение 7',
	'Значение 8',
	'Значение 9',
	'Значение 10',
	'Значение 11',
	'Значение 12',
	'Значение 13',
	'Значение 14',
	'Значение 15',
	'Значение 16',
	'Значение 17',
]

const names = [
	'Иванов И.К.',
	'Петров З.А.',
	'Орлов П.А.',
	'Гришин П.А.',
	'Горький',
	'Воробьев А.П.',
	'Синичкина К.С.',
	'Жаворонков И.И.',
	'Попугаев Ф.Д.',
	'Уткина М.П.',
	'Селезнева Г.А.',
	'Алроса',
	'Ромашка ООО',
	'Доксвижн',
]

const type = ['Документ', 'Задание', 'Группа заданий']

const vid = [
	{ type: 0, label: 'Заявка', value: 'Заявка' },
	{ type: 0, label: 'Договор', value: 'Договор' },
	{ type: 0, label: 'Письмо', value: 'Письмо' },
	{ type: 1, label: 'Входящий', value: 'Входящий' },
	{ type: 1, label: 'Исходящий', value: 'Исходящий' },
	{ type: 0, label: 'Приказ', value: 'Приказ' },
	{ type: 0, label: 'Заявление', value: 'Заявление' },
	{ type: 0, label: 'Письмо', value: 'Письмо' },
	{ type: 0, label: 'Черновик', value: 'Черновик' },
]
const status = [
	'Черновик',
	'Не начато',
	'В работе',
	'Делегировано',
	'Завершено',
	'Согласовано',
	'Отклонено',
]
const history = [
	'Просрочено',
	'Мои договора за 1 квартал',
	'Мои договора за 2 квартал',
	'Мои договора за 3 квартал',
	'Мои договора за 4 квартал',
	'Я исполнитель',
	'Запрос поиска 0',
	'Запрос поиска 1',
	'Запрос поиска 2',
	'Запрос поиска 3',
	'Запрос поиска 4',
	'Запрос поиска 5',
	'Запрос поиска 6',
	'Запрос поиска 7',
	'Запрос поиска 8',
	'Еще один запрос поиска 1',
	'Еще один запрос поиска 2',
	'Еще один запрос поиска 3',
	'Еще один запрос поиска 4',
	'Еще один запрос поиска 5',
	'Еще один запрос поиска 6',
	'Еще один запрос поиска 7',
]

const datasource = [
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
		val: '',
		type: 1,
		label: 'Рег. номер',
		notset: false,
	},
	{
		id: 5,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 4,
		label: 'Дата регистрации',
		notset: false,
	},
	{ id: 6, check: true, sort: true, filter: true, val: '', type: 3, label: 'Автор', notset: false },
	{
		id: 7,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 3,
		label: 'Исполнитель',
		notset: false,
	},
	{
		id: 8,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 3,
		label: 'Контролер',
		notset: false,
	},
	{
		id: 9,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 3,
		label: 'Подготовил',
		notset: false,
	},
	{
		id: 10,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 4,
		label: 'Создано',
		notset: false,
	},
	{
		id: 11,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 4,
		label: 'Изменено',
		notset: false,
	},
	{
		id: 12,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 4,
		label: 'Срок исполнения',
		notset: false,
	},
	{
		id: 13,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 3,
		label: 'Контрагент',
		notset: false,
	},
	{
		id: 14,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 3,
		label: 'Согласущие',
		notset: false,
	},
	{
		id: 15,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 3,
		label: 'Подписывает',
		notset: false,
	},
	{
		id: 16,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 3,
		label: 'Получатели',
		notset: false,
	},
	{
		id: 17,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 0,
		label: 'Основные файлы',
		notset: false,
	},
	{
		id: 18,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 0,
		label: 'Дополнительные файлы',
		notset: false,
	},
	{
		id: 19,
		check: true,
		sort: true,
		filter: true,
		val: '',
		type: 0,
		label: 'Подпись',
		notset: false,
	},
]
const commonOptions = [
	'Любой',
	'Значение 1',
	'Значение 2',
	'Значение 3',
	'Значение 4',
	'Значение 5',
]
const datasource1 = [
	{
		id: 0,
		check: true,
		sort: true,
		filter: true,
		type: 2,
		label: 'Атрибут 1',
		options: commonOptions,
		notset: false,
	},
	{
		id: 1,
		check: true,
		sort: true,
		filter: true,
		type: 2,
		label: 'Атрибут 2',
		options: commonOptions,
		notset: false,
	},
	{
		id: 2,
		check: true,
		sort: true,
		filter: true,
		type: 2,
		label: 'Атрибут 3',
		options: commonOptions,
		notset: false,
	},
	{
		id: 3,
		check: true,
		sort: true,
		filter: true,
		type: 2,
		label: 'Атрибут 4',
		options: commonOptions,
		notset: false,
	},
	{
		id: 4,
		check: true,
		sort: true,
		filter: true,
		type: 2,
		label: 'Атрибут 5',
		options: commonOptions,
		notset: false,
	},
	{
		id: 5,
		check: true,
		sort: true,
		filter: true,
		type: 2,
		label: 'Атрибут 6',
		options: commonOptions,
		notset: false,
	},
	{
		id: 6,
		check: true,
		sort: true,
		filter: true,
		type: 2,
		label: 'Атрибут 7',
		options: commonOptions,
		notset: false,
	},
	{
		id: 7,
		check: true,
		sort: true,
		filter: true,
		type: 2,
		label: 'Атрибут 8',
		options: commonOptions,
		notset: false,
	},
	{
		id: 8,
		check: true,
		sort: true,
		filter: true,
		type: 2,
		label: 'Атрибут 9',
		options: commonOptions,
		notset: false,
	},
]
export {
	datasource,
	datasource1,
	fields,
	conditions,
	values,
	names,
	type,
	cols,
	vid,
	status,
	history,
	man,
	org,
}
