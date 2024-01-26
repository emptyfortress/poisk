<script setup lang="ts"></script>

<template lang="pug">
.q-mx-lg
	ul.list-group
		li.list-group-item Тип
		li.list-group-item Вид карточки
		li.list-group-item Статус
		li.list-group-item Исполнитель
		li.list-group-item Дата создания
	.gr
		.sam(v-for="n in 5") -- data --
		.sam(v-for="n in 5") -- data --
</template>

<style scoped lang="scss">
ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
}
.list-group {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	border: 1px solid #e0e0e0;
	border-bottom: none;
	background: white;
	padding: 1px;
	gap: 2px;
}
.list-group-item {
	font-size: 0.8rem;
	background: white;
	cursor: move;
	color: #666666;
	padding: 0.7rem 1rem;
	line-height: 1.2;
	position: relative;
	text-align: left;
	font-weight: 500;
	border: 1px solid #e0e0e0;
	min-width: 127px;
}
.gr {
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	background: white;
	gap: 1px;
}
.sam {
	font-size: 1rem;
	background: white;
	color: #000;
	padding: 0.7rem 1rem;
	line-height: 1.2;
	min-width: 127px;
	border-bottom: 1px solid #e0e0e0;
}
</style>
