<script setup lang="ts">
import twoList from '@/components/twoList.vue'
import { useStore } from '@/stores/store'
const store = useStore()

const edit = defineModel<boolean>()
const close = (() => {
	edit.value = false
})
</script>

<template lang="pug">
q-dialog(v-model="edit" transition-show="slide-up" transition-hide="slide-down")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6
				span(v-if="store.currentNode") {{ store.currentNode.data.text }}
				span(v-else) Задания на контроле
			q-space
			q-btn(icon="mdi-close" flat round dense @click="close")

		q-card-section
			twoList

		q-card-actions.q-pa-md(align="right")
			q-btn(flat color="primary" label="Отмена" v-close-popup @click="close") 
			q-btn(unelevated color="primary" label="Сохранить" v-close-popup @click="close") 
</template>

<style scoped lang="scss">
.q-card {
	min-width: 900px;
	background: var(--bg-panel);
}
</style>
