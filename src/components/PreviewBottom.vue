<script setup lang="ts">
import { ref } from 'vue'
import ColsBottom from '@/components/ColsBottom.vue'
import ThemeBottom from '@/components/ThemeBottom.vue'
import DrawBottom from '@/components/DrawBottom.vue'

const modelValue = defineModel()
const emit = defineEmits(['apply'])

const close = () => {
	modelValue.value = false
}

const tabs = ref('cols')
const apply = () => {
	emit('apply')
}
</script>

<template lang="pug">
q-dialog.bott(v-model="modelValue" persistent no-shake allow-focus-outside seamless position="bottom")
	q-card(style="min-width: 900px; min-height: 53vh;")
		.top
			.text-h6 Настройка представления
			div
				q-btn(flat color="primary" label="Применить" @click="apply" size="sm")
				q-btn.q-mr-lg(unelevated color="primary" label="Сохранить" size="sm")
				q-btn.q-ml-lg(icon="mdi-close" flat round dense v-close-popup)

		q-tabs(v-model="tabs" active-color="secondary" dense)
			q-tab(name="cols" label="Колонки")
			q-tab(name="style" label="Темы")
			q-tab(name="draw" label="Цвет")
		q-tab-panels(v-model="tabs" animated)
			q-tab-panel(name="cols")
				ColsBottom()
			q-tab-panel(name="style")
				ThemeBottom()
			q-tab-panel(name="draw")
				DrawBottom()
</template>

<style scoped lang="scss">
.q-tab-panels {
	background: transparent;
}
.top {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
}
.q-tabs {
	background: #dcdcdc;
}
</style>
