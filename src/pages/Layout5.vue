<script setup lang="ts">
import { ref, computed } from 'vue'
import GridPreview from '@/components/GridPreview.vue'
import DragEditWindow from '@/components/DragEditWindow.vue'

const show = ref(false)

const toggle = () => {
	show.value = !show.value
}
</script>

<template lang="pug">
q-page(padding)
	.container
		.row.justify-between.items-center
			.zag.q-mb-lg Представление 1
			q-btn(unelevated color="primary" icon="mdi-tune-vertical-variant" label="Настроить" @click="toggle" size="sm") 
		GridPreview

	DragEditWindow(v-model="show")
</template>

<style scoped lang="scss"></style>
