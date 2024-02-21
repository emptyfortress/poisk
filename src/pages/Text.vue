<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { zero } from '@/stores/options'
import { str, date, dWords } from '@/stores/conditions'
import SimpleCondition from '@/components/SimpleCondition.vue'

const options = ref(zero)
const stringConditions = ref(str)
const dateConditions = ref(date)
const dateWords = ref(dWords)

const keys = ref<Option[]>([])
const cond = ref<null | String>(null)
const dday = ref<null | String>(null)

const query = ref('')

const level1 = computed(() => {
	let active = keys.value[0].children
	if (!!query.value && cond.value == null) {
		return active?.filter((el) => el.text.toLowerCase().includes(query.value?.toLowerCase()))
	} else return active
})
const level2 = computed(() => {
	let active = keys.value.at(1)!.children
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
	stringConditions.value.map((el) => (el.selected = false))
	e.selected = !e.selected
	if (e.selected == true) {
		keys.value[1] = e
	} else {
		let idx = keys.value.findIndex((item) => item.id == e.id)
		keys.value.splice(idx, 1)
	}
	query.value = ''
}
const add3 = (e: Option) => {
	level2.value?.map((el) => (el.selected = false))
	stringConditions.value.map((el) => (el.selected = false))
	e.selected = !e.selected
	if (e.selected == true) {
		keys.value.push(e)
	} else {
		let idx = keys.value.findIndex((item) => item.id == e.id)
		keys.value.splice(idx, 1)
	}
	query.value = ''
}
const addStrCondition = (el: any) => {
	stringConditions.value.map((item) => (item.selected = false))
	el.selected = !el.selected
	if (el.selected == true) {
		cond.value = el.text
	}
}
const addDateCondition = (el: any) => {
	dateConditions.value.map((item) => (item.selected = false))
	el.selected = !el.selected
	if (el.selected == true) {
		cond.value = el.text
	}
}
const addDay = (el: any) => {
	dday.value = el.text
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
	dateConditions.value.map((el) => (el.selected = false))
}
const reset = () => {
	keys.value.splice(1)
	cond.value = null
	query.value = ''
	// options.value.msp((e: any) => (e.selected = false))
	level1.value?.map((e: any) => (e.selected = false))
	stringConditions.value.map((el) => (el.selected = false))
}

const list = ref<Object[]>([])
const addToList = () => {
	let item = {
		keys: [...keys.value],
		cond: cond.value,
		dday: dday.value,
		query: query.value,
	}
	list.value.push(item)
	reset()
}
const days = ref(0)
const datte = ref('2019/02/01')
const kill = (idx: number) => {
	list.value.splice(idx, 1)
}
</script>

<template lang="pug">
q-page(padding)
	.container
		.zagg.q-mb-lg.row.justify-between
			div Простой поиск
			q-btn(v-if="list.length" unelevated color="primary" label="Перейти в конструктор" @click="") 
		SimpleCondition(v-if="list.length > 0" :list="list" @remove="kill" )
		q-input(v-model="query" clearable dense @clear="query = ''")
			template(v-slot:prepend)
				q-chip(dense v-for="key in keys" :key="key.id" removable @remove="remove(key)") {{key.text}}
				q-chip(v-if="cond" dense  removable color="primary" text-color="white" @remove="removeCond") {{cond}}
				q-chip(v-if="dday" dense  removable color="primary" text-color="white" @remove="removeCond") {{dday}}
			template(v-slot:append)
				q-btn(v-if="cond && query.length" flat round dense color="primary" icon="mdi-magnify") 
					q-tooltip Найти
				q-btn( v-if="cond && query.length" flat round dense color="primary" icon="mdi-plus-circle" @click="addToList") 
					q-tooltip Добавить условие

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

			transition(name="slide-right" mode="out-in")
				q-list(v-if="keys.length > 1")
					q-item(v-for="item in level2" :key="item.id" clickable @click="add3(item)" :class="{selected: item.selected}")
						q-item-section
							q-item-label {{item.text}}

			transition(name="slide-right")
				q-list(v-if="keys.at(-1)?.kind == 0")
					q-item(v-for="item in stringConditions" :key="item.text" clickable @click="addStrCondition(item)" :class="{selected: item.selected}")
						q-item-section
							q-item-label {{item.text}}
			transition(name="slide-right")
				q-list(v-if="keys.at(-1)?.kind == 2")
					q-item(v-for="item in dateConditions"  :key="item.text" clickable @click="addDateCondition(item)" :class="{selected: item.selected}")
						q-item-section
							q-item-label {{item.text}}
			transition(name="slide-right")
				div
					q-date(v-if="keys.at(-1)?.kind == 2 && !!cond" v-model="datte" minimal)
					q-list(v-if="keys.at(-1)?.kind == 2 && !!cond")
						q-item(v-for="item in dateWords"  :key="item.text" clickable @click="addDay(item)" :class="{selected: item.selected}")
							q-item-section
								q-item-label {{item.text}}
							q-item-section(side v-if="item.plus" @click.stop="")
								q-input.sma(dense v-model="days" type="number" )
									template(v-slot:append )
										label {{item.day}}
</template>

<style scoped lang="scss">
.container {
	max-width: 1200px;
}
.grid {
	display: flex;
	gap: 2rem;
	justify-content: start;
	align-items: start;
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
.sma {
	font-size: 1rem;
	width: 80px;
	display: inline-block;
	label {
		font-size: 0.8rem;
	}
}
.zagg {
	font-size: 1.4rem;
}
</style>
