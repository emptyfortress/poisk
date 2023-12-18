<script setup lang="ts">
import { ref, computed } from 'vue'
import type { QTableColumn } from 'quasar'
import { useStore } from '@/stores/store'
import { values } from '@/stores/select'

const modelValue = defineModel()
// const props = defineProps<{
// 	tree: any[] | undefined
// }>()

const emit = defineEmits(['close', 'find'])
const store = useStore()
const item = ref('20.12.2023 - 25.12.2023')
const item1 = ref('3 квартал')
const item2 = ref('2 квартал')
const condit = 'Равно'
const or1 = ref('Склад')
const or2 = ref('Петров')
const or3 = ref('Просрочено')
const options = ['Равно', 'Не равно', 'Содержит', 'Не содержит']
const one = ref('Содержит')
const two = ref('3 квартал')
const three = ref('Не содержит')
const four = ref('2 квартал')
const rukovoditel = ref('yes')
const action = () => {
	emit('close')
	emit('find')
}
</script>

<template lang="pug">
q-dialog(v-model="modelValue" persistent)
	q-card(style="width: 700px;")
		q-form
			q-card-section.row.items-center.q-pb-none
				.text-h6 Просроченные задания по отделу
				// .text-h6 {{ store.currentNode?.data.text }}
				q-space
				q-btn( icon="mdi-close" flat round dense @click="emit('close')")
			q-card-section.bread Задание > На исполнение
			q-card-section
				.grid
					div Дата завершения:
					q-select(v-model="item" :options="values" label="Диапазон" dense filled emit-value)
						template(v-slot:prepend)
							q-icon(name="mdi-calendar")
					div Тема
					q-input(v-model="item1" dense filled label='Содержит')
					div Тема
					q-input(v-model="item2" dense filled label="Не содержит")

				.grid3
					div Тема
					q-select(v-model="one" dense filled :options="options")
					q-input(v-model="two" dense filled)
					div Тема
					q-select(v-model="three" dense filled :options="options")
					q-input(v-model="four" dense filled)

				.trr И выполняется одно из следующих условий:
				.grid.or
					div Автор:
					q-input(v-model="or1" dense filled bg-color="white" label="Равно")
					// div Автор:
					// q-input(v-model="or2" dense filled bg-color="white" label="Равно")
					div Состояние:
					q-input(v-model="or3" dense filled bg-color="white" label="Равно")
					div Завершено позже срока
					.row
						q-radio(v-model="rukovoditel" val="yes" label="Да")
						q-radio(v-model="rukovoditel" val="no" label="Нет")
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" @click="emit('close')") 
				q-btn(unelevated color="primary" label="Искать" @click="action") 

</template>

<style scoped lang="scss">
fieldset {
	margin-top: 1rem;
	margin-bottom: 1rem;
	background: #eee;
	border: none;
	legend {
		background: white;
		padding: 0 8px;
	}
}
.trr {
	margin-top: 1rem;
	font-size: 0.8rem;
}
.or {
	margin-bottom: 1rem;
	background: #eee;
	padding: 1rem;
	border: 1px solid #ccc;
	border-radius: 4px;
}
.grid {
	display: grid;
	grid-template-columns: 1fr 2fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.grid3 {
	margin-top: 0.5rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-input,
.q-select {
	width: 100%;
}
</style>
