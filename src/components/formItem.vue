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
	check: boolean,
	val?: string,
	notset: boolean
}

const props = defineProps<{
	item: Item,
	wind: boolean
}>()

const mod = ref('')
const selModel = ref('Любой')
</script>

<template lang="pug">
.lab {{ props.item.label }}
q-input(v-if="props.item.type === 1" v-model="mod" dense filled )
q-select(v-if="props.item.type === 2" v-model="props.item.val" dense filled :options="props.item.options")
q-input(v-if="props.item.type === 4" v-model="mod" dense filled )
	template(v-slot:append)
		q-icon(name="mdi-calendar")
q-input(v-if="props.item.type === 3" v-model="mod" dense filled )
	template(v-slot:prepend)
		q-icon(name="mdi-book-open-page-variant-outline")
q-checkbox(v-if="!props.wind" v-model="props.item.check" dense label="Показать")
q-toggle(v-if="props.wind" v-model="props.item.notset" label="Не задано")
</template>

<style scoped lang="scss">
label {
	font-size: .9rem;
	text-align: right;
}
</style>
