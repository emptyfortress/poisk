<script setup lang="ts">
import { ref, computed } from 'vue'
import draggable from 'vuedraggable'
import { datasource } from '@/stores/select'

const pred = ref('Я - автор')
const modelValue = defineModel()
const options = ['Я - автор', 'Я - читатель', 'Представление 1']

const list1 = ref(datasource)

const list = ref([
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
])
</script>

<template lang="pug">
q-dialog(v-model="modelValue" persistent)
	q-card(style="width: 700px; max-width: 80vw; cursor: default;")
			q-card-section.q-pa-sm(horizontal)
				.col
					.text-h6.q-ml-lg Настройка таблицы
				.col-auto
					q-btn(icon="mdi-close" flat round dense v-close-popup)
			q-separator
			q-card-section
				q-select(v-model="pred" :options="options" label="Название" dense)
				.grid
					div Колонки:
					.avail
						q-scroll-area(style="height: 300px;")
							draggable(:list="list"
								item-key="id"
								class="list-group"
								ghost-class="ghost"
								group="data")
								template(#item="{ element }")
									.list-group-item
										.dragg
										label {{ element.label }}

</template>

<style scoped lang="scss">
.avail {
	height: 400px;
	width: 100%;
}
.q-select {
	width: 260px;
}
.grid {
	margin-top: 2rem;
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: stretch;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
}
</style>
