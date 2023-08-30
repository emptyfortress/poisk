<script setup lang="ts">
import { ref } from 'vue'
import formItem from '@/components/formItem.vue'

const left = [
	{id: 0, label: 'Тип карточки'},
	{id: 1, label: 'Название документа'},
	{id: 2, label: 'Вид'},
	{id: 3, label: 'Дата завершения, факт.'},
	{id: 4, label: 'Автор'},
	{id: 5, label: 'Ответственный'},
	{id: 6, label: 'Рег.номер'},
	{id: 7, label: 'Состояние'},
]
const right = [
	{id: 0, label: 'Дата регистрации'},
	{id: 1, label: 'Дата изменения'},
	{id: 2, label: 'Дата выполнения задания'},
	{id: 3, label: 'Согласует'},
	{id: 4, label: 'Подписывает'},
	{id: 5, label: 'Контрагент'},
	{id: 6, label: 'Партнер'},
]
</script>

<template lang="pug">
.form
	.left
		formItem(v-for="item in left" :label="item.label")
	.left
		formItem(v-for="item in right" :label="item.label")

</template>

<style scoped lang="scss">
.form {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1rem;
	margin-top: 1rem;
	align-items: start;
}

.left {
	display: grid;
	grid-template-columns: auto 1fr;
	gap: .5rem;
	align-items: center;
}
</style>
