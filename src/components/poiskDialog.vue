<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import EditSearch from '@/components/EditSearch.vue'
import formItem from '@/components/formItem.vue'
import BaseTree from '@/components/BaseTree.vue'
// import { mySearches } from '@/stores/tree'

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
				fields: []
			},
			{
				text: 'Мои командировки',
				text1: 'Описание поиска',
				hidden: false,
				selected: false,
				type: 1,
				fields: [
					{ id: 1, check: true, sort: true, filter: true, type: 2, label: 'Тип', options: ['Документ', 'Задание', 'Группа заданий', 'Любой'], val: 'Документ', notset: false },
				]
			},
		]
	}

]
const adding = {
	text: 'Задания на контроле',
	text1: 'Описание поиска',
	hidden: false,
	selected: false,
	type: 1,
	fields: [
		{ id: 1, check: true, sort: true, filter: true, type: 2, label: 'Тип', options: ['Документ', 'Задание', 'Группа заданий', 'Любой'], val: 'Документ', notset: false },
		{
			id: 2, check: true, sort: true, filter: true, type: 2, label: 'Вид карточки', val: 'Любой', options: [
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
			], notset: false,
		},
	]
}
const dialog = defineModel<boolean>()
const edit = ref(false)

const mystore = useStore()

const goToEdit = (() => {
	edit.value = true
	save.value = true
})
const sidebar = ref(false)
const switchSidebar = (() => {
	sidebar.value = !sidebar.value
})
const close = (() => {
	mystore.dialog = false
})
const save = ref(false)
</script>

<template lang="pug">
q-dialog(v-model="dialog")
	q-card.dialog
		q-card-section.row.items-center.q-pb-none
			q-btn(flat round dense @click="switchSidebar" )
				q-icon(name="mdi-backburger" v-if="sidebar")
				q-icon(name="mdi-forwardburger" v-else)
			.text-h6.q-ml-lg
				span(v-if="mystore.currentNode") {{ mystore.currentNode.data.text }}
				span(v-else) Задания на контроле
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup @click="close")

		q-separator
		.topgrid(:class="{ side: sidebar }")
			q-scroll-area.list(v-show="sidebar")
				BaseTree(:treeData="mySearches" load)
			q-form.grid
				template(v-for="el in mystore.currentNode?.data.fields" :key="el.id")
					formItem(:item="el" wind)

		q-card-actions.q-pa-md(align="between")
			q-btn(flat color="primary" label="Отмена" v-close-popup @click="close") 
			.q-gutter-md
				q-btn(flat color="primary" icon="mdi-cog" label="Настроить" @click="goToEdit") 
				q-btn(v-if="save" flat color="primary" icon="mdi-magnify" label="Искать") 
				q-btn(v-else unelevated color="primary" icon="mdi-magnify" label="Искать") 
				q-btn(unelevated color="primary" label="Сохранить" v-close-popup @click="close" v-if="save") 

EditSearch(v-model="edit" )
</template>

<style scoped lang="scss">
.dialog {
	width: 780px;
	max-width: 90vw;
}

.topgrid {
	width: 100%;
	display: grid;
	grid-template-columns: 1fr;
	grid-template-rows: minmax(250px, 1fr);
	align-items: start;
	column-gap: 1rem;
	padding: 1rem;

	&.side {
		grid-template-columns: auto 1fr;
	}
}

.list {
	height: 100%;
	font-size: .9rem;
	background: var(--bg-panel);
	border-right: 1px solid #ccc;
	width: 200px;
}

.grid {
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	column-gap: 1rem;
	row-gap: .5rem;
}

.q-field {
	font-size: 1rem;
}
</style>
