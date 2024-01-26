<script setup lang="ts">
import { ref } from 'vue'
import { UseDraggable as Draggable } from '@vueuse/components'

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
			.text-h6 Hello
			q-space
			q-btn(icon="mdi-close" flat round dense @click="modelValue = false")

		q-card-section
			p Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus sit voluptate voluptas eveniet porro. Rerum blanditiis perferendis totam, ea at omnis vel numquam exercitationem aut, natus minima, porro labore.
</template>

<style scoped lang="scss">
.q-card {
	width: 500px;
	resize: both;
}
.fuck {
	width: 500px;
	height: 300px;
	background: white;
	box-shadow: var(--card-shadow);
	resize: both;
	overflow: scroll;
}
</style>
