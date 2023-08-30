<script setup lang="ts">
import { ref } from 'vue'
import formItem from '@/components/formItem.vue'

const left = [
	{id: 0, label: 'Тип карточки', type: 'select', options: ['Любой', 'Документ', 'Задание', 'Группа заданий']},
	{id: 1, label: 'Название документа', type: 'input'},
	{id: 2, label: 'Вид', type: 'select', options: ['Любой', 'На подписание', 'На ознакомление', 'Служебная записка', 'Заявка', 'Заявление на отпуск']},
	{id: 3, label: 'Дата завершения, факт.', type: 'date'},
	{id: 4, label: 'Автор', type: 'sprav'},
	{id: 5, label: 'Ответственный', type: 'sprav'},
	{id: 6, label: 'Рег.номер', type: 'input'},
	{id: 7, label: 'Состояние', type: 'input'},
]
const right = [
	{id: 0, label: 'Дата регистрации', type: 'date'},
	{id: 1, label: 'Дата изменения', type: 'date'},
	{id: 2, label: 'Дата выполнения задания', type: 'date'},
	{id: 3, label: 'Согласует', type: 'sprav'},
	{id: 4, label: 'Подписывает', type: 'sprav'},
	{id: 5, label: 'Контрагент', type: 'sprav'},
	{id: 6, label: 'Партнер', type: 'sprav'},
]
</script>

<template lang="pug">
.form
	.left
		formItem(v-for="item in left" :item="item" :key="item.id")
	.left
		formItem(v-for="item in right" :item="item" :key="item.id")

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
