<script setup lang="ts">
import { ref, computed } from 'vue'
import { options as stringOptions } from '@/stores/options'
import { getMembers } from '@/utils/utils'

const options = ref(stringOptions)
const flatList = computed(() => {
	return getMembers(options.value)
})

// const keys = computed(() => {
// 	return flatList.value.filter((e) => e.selected)
// })
const keys = computed({
	get() {
		return flatList.value.filter((e) => e.selected)
	},
	set(newValue) {},
})

const filterFn = (val: string, update: Function) => {
	update(() => {
		if (val === '') {
			options.value = stringOptions
		} else {
			const needle = val.toLowerCase()
			options.value = stringOptions.filter((v) => v.text.toLowerCase().indexOf(needle) > -1)
		}
	})
}
const add = (e: any) => {
	e.selected = !e.selected
}
const reset = () => {
	options.value.map((e) => (e.selected = false))
}
const remove = (e: any) => {
	console.log(e.opt.id)
	let idx = flatList.value.findIndex((item) => item.id == e.opt.id)
	console.log(idx)
}
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag.q-mb-lg Простой поиск
		q-select(dense
			v-model="keys"
			use-input
			use-chips
			multiple
			clearable
			@clear="reset"
			outlined
			menu-shrink
			emit-value
			hide-dropdown-icon
			input-debounce="0"
			:options="options"
			@filter="filterFn"
			bg-color="white").keys

			template(v-slot:option="scope")
			template(v-slot:no-option)
			template(v-slot:selected-item="scope")
				q-chip(v-model="scope.selected" dense removable @remove="remove(scope)") {{scope.opt.text}}
		.grid
			q-list
				q-item(v-for="item in options" :key="item.id" clickable @click="add(item)" :class="{selected: item.selected}")
					q-item-section
						q-item-label {{item.text}}
			transition(name="slide-right")
				q-list(v-if="keys.length > 0")
					q-item(v-for="item in options[0].children" :key="item.id" clickable @click="add(item)" :class="{selected: item.selected}")
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
	margin-bottom: 0;
	margin-top: 0;
}
</style>
