<script setup lang="ts">
// import { ref } from 'vue'
import { useStore } from '@/stores/store'

const mystore = useStore()

const props = defineProps({
	modelValue: {
		type: Boolean,
		default: true,
	},
})

const pages = [
	{
		id: 0,
		title: 'Главная',
		icon: 'mdi-home-roof',
		url: '/',
	},
	{
		id: 1,
		title: 'Выключатели',
		icon: 'mdi-electric-switch',
		url: '/switches',
	},
	{
		id: 2,
		title: 'Тест',
		icon: 'mdi-flask-empty-outline',
		url: '/reverse',
	},
	{
		id: 4,
		title: 'Тест 1',
		icon: 'mdi-flask-empty-outline',
		url: '/reverse1',
	},
	{
		id: 3,
		title: 'Графики',
		icon: 'mdi-chart-line',
		url: '/chart',
	},
]
</script>

<template lang="pug">
q-drawer.rel(:model-value="props.modelValue" side="left" :mini="mystore.mini" :width="200")
	q-list.q-mt-lg
		q-item(clickable v-ripple v-for="page in pages" :to="page.url")
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section
				q-item-label {{ page.title }}

	q-btn(round flat dense  @click="mystore.toggleMini").mini.gt-sm
		q-icon(name="mdi-backburger" v-if="!mystore.mini")
		q-icon(name="mdi-forwardburger" v-else)

</template>

<style scoped lang="scss">
.mini {
	position: absolute;
	bottom: 1rem;
	left: 0.5rem;
	overflow-x: hidden;
}

.q-item--active,
.q-item.q-router-link--active {
	background: $accent1;
	color: $blue-9;
}
</style>
