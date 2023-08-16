<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import QueryItem from '@/components/QueryItem.vue'
import type { QTableColumn } from 'quasar'

const props = defineProps({
	splitter: Number,
})

const emit = defineEmits(['maximize', 'reset'])

const store = useStore()

const switchSidebar = () => {
	if (props.splitter !== 0) {
		emit('maximize')
	} else emit('reset')
}
const remove = (() => {
	store.toggleDel()
})
const double = (() => {
	store.toggleDub()
})
const preview = ref(false)
const cols: QTableColumn[] = [
	{
		name: 'vid',
		required: true,
		label: 'Вид карточки',
		align: 'left',
		field: 'vid',
		format: (val: any) => `${val}`,
		sortable: true
	},
	{
		name: 'tema',
		required: true,
		label: 'Тема',
		align: 'left',
		field: 'tema',
		format: (val: any) => `${val}`,
		sortable: true
	},
	{
		name: 'author',
		required: true,
		label: 'Автор',
		align: 'left',
		field: 'author',
		format: (val: any) => `${val}`,
		sortable: true
	},
	{
		name: 'created',
		required: true,
		label: 'Создано',
		align: 'left',
		field: 'created',
		format: (val: any) => `${val}`,
		sortable: true
	},
]
const rows = [
	{ id: 0, vid: 'Документ', tema: 'Тема карточки в виде дайджеста', author: 'Орлов П.А.', created: '20.06.23' },
	{ id: 1, vid: 'Документ', tema: 'Тема карточки в виде дайджеста', author: 'Орлов П.А.', created: '20.06.23' },
	{ id: 2, vid: 'Документ', tema: 'Тема карточки в виде дайджеста', author: 'Орлов П.А.', created: '20.06.23' },
	{ id: 3, vid: 'Документ', tema: 'Тема карточки в виде дайджеста', author: 'Орлов П.А.', created: '20.06.23' },
	{ id: 4, vid: 'Документ', tema: 'Тема карточки в виде дайджеста', author: 'Орлов П.А.', created: '20.06.23' },
	{ id: 5, vid: 'Документ', tema: 'Тема карточки в виде дайджеста', author: 'Орлов П.А.', created: '20.06.23' },
	{ id: 6, vid: 'Документ', tema: 'Тема карточки в виде дайджеста', author: 'Орлов П.А.', created: '20.06.23' },
	{ id: 7, vid: 'Документ', tema: 'Тема карточки в виде дайджеста', author: 'Орлов П.А.', created: '20.06.23' },
	{ id: 8, vid: 'Документ', tema: 'Тема карточки в виде дайджеста', author: 'Орлов П.А.', created: '20.06.23' },
]
const loading = ref(false)
const showPreview = (() => {
	loading.value = true
	preview.value = true
	setTimeout(() => {
		loading.value = false
	}, 3000)
})
</script>

<template lang="pug">
.layout
	div
		.row.items-center.justify-between
			q-btn(flat round dense @click="switchSidebar" )
				q-icon(name="mdi-forwardburger" v-if="props.splitter === 0")
				q-icon(name="mdi-backburger" v-else)
			.zg(v-if="store.currentNode")
				q-icon(name="mdi-briefcase-search-outline" size="sm")
				span.q-ml-md {{ store.currentNode.data.text }}
			div(v-else) Выберите запрос
			.btngroup
				q-btn(outline size="10px" color="primary" :disable="!store.currentNode" @click="double") Дублировать
		QueryItem(v-if="store.currentNode" )

	div
		.row.justify-between(v-if="store.currentNode")
			q-btn(flat color="primary" label="Удалить поиск" icon="mdi-trash-can-outline") 
				q-menu(anchor="bottom right" self="top right")
					q-list
						q-item.pink(clickable @click="remove" v-close-popup )
							q-item-section Удалить
			div
				q-btn(flat color="primary" label="Применить" icon="mdi-check-bold" @click="showPreview") 
				q-btn(unelevated color="primary" label="Сохранить" icon="mdi-content-save") 

q-dialog(v-model="preview")
	q-card(style="width: 900px; max-width: 80vw;")
		q-card-section.row.items-center.q-pb-none
			.text-h6 {{ store.currentNode?.data.text }}
				span.q-ml-lg (найдено 9)
			q-space
			q-btn(icon="mdi-close" flat round dense @click="preview = false")

		q-card-section
			q-table(flat :columns="cols" :rows="rows" row-key="id" :loading="loading" color="primary")
</template>

<style scoped lang="scss">
.layout {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.zg {
	font-size: 1.2rem;
}
</style>
