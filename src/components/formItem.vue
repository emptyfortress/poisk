<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	item: Object
})

const mod = ref('')
const selModel = ref('Любой')
</script>

<template lang="pug">
label {{ props.item.label }}:
q-input(v-if="props.item.type === 'input'" v-model="mod" dense outlined bg-color="white")
q-select(v-if="props.item.type === 'select'" v-model="selModel" dense outlined bg-color="white" :options="props.item.options")
q-input(v-if="props.item.type === 'date'" v-model="mod" dense outlined bg-color="white")
	template(v-slot:append)
		q-icon(name="mdi-calendar")
q-input(v-if="props.item.type === 'sprav'" v-model="mod" dense outlined bg-color="white")
	template(v-slot:prepend)
		q-icon(name="mdi-book-open-page-variant-outline")
</template>

<style scoped lang="scss">
label {
	font-size: .9rem;
	text-align: right;
}
</style>
