<script setup lang="ts">
import { ref, reactive, watch, watchEffect, computed } from 'vue'
import { useChips } from '@/stores/chips'

const props = defineProps({
	create: {
		type: Boolean,
		default: false,
	},
})
const modelValue = defineModel()

const mychips = useChips()
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
const setTree = () => {
	mychips.toggleUpdateTree()
	modelValue.value = false
	setTimeout(() => {
		mychips.toggleUpdateTree()
		mychips.setNewItem('')
	}, 200)
}
const searchName = ref('')
const createSearch = () => {
	mychips.setNewItem(searchName.value)
	mychips.count = mychips.count + 1
	setTree()
}
</script>

<template lang="pug">
q-dialog(v-model="modelValue" )
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
		q-card-section(v-if="props.create")
			.inp
				label Название поиска:
				q-input(dense filled v-model="searchName" clearable autofocus)

		q-card-actions.q-ma-md(align="right")
			q-btn(flat color="primary" label="Отмена" v-close-popup)
			q-btn(v-if="props.create" unelevated color="primary" label="Создать" @click="createSearch" :disable="searchName.length < 2") 
			q-btn(v-else unelevated color="primary" label="Применить" @click="setTree") 
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
.inp {
	width: 80%;
	margin: 0 auto;
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: center;
	column-gap: 1rem;
	row-gap: 0.5rem;
	.q-input {
		width: 100%;
	}
}
</style>
