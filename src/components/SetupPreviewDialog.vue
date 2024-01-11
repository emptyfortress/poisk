<script setup lang="ts">
const modelValue = defineModel()
</script>

<template lang="pug">
q-dialog(v-model="modelValue" persistent)
	q-card(style="width: 700px; max-width: 80vw; cursor: default;")
		q-card-section.q-pa-sm(horizontal)
			.col
				.text-h6.q-ml-lg Настройка таблицы
			.col-auto
				q-btn(icon="mdi-close" flat round dense v-close-popup @click="close")
		q-separator
		q-card-section fuck
</template>

<style scoped lang="scss"></style>
