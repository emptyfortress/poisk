<script setup lang="ts">
import { ref, computed } from 'vue'
import PreviewBottom from '@/components/PreviewBottom.vue'
import GridPreview from '@/components/GridPreview.vue'

const dialog = ref(false)
const apply = () => {
	preview.value = true
}
const show = () => {
	dialog.value = !dialog.value
}
const preview = ref(false)
</script>

<template lang="pug">
q-page(padding)
	.container
		.row.justify-between.items-center
			.zag.q-mb-lg Я - автор
			q-btn(unelevated color="primary" icon="mdi-tune-vertical-variant" label="Настроить" @click="show" size="sm") 
		template(v-if="preview")
			GridPreview

		PreviewBottom(v-model="dialog"  @apply="apply")
</template>

<style scoped lang="scss"></style>
