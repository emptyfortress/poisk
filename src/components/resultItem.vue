<script setup lang="ts">
import { ref } from 'vue'
import columnsList from '@/components/columnsList.vue'

const view = ref('Договоры')
const options = [
	'Договоры',
	'Дайджест',
	'Я - автор',
	'Заявки',
	'Служебный записки',
]
const change = (() => {
	view.value = '** Договоры **'
})
</script>

<template lang="pug">
q-expansion-item
	template(v-slot:header)
		q-item-section(avatar)
			label Представление результатов в виде:
		q-item-section(@click.stop="")
			q-select(v-model="view" dense outlined bg-color="white" :options="options")

	q-card(transparent)
		q-card-section
			columnsList(@change="change")
</template>

<style scoped lang="scss">
.q-card {
	background: transparent;
}

.q-expansion-item {
	border-top: 1px solid #ccc;
}
</style>
