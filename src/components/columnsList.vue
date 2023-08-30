<script setup lang="ts">
import { ref, watch } from 'vue'
import draggable from "vuedraggable"

const list = ref([
	{ id: 0, name: 'Номер', check: true },
	{ id: 1, name: 'Контрагент', check: true },
	{ id: 2, name: 'Сумма', check: true },
	{ id: 3, name: 'Дата подписания', check: true },
	{ id: 4, name: 'Ответственный', check: true },
])

const emit = defineEmits(['change'])

watch(list.value, () => {
	emit('change')
})
</script>

<template lang="pug">
.grid
	div Настройте видимость <br />и порядок следования колонок:
	draggable(:list="list"
		item-key="id"
		class="list-group"
		ghost-class="ghost"
		)

		template(#item="{ element }")

			.list-group-item
				.drag
				q-checkbox(v-model="element.check" dense :label="element.name")
</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: auto 1fr;
	align-items: start;
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
.drag {
	position: absolute;
	top: 0;
	left: 0;
	width: 15px;
	height: 100%;
	background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAChJREFUGFc1ikEOwDAAguD/j2ax7fSiBMUgE1xlOY/uemCaTRjrV/kAE0wHDsCeQbcAAAAASUVORK5CYII=) repeat;
}

.ghost {
	opacity: 0.5;
	background: #c8ebfb;
}
</style>
