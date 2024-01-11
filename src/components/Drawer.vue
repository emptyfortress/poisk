<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import poiskDialog from '@/components/poiskDialog.vue'

const modelValue = defineModel()
const mystore = useStore()

const pages = [
	{
		id: 0,
		title: 'Старт',
		icon: 'mdi-home-roof',
		url: '/',
	},
	{
		id: 1,
		title: 'Запросы',
		icon: 'mdi-puzzle-outline',
		url: '/search',
	},
	{
		id: 3,
		title: 'Мои поиски',
		icon: 'mdi-briefcase-search-outline',
		url: '/mysearch',
	},
	{
		id: 2,
		title: 'Представления',
		icon: 'mdi-briefcase-edit-outline',
		url: '/layout',
	},
	{
		id: 4,
		title: 'new Представления',
		icon: 'mdi-briefcase-edit-outline',
		url: '/layout1',
	},
	{
		id: 5,
		title: 'Supernew views',
		icon: 'mdi-briefcase-edit-outline',
		url: '/layout2',
	},
]
const tmp = {
	open: true,
	parent: null,
	children: [],
	level: 1,
	isStat: true,
	hidden: false,
	checked: false,
	draggable: true,
	droppable: false,
	style: '',
	class: '',
	data: {
		text: 'Задания на контроле',
		text1: 'Описание поиска',
		text2: '',
		text3: '',
		hidden: false,
		selected: true,
		type: 1,
		typ: false,
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
}
const dialog = ref(false)
const dialogToggle = () => {
	dialog.value = !dialog.value
	mystore.dialog = !mystore.dialog
	mystore.setCurrentNode(tmp)
}
</script>

<template lang="pug">
q-drawer(v-model="modelValue" bordered side="left" :width="256")
	q-list.q-mt-lg
		q-item(clickable v-ripple v-for="page in pages" :to="page.url")
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section
				q-item-label {{ page.title }}
		br
		q-separator
		q-item(clickable @click="dialogToggle")
			q-item-section(avatar)
				q-icon(name="mdi-briefcase-search-outline")
			q-item-section Задания на контроле

poiskDialog(v-model="dialog")

</template>

<style scoped lang="scss">
.q-item--active,
.q-item.q-router-link--active {
	background: $accent1;
	color: $blue-9;
}

:deep(.q-drawer) {
	background: var(--bg-panel);
}

:deep(.q-item__section--avatar) {
	min-width: initial;
}
</style>
