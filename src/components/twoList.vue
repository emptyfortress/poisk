<script setup lang="ts">
import { ref } from 'vue'
import draggable from "vuedraggable"

const source = ref('Общий - по атрибутам')
const sourceOptions = [
	'Общий - по атрибутам',
	// 'Договоры - поиски договоров',
	// 'Задания - поиски заданий',
	'Документы - поиски документов',
]

const list = ref([
	{ id: 0, name: 'Номер', check: true },
	{ id: 1, name: 'Контрагент', check: true },
	{ id: 2, name: 'Сумма', check: true },
	{ id: 3, name: 'Дата подписания', check: true },
	{ id: 4, name: 'Ответственный', check: true },
])

const list1 = ref([
	{ id: 5, name: 'Fuck', check: true },
])
</script>

<template lang="pug">
.source
	label Источник данных:
	q-select(v-model="source" dense :options="sourceOptions" outlined bg-color="white")
.drag
	div
		.text-center Доступно
		draggable(:list="list"
			item-key="id"
			class="list-group"
			ghost-class="ghost"
			group="data"
			)

			template(#item="{ element }")
				.list-group-item
					.dragg
					q-checkbox(v-model="element.check" dense :label="element.name")

	div
		.text-center Выбрано
		draggable(:list="list1"
			item-key="id"
			class="list-group"
			ghost-class="ghost"
			group="data"
			)

			template(#item="{ element }")
				.list-group-item
					.dragg
					q-checkbox(v-model="element.check" dense :label="element.name")
</template>

<style scoped lang="scss">
.source {
	margin: 1rem auto;
	display: flex;
	align-items: center;
	gap: 1rem;

	.q-select {
		width: 350px;
	}
}

.drag {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 2rem;
}

.list-group-item {
	background: #fff;
	padding: 6px 1rem 6px 1.5rem;
	width: 250px;
	margin-bottom: -1px;
	position: relative;
	border: 1px solid #dedede;

}

.dragg {
	position: absolute;
	top: 0;
	left: 0;
	width: 15px;
	height: 100%;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAChJREFUGFc1ikEOwDAAguD/j2ax7fSiBMUgE1xlOY/uemCaTRjrV/kAE0wHDsCeQbcAAAAASUVORK5CYII=) repeat;
}

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
</style>
