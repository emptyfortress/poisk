<script setup lang="ts">
import { ref, computed } from 'vue'
import { UseDraggable as Draggable } from '@vueuse/components'
import ColumnSetup from '@/components/ColumnSetup.vue'

const modelValue = defineModel()
const el = ref<HTMLElement | null>(null)
const handle = ref<HTMLElement | null>(null)
const initial = computed(() => {
	let xval = window.innerWidth / 2 - 300
	let yval = window.innerHeight / 2
	return { x: xval, y: yval }
})
</script>

<template lang="pug">
transition(name="slide-top")
	Draggable.fuck(v-slot="{ x, y }"
		:prevent-default="true"
		v-if="modelValue"
		:initial-value="initial"
		prevent-default="true"
		style="position: fixed;"
		:handle="handle")
		q-card-section.sec(ref="handle")
			.text-h6 Представление 1
			q-space
			q-btn(unelevated color="primary" label="Применить" size="sm")
			q-btn.q-ml-lg(icon="mdi-close" flat round dense @click="modelValue = false")

		q-card-section
			ColumnSetup(revert)
</template>

<style scoped lang="scss">
.q-card {
	width: 500px;
	resize: both;
}
.sec {
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: move;
	padding-bottom: 0;
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
