<script setup lang="ts">
import { ref, computed } from 'vue'
import type { QTableColumn } from 'quasar'
import { useStore } from '@/stores/store'

const modelValue = defineModel()

const props = defineProps({
	loading: {
		type: Boolean,
		default: false,
	},
})

const store = useStore()
const options = [
	'Представление 1',
	'Представление 2',
	'Представление 3',
	'Представление 4',
	'Представление 5',
]
const cols: QTableColumn[] = [
	{
		name: 'vid',
		required: true,
		label: 'Вид карточки',
		align: 'left',
		field: 'vid',
		format: (val: any) => `${val}`,
		sortable: true,
	},
	{
		name: 'tema',
		required: true,
		label: 'Тема',
		align: 'left',
		field: 'tema',
		format: (val: any) => `${val}`,
		sortable: true,
	},
	{
		name: 'author',
		required: true,
		label: 'Автор',
		align: 'left',
		field: 'author',
		format: (val: any) => `${val}`,
		sortable: true,
	},
	{
		name: 'created',
		required: true,
		label: 'Создано',
		align: 'left',
		field: 'created',
		format: (val: any) => `${val}`,
		sortable: true,
	},
]
const rows = [
	{
		id: 0,
		vid: 'Документ',
		tema: 'Тема карточки в виде дайджеста',
		author: 'Орлов П.А.',
		created: '20.06.23',
	},
	{
		id: 1,
		vid: 'Документ',
		tema: 'Тема карточки в виде дайджеста',
		author: 'Орлов П.А.',
		created: '20.06.23',
	},
	{
		id: 2,
		vid: 'Документ',
		tema: 'Тема карточки в виде дайджеста',
		author: 'Орлов П.А.',
		created: '20.06.23',
	},
	{
		id: 3,
		vid: 'Документ',
		tema: 'Тема карточки в виде дайджеста',
		author: 'Орлов П.А.',
		created: '20.06.23',
	},
	{
		id: 4,
		vid: 'Документ',
		tema: 'Тема карточки в виде дайджеста',
		author: 'Орлов П.А.',
		created: '20.06.23',
	},
	{
		id: 5,
		vid: 'Документ',
		tema: 'Тема карточки в виде дайджеста',
		author: 'Орлов П.А.',
		created: '20.06.23',
	},
	{
		id: 6,
		vid: 'Документ',
		tema: 'Тема карточки в виде дайджеста',
		author: 'Орлов П.А.',
		created: '20.06.23',
	},
	{
		id: 7,
		vid: 'Документ',
		tema: 'Тема карточки в виде дайджеста',
		author: 'Орлов П.А.',
		created: '20.06.23',
	},
	{
		id: 8,
		vid: 'Документ',
		tema: 'Тема карточки в виде дайджеста',
		author: 'Орлов П.А.',
		created: '20.06.23',
	},
]
const calcRows = computed(() => {
	if (!props.loading) {
		return rows
	} else {
		return undefined
	}
})
const pred = ref('Дайджест')
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card(style="width: 900px; max-width: 80vw;")
		q-card-section.row.items-center.q-pb-none
			.text-h6 {{ store.currentNode?.data.text }}
			span.q-ml-lg(v-if="!loading") (9)
			q-space
			q-select.q-mr-xl(v-model="pred" filled dense :options="options")
			q-btn(icon="mdi-close" flat round dense @click="modelValue = false")

		q-card-section
			q-table(flat :columns="cols" :rows="calcRows" row-key="id" :loading="props.loading" color="primary")
</template>

<style scoped lang="scss"></style>
