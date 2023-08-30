<script setup lang="ts">
import { ref, computed } from 'vue'
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
const pred = ref('Дайджест')
const options = [
	'Представление 1',
	'Представление 2',
	'Представление 3',
	'Представление 4',
	'Представление 5',
]
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
const calcRows = computed(() => {
	if (!loading.value) {
		return rows
	} else {
		return undefined
	}
})
</script>

<template lang="pug">
.layout
	div
		.row.items-center.justify-between
			q-btn(flat round dense @click="switchSidebar" )
				q-icon(name="mdi-forwardburger" v-if="props.splitter === 0")
				q-icon(name="mdi-backburger" v-else)
			template(v-if="store.currentNode?.data.type == 1" )
				.zg {{ store.currentNode.data.text }}
					q-popup-edit( v-model="store.currentNode.data.text" auto-save v-slot="scope")
						q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
			div(v-else) Выберите запрос
			.btngroup
				q-btn(outline size="10px" color="primary" :disable="!store.currentNode" @click="double") Дублировать
		template(v-if="store.currentNode?.data.type == 1" )
			.descr {{ store.currentNode.data.text1 }}
				q-popup-edit( v-model="store.currentNode.data.text1" auto-save v-slot="scope")
					q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
		QueryItem(v-if="store.currentNode?.data.type == 1" )

	.q-mt-lg
		.row.justify-between(v-if="store.currentNode?.data.type == 1" )
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
				span.q-ml-lg(v-if="!loading") (9)
			q-space
			q-select.q-mr-xl(v-model="pred" filled dense :options="options")
			q-btn(icon="mdi-close" flat round dense @click="preview = false")

		q-card-section
			q-table(flat :columns="cols" :rows="calcRows" row-key="id" :loading="loading" color="primary")
</template>

<style scoped lang="scss">
.layout {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.zg {
	font-size: 1rem;
	text-transform: uppercase;
	font-weight: 600;
	padding: 0.5rem;
	padding-bottom: 0;
	border-bottom: 1px dotted var(--q-primary);
}

.descr {
	margin: .5rem 1rem;
	padding: 0.5rem;
	padding-bottom: 0;
	border-bottom: 1px dotted var(--q-primary);
}

.q-select {
	width: 175px;
}

:deep(.q-table th) {
	background: #dedede;
	// border-top-width: 1px;
}

:deep(.q-table tr) {
	height: 32px;
}
</style>
