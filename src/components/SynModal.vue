<script setup lang="ts">
import { ref } from 'vue'
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
		label: 'Карточка',
		align: 'left',
		field: 'type',
		sortable: true,
	},
]
const selected = ref([{ id: 0, field: 'Тема', type: 'Задание' }])
const rows = [
	{ id: 0, field: 'Тема', type: 'Задание' },
	{ id: 1, field: 'Тема', type: 'Группа заданий' },
	{ id: 2, field: 'Содержание', type: 'Документ - Входящий' },
	{ id: 3, field: 'Содержание', type: 'Документ - Исходящий' },
]
const select = (_: Event, row: any, index: number) => {
	let sel = selected.value.filter((el: any) => el.id == row.id).length == 0 ? false : true
	if (sel) {
		const ind = selected.value.indexOf(row)
		selected.value.splice(ind, 1)
	} else selected.value.push(row)
}
const filter = ref('')
const common = ref('')
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Добавить поля
			q-space
			q-input(dense v-model="filter" debounce="300" color="primary" clearable)
				template(v-slot:prepend)
					q-icon(name="mdi-magnify")

		q-card-section
			q-table(flat
				:columns="cols"
				:rows="rows"
				color="primary"
				selection="multiple"
				:filter="filter"
				v-model:selected="selected"
				@rowClick="select"
				row-key="id" )
				template(v-slot:header-selection="scope")
					q-checkbox(dense v-model="scope.selected" color="primary" size="sm")

				template(v-slot:body-selection="scope")
					q-checkbox(dense v-model="scope.selected" color="primary" size="sm")

				template(v-slot:bottom)
					.bottom
						div
							span(v-if="selected.length") Выбрано: {{selected.length}}
						div Всего: {{rows.length}}

		.info Введите общую метку для выбранных полей, для показа в форме поиска.
		.row.justify-center.items-center.q-gutter-x-md
			label Общая метка:
			q-input.lab(v-model="common" dense filled)
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
.q-input {
	width: 200px;
}
.bottom {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.info {
	font-size: 0.9rem;
	margin: 0 2rem;
	margin-bottom: 1rem;
	// background: pink;
}
.lab {
	width: 320px;
}
</style>
