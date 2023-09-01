<script setup lang="ts">
import { ref } from 'vue'

enum InputType {
	Empty = 0,
	Input,
	Select,
	Sprav,
	Date
}
interface Item {
	id: number,
	label: string,
	type: InputType,
	options?: String[],
	check: boolean
}

const props = defineProps<{
	item: Item
}>()

const mod = ref('')
const selModel = ref('Любой')
</script>

<template lang="pug">
// label {{ props.item.label }}
q-checkbox(v-model="props.item.check" dense :label="props.item.label")
q-input(v-if="props.item.type === 1" v-model="mod" dense outlined bg-color="white")
q-select(v-if="props.item.type === 2" v-model="selModel" dense outlined bg-color="white" :options="props.item.options")
q-input(v-if="props.item.type === 4" v-model="mod" dense outlined bg-color="white")
	template(v-slot:append)
		q-icon(name="mdi-calendar")
q-input(v-if="props.item.type === 3" v-model="mod" dense outlined bg-color="white")
	template(v-slot:prepend)
		q-icon(name="mdi-book-open-page-variant-outline")
</template>

<style scoped lang="scss">
label {
	font-size: .9rem;
	text-align: right;
}
</style>
