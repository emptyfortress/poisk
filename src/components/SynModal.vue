<script setup lang="ts">
import { ref, computed } from 'vue'
import type { QTableColumn } from 'quasar'
const modelValue = defineModel()
const cols: QTableColumn[] = [
	{
		name: 'field',
		required: true,
		label: 'Поле',
		align: 'left',
		field: 'field',
		sortable: true,
	},
	{
		name: 'type',
		required: true,
		label: 'Тип карточки',
		align: 'left',
		field: 'type',
		sortable: true,
	},
]
const selected = ref([{ id: 0, field: 'Тема', type: 'Задание' }])
const getSelectedString = ref('fuck')
const rows = [
	{ id: 0, field: 'Тема', type: 'Задание' },
	{ id: 1, field: 'Тема', type: 'Группа заданий' },
	{ id: 2, field: 'Содержание', type: 'Документ - Входящий' },
	{ id: 3, field: 'Содержание', type: 'Документ - Исходящий' },
]
const select = (_: Event, row: any, index: number) => {
	selected.value.push(row)
}
const getString = () => {
	return selected.value.length === 0
		? ''
		: `Выбрано ${selected.value.length} поле${selected.value.length > 1 ? 'й' : ''} из ${
				rows.length
		  } доступных`
}
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Добавить поля
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section
			q-table(flat
				:columns="cols"
				:rows="rows"
				color="primary"
				selection="multiple"
				v-model:selected="selected"
				@rowClick="select"
				:selected-rows-label="getString"
				hide-pagination
				row-key="id" )
				template(v-slot:header-selection="scope")
					q-checkbox(dense v-model="scope.selected" color="primary")

				template(v-slot:body-selection="scope")
					q-checkbox(dense v-model="scope.selected" color="primary")

		q-card-section
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" v-close-popup) 
				q-btn(unelevated color="primary" label="Добавить" v-close-popup) 

</template>

<style scoped lang="scss">
.q-card {
	min-width: 600px;
}
:deep(.q-checkbox) {
	width: 24px;
}
</style>
