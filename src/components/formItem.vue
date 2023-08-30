<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
	label: String
})

const mod = ref('')
</script>

<template lang="pug">
label {{ props.label }}:
q-input(v-model="mod" dense outlined bg-color="white")
</template>

<style scoped lang="scss">
label {
	font-size: .9rem;
	text-align: right;
}
</style>
