<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
// import { datasource } from '@/stores/select'
import poiskDialog from '@/components/poiskDialog.vue'

const modelValue = defineModel()
const mystore = useStore()

const pages = [
	{
		id: 0,
		title: 'Старт',
		icon: 'mdi-home-roof',
		url: '/',
	},
	{
		id: 1,
		title: 'Запросы',
		icon: 'mdi-puzzle-outline',
		url: '/search',
	},
	{
		id: 3,
		title: 'Мои поиски',
		icon: 'mdi-briefcase-search-outline',
		url: '/mysearch',
	},
	{
		id: 2,
		title: 'Представления',
		icon: 'mdi-briefcase-edit-outline',
		url: '/layout',
	},
]
const dialog = ref(false)
const dialogToggle = (() => {
	dialog.value = !dialog.value
})
</script>

<template lang="pug">
q-drawer(v-model="modelValue" bordered side="left" :width="256")
	q-list.q-mt-lg
		q-item(clickable v-ripple v-for="page in pages" :to="page.url")
			q-item-section(avatar)
				q-icon(:name="page.icon")
			q-item-section
				q-item-label {{ page.title }}
		br
		br
		q-separator
		q-item(clickable @click="dialogToggle")
			q-item-section(avatar)
				q-icon(name="mdi-briefcase-search-outline")
			q-item-section Поиск 1

poiskDialog(v-model="dialog")

</template>

<style scoped lang="scss">
.q-item--active,
.q-item.q-router-link--active {
	background: $accent1;
	color: $blue-9;
}

:deep(.q-drawer) {
	background: var(--bg-panel);
}
</style>
