<script setup lang="ts">
import { ref } from 'vue'
import { fields } from '@/stores/fieldsFlat'
import { getMembers } from '@/utils/utils'

const keys = ref([])
const stringOptions = getMembers(fields)

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
			outlined
			menu-shrink
			emit-value
			hide-dropdown-icon
			@filter="filterFn"
			input-debounce="0"
			:options="options"
			bg-color="white"
			).keys

			template(v-slot:option="scope")
				q-item(clickable v-bind="scope.itemProps")
					q-item-section
						q-item-label {{scope.opt.text}}
			template(v-slot:no-option)
				q-item.text-grey
					q-item-section No results
</template>

<style scoped lang="scss">
.container {
	max-width: 1200px;
}
</style>
