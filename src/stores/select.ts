import { useStore } from '@/stores/store'
const store = useStore()

const fields = [
	'Тип',
	'Вид карточки',
	'Статус',
	'Рег. номер',
	'Дата регистрации',
	'Автор',
	'Исполнитель',
	'Контролер',
	'Подготовил',
	'Создано',
	'Изменено',
	'Срок исполнения',
	'Контрагент',
	'Согласущие',
	'Подписывает',
	'Получатели',
	'Основные файлы',
	'Дополнительные файлы',
	'Подпись',
]

const cols = ['Название', 'Тип', 'Вид карточки', 'Статус', 'Автор', 'Изменено']

const conditions = [
	'Равно',
	'Не равно',
	'Значение задано',
	'Значение не задано',
	'Начинается с',
	'Заканчивается на',
	'Содержит',
	'Не содержит',
	'Больше чем',
	'Меньше чем',
	'Больше или равно',
	'Меньше или равно',
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
	'Заявка',
	'Договор',
	'Письмо',
	'Входящий',
	'Исходящий',
	'Приказ',
	'Заявление',
	'Письмо',
	'Черновик',
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
	{ id: 1, check: true, sort: true, filter: true, type: 2, label: 'Тип', options: ['Документ', 'Задание', 'Группа заданий', 'Любой'] },
	{
		id: 2, check: true, sort: true, filter: true, type: 2, label: 'Вид карточки', options: [
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
		]
	},
	{
		id: 3, check: true, sort: true, filter: true, type: 2, label: 'Статус', options: [
			'Любой',
			'Подготовка',
			'В работе',
			'Делегировано',
			'На согласовании',
			'Согласовано',
			'В архиве',
		]
	},
	{ id: 4, check: true, sort: true, filter: true, type: 1, label: 'Рег. номер', },
	{ id: 5, check: true, sort: true, filter: true, type: 4, label: 'Дата регистрации', },
	{ id: 6, check: true, sort: true, filter: true, type: 3, label: 'Автор', },
	{ id: 7, check: true, sort: true, filter: true, type: 3, label: 'Исполнитель', },
	{ id: 8, check: true, sort: true, filter: true, type: 3, label: 'Контролер', },
	{ id: 9, check: true, sort: true, filter: true, type: 3, label: 'Подготовил', },
	{ id: 10, check: true, sort: true, filter: true, type: 4, label: 'Создано', },
	{ id: 11, check: true, sort: true, filter: true, type: 4, label: 'Изменено', },
	{ id: 12, check: true, sort: true, filter: true, type: 4, label: 'Срок исполнения', },
	{ id: 13, check: true, sort: true, filter: true, type: 3, label: 'Контрагент', },
	{ id: 14, check: true, sort: true, filter: true, type: 3, label: 'Согласущие', },
	{ id: 15, check: true, sort: true, filter: true, type: 3, label: 'Подписывает', },
	{ id: 16, check: true, sort: true, filter: true, type: 3, label: 'Получатели', },
	{ id: 17, check: true, sort: true, filter: true, type: 0, label: 'Основные файлы', },
	{ id: 18, check: true, sort: true, filter: true, type: 0, label: 'Дополнительные файлы', },
	{ id: 19, check: true, sort: true, filter: true, type: 0, label: 'Подпись', },
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
	{ id: 0, check: true, sort: true, filter: true, type: 2, label: 'Атрибут 1', options: commonOptions },
	{ id: 1, check: true, sort: true, filter: true, type: 2, label: 'Атрибут 2', options: commonOptions },
	{ id: 2, check: true, sort: true, filter: true, type: 2, label: 'Атрибут 3', options: commonOptions },
	{ id: 3, check: true, sort: true, filter: true, type: 2, label: 'Атрибут 4', options: commonOptions },
	{ id: 4, check: true, sort: true, filter: true, type: 2, label: 'Атрибут 5', options: commonOptions },
	{ id: 5, check: true, sort: true, filter: true, type: 2, label: 'Атрибут 6', options: commonOptions },
	{ id: 6, check: true, sort: true, filter: true, type: 2, label: 'Атрибут 7', options: commonOptions },
	{ id: 7, check: true, sort: true, filter: true, type: 2, label: 'Атрибут 8', options: commonOptions },
	{ id: 8, check: true, sort: true, filter: true, type: 2, label: 'Атрибут 9', options: commonOptions },
]
export { datasource, datasource1, fields, conditions, values, names, type, cols, vid, status, history }
