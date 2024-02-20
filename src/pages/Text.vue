<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { zero } from '@/stores/options'

const options = ref(zero)

// const filterFn = (val: string, update: Function) => {
// 	update(() => {
// 		if (val === '') {
// 			zero1.value = zero
// 		} else {
// 			const needle = val.toLowerCase()
// 			zero1.value = zero.filter((v) => v.text.toLowerCase().indexOf(needle) > -1)
// 		}
// 	})
// }
const keys = ref<Option[]>([])

const query = ref('')

const level1 = computed(() => {
	let active = keys.value[0].children
	if (!!query.value) {
		return active?.filter((el) => el.text.toLowerCase().includes(query.value?.toLowerCase()))
	} else return active
})
const add1 = (e: Option) => {
	keys.value = []
	options.value.map((el) => (el.selected = false))
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
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag.q-mb-lg Простой поиск
		q-input(v-model="query" clearable dense @clear="query = ''")
			template(v-slot:prepend)
				q-chip( dense v-for="key in keys" :key="key.id" removable @remove="remove(key)" ) {{key.text}}
			template(v-slot:append)
				q-icon(name="mdi-close" color="primary")

		.grid
			q-list
				q-item(v-for="item in options" :key="item.id" clickable @click="add1(item)" :class="{selected: item.selected}")
					q-item-section
						q-item-label {{item.text}}
			transition(name="slide-right" mode="out-in")
				q-list(v-if="keys.length > 0" )
					q-item(v-for="item in level1" :key="item.id" clickable @click="add2(item)" :class="{selected: item.selected}")
						q-item-section
							q-item-label {{item.text}}
			transition(name="slide-right")
				q-list(v-if="keys.length > 1")
					q-item
						q-item-section
							q-item-label fuck
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
