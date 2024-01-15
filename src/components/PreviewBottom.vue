<script setup lang="ts">
import { ref } from 'vue'
import ColsBottom from '@/components/ColsBottom.vue'
import ThemeBottom from '@/components/ThemeBottom.vue'
import DrawBottom from '@/components/DrawBottom.vue'

const modelValue = defineModel()
const close = () => {
	modelValue.value = false
}

const tabs = ref('cols')
</script>

<template lang="pug">
q-dialog.bott(v-model="modelValue" persistent no-shake allow-focus-outside seamless full-width position="bottom")
	q-card(style="min-width: 800px; min-height: 618px;")
		q-card-section.row.items-center
			.text-h6 Настройка представления "Я - автор"
			q-space
			q-btn(flat color="primary" label="Применить" @click="close") 
			q-btn.q-mr-lg(unelevated color="primary" label="Сохранить" @click="close") 
			q-btn(icon="mdi-close" flat round dense v-close-popup)
		q-tabs(v-model="tabs" active-color="primary")
			q-tab(name="cols" label="Колонки")
			q-tab(name="style" label="Темы")
			q-tab(name="draw" label="Цвет")

		q-separator
		q-tab-panels(v-model="tabs" animated)
			q-tab-panel(name="cols")
				ColsBottom()
			q-tab-panel(name="style")
				ThemeBottom()
			q-tab-panel(name="draw")
				DrawBottom()
</template>

<style scoped lang="scss"></style>
