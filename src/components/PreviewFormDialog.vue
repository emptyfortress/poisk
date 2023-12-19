<script setup lang="ts">
import { ref, computed } from 'vue'
import type { QTableColumn } from 'quasar'
import { useStore } from '@/stores/store'
import { values } from '@/stores/select'

const modelValue = defineModel()
const props = defineProps<{
	tree: any[] | undefined
}>()

const emit = defineEmits(['close', 'find'])
const store = useStore()
const item1 = ref('20.12.2023 - 25.12.2023')
const item2 = ref('3 квартал')
const item3 = ref('2 квартал')
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
const active1 = ref(true)
const active2 = ref(true)
const active3 = ref(true)
const active4 = ref(true)
const active5 = ref(true)
const active6 = ref(true)
const active7 = ref(true)
const active8 = ref(true)
</script>

<template lang="pug">
q-dialog(v-model="modelValue" persistent)
	q-card(style="width: 700px; max-width: 80vw; cursor: default;")
		q-form
			q-card-section.row.items-center.q-pb-none
				.text-h6 Просроченные задания по отделу
				// .text-h6 {{ store.currentNode?.data.text }}
				q-space
				q-btn( icon="mdi-close" flat round dense @click="emit('close')")
			q-card-section.bread Задание > На исполнение
			q-card-section
				.grid
					div(:class="{dis : !active1}") Дата завершения:
					q-select(v-model="item1" :options="values" label="Диапазон" dense filled :disable="!active1")
						template(v-slot:prepend)
							q-icon(name="mdi-calendar")
					q-toggle(v-model="active1" dense)
					div(:class="{dis : !active2}") Тема
					q-input(v-model="item2" dense filled label='Содержит' :disable="!active2")
					q-toggle(v-model="active2" dense)
					div(:class="{dis : !active3}") Тема
					q-input(v-model="item3" dense filled label="Не содержит" :disable="!active3")
					q-toggle(v-model="active3" dense)

				.grid3
					div(:class="{dis : !active4}") Тема
					q-select(v-model="one" dense filled :options="options" :disable="!active4")
					q-input(v-model="two" dense filled :disable="!active4")
					q-toggle(v-model="active4" dense)
					div(:class="{dis : !active5}") Тема
					q-select(v-model="three" dense filled :options="options" :disable="!active5")
					q-input(v-model="four" dense filled :disable="!active5")
					q-toggle(v-model="active5" dense)

				.trr И выполняется одно из следующих условий:
				.grid.or
					div(:class="{dis : !active6}") Автор:
					q-input(v-model="or1" dense filled bg-color="white" label="Равно" :disable="!active6")
					q-toggle(v-model="active6" dense)
					// div Автор:
					// q-input(v-model="or2" dense filled bg-color="white" label="Равно")
					div(:class="{dis : !active7}") Состояние:
					q-input(v-model="or3" dense filled bg-color="white" label="Равно" :disable="!active7")
					q-toggle(v-model="active7" dense)
					div(:class="{dis : !active8}") Завершено позже срока
					.row
						q-radio(v-model="rukovoditel" val="yes" label="Да" :disable="!active8")
						q-radio(v-model="rukovoditel" val="no" label="Нет" :disable="!active8")
					q-toggle(v-model="active8" dense)
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
	grid-template-columns: 1fr 2fr 36px;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.grid3 {
	margin-top: 0.5rem;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 36px;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-input,
.q-select {
	width: 100%;
}
.dis {
	opacity: 0.4;
}
</style>
