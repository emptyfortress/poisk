<script setup lang="ts">
import { useEditor } from '@/stores/editor'

const editor = useEditor()
</script>

<template lang="pug">
q-page(padding)
	.container
		h2 Hello

		.type
			.row.items-center
				.label Тип:
				q-select(v-model="editor.type" :options="editor.typeOptions" dense )
			.row.items-center
				.label Вид:
				q-select(v-model="vid" :options="editor.calcVid" dense)
</template>

<style scoped lang="scss">
.type {
	margin-left: 1rem;
	margin-top: 1rem;
	display: flex;
	justify-content: flex-start;
	gap: 4rem;
}
</style>
