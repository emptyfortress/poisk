<script setup lang="ts">
import { ref } from 'vue'
import twoList from '@/components/twoList.vue'
import { useStore } from '@/stores/store'
const store = useStore()

const edit = defineModel<boolean>()
const close = (() => {
	edit.value = false
	store.dialog = false
})
</script>

<template lang="pug">
q-dialog(v-model="edit" transition-show="slide-up" transition-hide="slide-down")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Настроить Поиск 1
			q-space
			q-btn(icon="mdi-close" flat round dense @click="close")

		q-card-section
			twoList
</template>

<style scoped lang="scss">
.q-card {
	min-width: 900px;
	// width: 900px;
	min-height: 80vh;
	background: var(--bg-panel);
}
</style>
