<script setup lang="ts">
import { ref, computed } from 'vue'
import type { QTableColumn } from 'quasar'
import { useStore } from '@/stores/store'

const modelValue = defineModel()
const props = defineProps<{
	tree: Stat[]
}>()

const emit = defineEmits(['close'])
const store = useStore()
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card(style="width: 900px; max-width: 80vw;")
		q-card-section.row.items-center.q-pb-none
			.text-h6 {{ store.currentNode?.data.text }}
			q-space
			q-btn( icon="mdi-close" flat round dense @click="emit('close')")

		q-card-section
			p {{ props.tree }}
</template>

<style scoped lang="scss"></style>
