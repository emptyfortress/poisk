<script setup lang="ts">
import { ref } from 'vue'
import { UseDraggable as Draggable } from '@vueuse/components'
import ColumnSetup from '@/components/ColumnSetup.vue'

const modelValue = defineModel()
const el = ref<HTMLElement | null>(null)
const handle = ref<HTMLElement | null>(null)
</script>

<template lang="pug">
transition(name="slide-top")
	Draggable.fuck(v-slot="{ x, y }"
		:prevent-default="true"
		v-if="modelValue"
		:initial-value="{ x: 340, y: 240 }"
		prevent-default="true"
		style="position: fixed;"
		:handle="handle")
		q-card-section.row.items-center.q-pb-none(ref="handle")
			.text-h6 Настройка представления
			q-space
			q-btn(unelevated color="primary" label="Применить" @click="apply" size="sm")
			q-btn.q-ml-lg(icon="mdi-close" flat round dense @click="modelValue = false")

		q-card-section
			ColumnSetup(revert)
</template>

<style scoped lang="scss">
.q-card {
	width: 500px;
	resize: both;
}
.fuck {
	width: 900px;
	height: 400px;
	background: white;
	box-shadow: var(--card-shadow);
	resize: both;
	overflow: scroll;
}
</style>
