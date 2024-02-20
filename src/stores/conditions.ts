const str = [
	{ text: 'содержит', selected: false },
	{ text: 'не содержит', selected: false },
	{ text: 'начинается', selected: false },
	{ text: 'оканчивается', selected: false },
	{ text: 'равно', selected: false },
	{ text: 'не равно', selected: false },
	{ text: 'задано', selected: false },
	{ text: 'не задано', selected: false },
]
const date = [
	{ text: 'диапазон', selected: false },
	{ text: 'позже', selected: false },
	{ text: 'позже или равно', selected: false },
	{ text: 'раньше', selected: false },
	{ text: 'раньше или равно', selected: false },
	{ text: 'равно', selected: false },
	{ text: 'не равно', selected: false },
	{ text: 'задано', selected: false },
	{ text: 'не задано', selected: false },
]
const dWords = [
	{ text: 'Сегодня', selected: false, plus: true },
	{ text: 'Сейчас', selected: false, plus: true },
	{ text: 'текущая неделя', selected: false },
	{ text: 'текущий месяц', selected: false },
	{ text: 'текущий квартал', selected: false },
	{ text: 'текущий год', selected: false },
]

export { str, date, dWords }
