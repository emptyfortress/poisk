<script setup lang="ts">
import { ref, reactive, watch, watchEffect } from 'vue'
const modelValue = defineModel()

const doc = reactive([
	{
		id: 1,
		selected: false,
		label: 'Документ',
		ticked: false,
		children: [
			{ id: 6, ticked: false, label: 'Входящий' },
			{ id: 7, ticked: false, label: 'Исходящий' },
			{ id: 7, ticked: false, label: 'Договор' },
			{ id: 7, ticked: false, label: 'Доп.соглашение' },
		],
	},
])
const task = reactive([
	{
		id: 1,
		selected: false,
		label: 'Задание',
		ticked: false,
		children: [
			{ id: 8, ticked: false, label: 'На исполнение' },
			{ id: 9, ticked: false, label: 'На ознакомление' },
			{ id: 10, ticked: false, label: 'На согласовние' },
		],
	},
])
const selected = ref('Документ')
const selected1 = ref('Задание')
const all = ref(true)
const chips = reactive({
	group: false,
	goal: false,
	trip: false,
})
const test = (el: any) => el == true

watch(chips, (val) => {
	if (val) {
		all.value = false
	}
})
watch(doc, (val) => {
	if (val) {
		all.value = false
	}
})
watch(task, (val) => {
	if (val) {
		all.value = false
	}
})
watchEffect(() => {
	if (all.value == true) {
		chips.group = false
		chips.goal = false
		chips.trip = false
		doc[0].ticked = false
		task[0].ticked = false
	}
	if (doc[0].ticked) {
		doc[0].children.map((el) => (el.ticked = true))
	}
	if (doc[0].ticked == false) {
		doc[0].children.map((el) => (el.ticked = false))
	}
	if (task[0].ticked) {
		task[0].children.map((el) => (el.ticked = true))
	}
	if (task[0].ticked == false) {
		task[0].children.map((el) => (el.ticked = false))
	}
})
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
				q-chip(v-model:selected="all") Все
				q-tree(:nodes="doc" default-expand-all
					node-key="label"
					v-model:selected="selected"
					)
					template(v-slot:default-header="prop")
						q-chip(v-model:selected="prop.node.ticked") {{prop.node.label}}
				q-tree(:nodes="task" node-key="label" default-expand-all
					v-model:selected="selected1")
					template(v-slot:default-header="prop")
						q-chip(v-model:selected="prop.node.ticked") {{prop.node.label}}
				div
					div
						q-chip(v-model:selected="chips.group") Группа заданий
					div
						q-chip(v-model:selected="chips.goal") Цель
					div
						q-chip(v-model:selected="chips.trip") Командировка
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
