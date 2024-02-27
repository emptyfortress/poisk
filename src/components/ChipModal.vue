<script setup lang="ts">
import { ref, reactive, watch, watchEffect, computed } from 'vue'
import { useChips } from '@/stores/chips'
const modelValue = defineModel()

const mychips = useChips()
// const chips = reactive([
// 	{
// 		id: 0,
// 		label: 'Все',
// 		ticked: true,
// 	},
// 	{
// 		id: 1,
// 		label: 'Документ',
// 		ticked: false,
// 		children: [
// 			{ id: 2, ticked: false, label: 'Входящий' },
// 			{ id: 3, ticked: false, label: 'Исходящий' },
// 			{ id: 4, ticked: false, label: 'Договор' },
// 		],
// 	},
// 	{
// 		id: 6,
// 		label: 'Задание',
// 		ticked: false,
// 		children: [
// 			{ id: 7, ticked: false, label: 'На исполнение' },
// 			{ id: 8, ticked: false, label: 'На ознакомление' },
// 			{ id: 9, ticked: false, label: 'На согласование' },
// 		],
// 	},
// 	{
// 		id: 10,
// 		label: 'ГЗ',
// 		ticked: false,
// 	},
// 	{
// 		id: 11,
// 		label: 'Цель',
// 		ticked: false,
// 	},
// 	{
// 		id: 12,
// 		label: 'Командировка',
// 		ticked: false,
// 	},
// ])
const doc = computed(() => {
	return mychips.chips.filter((el) => el.id == 1)
})
const task = computed(() => {
	return mychips.chips.filter((el) => el.id == 6)
})
const selected = ref('Документ')
const selected1 = ref('Задание')

const add = (e: any) => {
	if (e.id == 0 && e.ticked == true) {
		mychips.chips[1].ticked = false
		mychips.chips[2].ticked = false
		mychips.chips[1].children?.map((el) => (el.ticked = false))
		mychips.chips[2].children?.map((el) => (el.ticked = false))
		mychips.chips[3].ticked = false
		mychips.chips[4].ticked = false
		mychips.chips[5].ticked = false
	}
	if (e.id > 0 && e.ticked == true) {
		mychips.chips[0].ticked = false
	}
	if (e.id == 1 && e.ticked == true) {
		mychips.chips[1].children?.map((el) => (el.ticked = true))
	}
	if (e.id == 1 && e.ticked == false) {
		mychips.chips[1].children?.map((el) => (el.ticked = false))
	}
	if (e.id == 6 && e.ticked == true) {
		mychips.chips[2].children?.map((el) => (el.ticked = true))
	}
	if (e.id == 6 && e.ticked == false) {
		mychips.chips[2].children?.map((el) => (el.ticked = false))
	}
	if (
		e.id > 1 &&
		e.id < 6 &&
		mychips.chips[1].children?.filter((el) => el.ticked).length == 2 &&
		e.ticked == false
	) {
		mychips.chips[1].ticked = false
	}
	if (
		e.id > 6 &&
		e.id < 10 &&
		mychips.chips[2].children?.filter((el) => el.ticked).length == 2 &&
		e.ticked == false
	) {
		mychips.chips[2].ticked = false
	}
	if (mychips.chips[1].children?.filter((el) => el.ticked).length == 3) {
		mychips.chips[1].ticked = true
	}
	if (mychips.chips[2].children?.filter((el) => el.ticked).length == 3) {
		mychips.chips[2].ticked = true
	}
}
const emit = defineEmits(['tree'])
const setTree = () => {
	emit('tree')
	modelValue.value = false
}
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Выберите вид карточек для поиска
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-card-section
			.grid
				q-chip(v-model:selected="mychips.chips[0].ticked" @click="add(mychips.chips[0])" ) Все
				q-tree(:nodes="doc" default-expand-all
					node-key="id"
					v-model:selected="selected"
					)
					template(v-slot:default-header="prop")
						q-chip(v-model:selected="prop.node.ticked" @click="add(prop.node)") {{prop.node.label}}
				q-tree(:nodes="task" node-key="label" default-expand-all
					v-model:selected="selected1")
					template(v-slot:default-header="prop")
						q-chip(v-model:selected="prop.node.ticked" @click="add(prop.node)") {{prop.node.label}}
				div
					div
						q-chip(v-model:selected="mychips.chips[3].ticked" @click="add(mychips.chips[3])") Группа заданий
					div
						q-chip(v-model:selected="mychips.chips[4].ticked" @click="add(mychips.chips[4])") Цель
					div
						q-chip(v-model:selected="mychips.chips[5].ticked" @click="add(mychips.chips[5])") Командировка
		q-card-actions.q-ma-md(align="right")
			q-btn(flat color="primary" label="Отмена" v-close-popup)
			q-btn(unelevated color="primary" label="Применить" @click="setTree") 
</template>

<style scoped lang="scss">
.q-card {
	width: 800px;
	min-width: 800px;
}
.grid {
	display: grid;
	grid-template-columns: 0.5fr 1fr 1fr 1fr;
	justify-items: start;
	align-items: start;
	column-gap: 1rem;
	row-gap: 0.5rem;
}
.q-tree {
	font-size: 0.9rem;
}
</style>
