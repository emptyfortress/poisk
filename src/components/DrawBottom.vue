<script setup lang="ts">
import { ref } from 'vue'
import { uid } from 'quasar'
import draggable from 'vuedraggable'

type Color = {
	id: string
	name: string
	filt: string
	val: string
}

const list = ref<Color[]>([])
const option1 = ['Просроченные задания', 'Я - автор', 'Высокая важность', 'Создать запрос  ?']
const option2 = [
	{ label: 'Тревожный', color: 'red' },
	{ label: 'Положительный', color: 'green' },
	{ label: 'Внимание', color: 'blue' },
	{ label: 'Яркий', color: 'orange' },
]
const del = (ind: number) => {
	list.value.splice(ind, 1)
}
const add = () => {
	let temp = {
		id: uid(),
		name: '',
		filt: '',
		col: '',
		condition: '',
		val: '',
		type: 1,
	}
	list.value.push(temp)
}
const add1 = () => {
	let temp = {
		id: uid(),
		name: '',
		filt: '',
		col: '',
		condition: '',
		val: '',
		type: 2,
	}
	list.value.push(temp)
}
const condOption = [
	'Равно',
	'Не равно',
	'Значение задано',
	'Значение не задано',
	'Позже, чем',
	'Раньше, чем',
	'Диапазон',
	'Содержит',
	'Не содержит',
	'Начинается с',
	'Оканчивается на',
]
const colOption = [
	'Фамилия',
	'Имя',
	'Отчество',
	'Дата рождения',
	'Должность',
	'Руководитель',
	'Местный телефон',
	'Домашний телефон',
	'Факс',
	'Номер паспорта',
	'Паспорт выдан',
	'Комната',
	'Сотовый телефон',
	'IP телефон',
	'Значимость',
	'Email',
	'Организация',
	'Является руководителем',
]
const color = ref('#fff')
</script>

<template lang="pug">
.main
	draggable(:list="list"
		item-key="id"
		class="list-group"
		ghost-class="ghost"
		)
		template(#item="{ element, index }")
			.list-group-item(v-if="element.type == 1")
				div {{index + 1}}
				q-select(dense outlined bg-color="white" v-model="element.filt" label="Запрос" :options="option1")
				q-select(dense outlined bg-color="white" v-model="element.val" label="Цвет" :options="option2")
					template(v-slot:option="scope")
						q-item(v-bind="scope.itemProps")
							q-item-section
								q-item-label {{ scope.opt.label }}
							q-item-section(side)
								.square(:class="scope.opt.color")
				q-btn(flat round icon="mdi-close" dense @click="del(index)" size="sm") 
			.list-group-item1(v-else )
				div {{index + 1}}
				q-select(dense outlined bg-color="white" v-model="element.col" label="Колонка" :options="colOption")
				q-select(dense outlined bg-color="white" v-model="element.condition" label="Условие" :options="condOption")
				q-input(dense outlined bg-color="white" v-model="element.val" label="Значение")
				.color
					q-popup-proxy(cover transition-show="scale" transition-hide="scale" )
						q-color(v-model="color")
				q-btn(flat round icon="mdi-close" dense @click="del(index)" size="sm") 

		template(#header)
			.q-mb-md.row.justify-between
				q-btn(unelevated color="primary" label="Добавить цвет (по запросу)" @click="add" size="sm") 
				q-btn(unelevated color="primary" label="Выделить строкy" @click="add1" size="sm") 
</template>

<style scoped lang="scss">
.main {
	width: 600px;
	margin: 0 auto;
}
.list-group-item {
	padding: 0.5rem 1rem;
	background: var(--bg-main);
	margin-bottom: 1px;
	display: grid;
	grid-template-columns: auto 1fr 1fr auto;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
}
.list-group-item1 {
	padding: 0.5rem 1rem;
	background: var(--bg-main);
	margin-bottom: 1px;
	display: grid;
	grid-template-columns: auto 1fr 1fr 1fr 20px auto;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
}
.q-select {
	width: 100%;
}
.color {
	width: 20px;
	height: 20px;
	background: v-bind('color');
	border: 1px solid #aaa;
}
.square {
	width: 20px;
	height: 20px;
	border: 1px solid black;
	&.red {
		background: darkred;
	}
	&.green {
		background: green;
	}
	&.blue {
		background: blue;
	}
	&.orange {
		background: orange;
	}
}
</style>
