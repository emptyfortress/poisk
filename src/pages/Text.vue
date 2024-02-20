<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { zero } from '@/stores/options'
import { strConditions } from '@/stores/conditions'

const options = ref(zero)
const stringConditions = ref(strConditions)

const keys = ref<Option[]>([])
const cond = ref<null | String>(null)

const query = ref('')

const level1 = computed(() => {
	let active = keys.value[0].children
	if (!!query.value && cond.value == null) {
		return active?.filter((el) => el.text.toLowerCase().includes(query.value?.toLowerCase()))
	} else return active
})
const add1 = (e: Option) => {
	keys.value = []
	cond.value = null
	options.value.map((el) => (el.selected = false))
	stringConditions.value.map((el) => (el.selected = false))
	e.selected = true
	keys.value.push(e)
	level1.value?.map((el) => (el.selected = false))
}
const add2 = (e: Option) => {
	level1.value?.map((el) => (el.selected = false))
	e.selected = !e.selected
	if (e.selected == true) {
		keys.value[1] = e
	} else {
		let idx = keys.value.findIndex((item) => item.id == e.id)
		keys.value.splice(idx, 1)
	}
	query.value = ''
}
const addStrCondition = (el) => {
	stringConditions.value.map((item) => (item.selected = false))
	el.selected = !el.selected
	if (el.selected == true) {
		cond.value = el.text
	}
}
const remove = (el: Option) => {
	if (el.level == 0) {
		options.value.map((e: any) => (e.selected = false))
		level1.value?.map((e: any) => (e.selected = false))
		keys.value = []
	}
	if (el.level == 1) {
		level1.value?.map((e: any) => (e.selected = false))
		let idx = keys.value.findIndex((item) => item.id == el.id)
		keys.value.splice(idx, 1)
	}
}
const removeCond = () => {
	cond.value = null
	stringConditions.value.map((el) => (el.selected = false))
}
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag.q-mb-lg Простой поиск
		q-input(v-model="query" clearable dense @clear="query = ''")
			template(v-slot:prepend)
				q-chip(dense v-for="key in keys" :key="key.id" removable @remove="remove(key)") {{key.text}}
				q-chip(v-if="cond" dense  removable color="primary" text-color="white" @remove="removeCond") {{cond}}
			template(v-slot:append)
				q-icon(name="mdi-close" color="primary")

		.grid
			q-list()
				q-item(v-for="item in options" :key="item.id" clickable @click="add1(item)" :class="{selected: item.selected}")
					q-item-section
						q-item-label {{item.text}}
			transition(name="slide-right" mode="out-in")
				q-list(v-if="keys.length > 0" )
					q-item(v-for="item in level1" :key="item.id" clickable @click="add2(item)" :class="{selected: item.selected}")
						q-item-section
							q-item-label {{item.text}}
			transition(name="slide-right")
				q-list(v-if="keys.at(-1)?.kind == 0")
					q-item(v-for="item in stringConditions" :key="item.text" clickable @click="addStrCondition(item)" :class="{selected: item.selected}")
						q-item-section
							q-item-label {{item.text}}
</template>

<style scoped lang="scss">
.container {
	max-width: 1200px;
}
.grid {
	display: flex;
	gap: 2rem;
}
.selected {
	background: $blue-2;
}
.q-item {
	margin-bottom: 1px;
}
.q-chip {
	padding: 2px 8px;
	background: #ccc;
	// margin-bottom: 0;
	// margin-top: 0;
}
.q-input {
	font-size: 1.2rem;
}
</style>
