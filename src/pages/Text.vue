<script setup lang="ts">
import { ref, computed } from 'vue'
import { options as stringOptions } from '@/stores/options'

const keys = computed(() => {
	return options.value.filter((e) => e.selected)
})

const options = ref(stringOptions)

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
	e.opt.selected = false
}
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag.q-mb-lg Простой поиск
		// pre {{ keys }}
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
				q-chip(v-model="scope.selected" removable @remove="remove(scope)") {{scope.opt.text}}
		.grid
			q-list
				q-item(v-for="item in options" :key="item.id" clickable @click="add(item)" :class="{selected: item.selected}")
					q-item-section
						q-item-label {{item.text}}
			transition(name="slide-right")
				q-list(v-if="keys.length > 0")
					q-item
						q-item-section
							q-item-label fuck
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
	gap: 1rem;
}
// .grid {
// 	display: grid;
// 	grid-template-columns: repeat(3, 1fr);
// 	justify-items: start;
// 	align-items: start;
// 	column-gap: 1rem;
// 	row-gap: 0.5rem;
// 	font-size: 0.9rem;
// 	.q-list {
// 		background: pink;
// 	}
// }
.selected {
	background: $blue-2;
}
.q-item {
	margin-bottom: 1px;
}
</style>
