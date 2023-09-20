<script setup lang="ts">

interface Item {
	id: number,
	label: string,
	check: boolean,
	sort: boolean,
	filter: boolean
}

const props = defineProps<{
	item: Item
}>()

</script>

<template lang="pug">
.lab {{ props.item.label }}
.q-gutter-md
	q-checkbox(v-model="props.item.sort" dense label="Сортировка")
	q-checkbox(v-model="props.item.filter" dense label="Фильтр")
</template>

<style scoped lang="scss">
.lab {
	font-size: .9rem;
	// text-align: right;
}
</style>
