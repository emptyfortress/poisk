<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { zero } from '@/stores/options'

const zero1 = ref(zero)
const lev0 = computed(() => {
	return zero1.value.filter((e) => e.level == 0)
})
const lev1 = computed(() => {
	return zero1.value.filter((e) => e.level == 1)
})

const options = computed(() => {
	return zero1.value
	// if (keys.value.length == 0) return zero1.value.filter((e) => e.level == 0)
	// if (keys.value.length == 1) return zero1.value.filter((e) => e.level > 0)
})

// const keys = computed(() => {
// 	return zero1.value.filter((e) => e.selected == true)
// })

const filterFn = (val: string, update: Function) => {
	update(() => {
		if (val === '') {
			zero1.value = zero
		} else {
			const needle = val.toLowerCase()
			zero1.value = zero.filter((v) => v.text.toLowerCase().indexOf(needle) > -1)
		}
	})
}
const keys = ref([])
const add = (e: any) => {
	e.selected = !e.selected
	keys.value.push(e)
}
const reset = () => {
	// options.value.map((e: any) => (e.selected = false))
}
const remove = (e: any) => {
	e.opt.selected = false
}
const name = computed(() => {
	return
})
const mod = ref('')
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag.q-mb-lg Простой поиск
		q-input(v-model="mod" clearable dense)
			template(v-slot:prepend)
				q-icon(name="mdi-close" color="primary")
				q-icon(name="mdi-close" color="primary")
			template(v-slot:append)
				q-icon(name="mdi-close" color="primary")

		// q-select(dense
			v-model="keys"
			use-input
			use-chips
			multiple
			clearable
			@clear="reset"
			outlined
			menu-shrink
			hide-dropdown-icon
			input-debounce="0"
			:options="options"
			@filter="filterFn"
			bg-color="white").keys

			template(v-slot:option="scope")
			template(v-slot:no-option)
			template(v-slot:selected-item="scope")
				q-chip(v-model="scope.selected" dense removable @remove="remove(scope)") {{scope.opt.text}}
		// .grid
			q-list
				q-item(v-for="item in lev0" :key="item.id" clickable @click="add(item)" :class="{selected: item.selected}")
					q-item-section
						q-item-label {{item.text}}
			transition(name="slide-right")
				q-list(v-if="keys.length > 0")
					q-item(v-for="item in lev1" :key="item.id" clickable @click="add(item)" :class="{selected: item.selected}")
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
.q-input {
	font-size: 1.2rem;
}
</style>
