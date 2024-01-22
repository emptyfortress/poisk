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
	q-card(style="min-width: 800px; min-height: 50vh;")
		.top
			.text-h6 Настройка представления
			q-tabs(v-model="tabs" active-color="secondary" dense)
				q-tab(name="cols" label="Колонки")
				q-tab(name="style" label="Темы")
				q-tab(name="draw" label="Цвет")
			// q-btn(flat color="primary" label="Применить" @click="apply") 
			// q-btn.q-mr-lg(flat color="primary" label="Сохранить как") 
			// q-btn.q-mr-lg(unelevated color="primary" label="Сохранить") 
			q-btn.q-ml-lg(icon="mdi-close" flat round dense v-close-popup)

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
	padding-bottom: 0;
	// border-bottom: 1px solid red;
	background: #dcdcdc;
}
</style>
