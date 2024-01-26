<script setup lang="ts">
import { ref } from 'vue'
import ColsBottom from '@/components/ColsBottom.vue'
import ThemeBottom from '@/components/ThemeBottom.vue'
import DrawBottom from '@/components/DrawBottom.vue'

const tabs = ref('cols')
</script>

<template lang="pug">
div
	q-tabs(v-model="tabs" active-color="secondary" dense)
		q-tab(name="cols" label="Колонки")
		q-tab(name="style" label="Темы")
		q-tab(name="draw" label="Цвет")

	q-tab-panels(v-model="tabs" animated)
		q-tab-panel(name="cols")
			ColsBottom(revert)
		q-tab-panel(name="style")
			ThemeBottom()
		q-tab-panel(name="draw")
			DrawBottom()
</template>

<style scoped lang="scss">
:deep(.q-tab-panels) {
	border: 1px solid var(--my-border-color);
	background: var(--bg-panel);
	height: 100%;
}
</style>
