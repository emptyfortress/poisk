<script setup lang="ts">
import { ref } from 'vue'
import { uid } from 'quasar'
import draggable from 'vuedraggable'
import { datasource, options } from '@/stores/twolist'
import FieldTree from '@/components/FieldTree.vue'
import { useDrag } from '@/stores/drag'

const drag = useDrag()
const list = ref([])

const end = (ev: Event) => {
	ev.preventDefault()
}
const insert = () => {
	if (drag.dragNode) {
		let temp = {
			id: uid(),
			check: true,
			sort: true,
			label: drag.dragNode.text,
		}
		list.value.push(temp)
	}
}
const remove = (ind: number) => {
	list.value.splice(ind, 1)
}
</script>

<template lang="pug">
q-scroll-area(style="height: 40vh;")
	.main
		div
			.text-weight-bold Доступные поля:
			FieldTree(layout)
		div
			.text-weight-bold Колонки:
			draggable(:list="list"
				item-key="id"
				tag="ul"
				class="list-group"
				ghost-class="ghost"
				:ondragover="end"
				:ondrop="insert"
				group="data")

				template(#item="{ element, index }")
					li.list-group-item
						.dragg
						q-checkbox.q-mr-lg(v-model="element.check" dense :label="element.label")
						q-btn.right(flat round icon="mdi-close" dense size="xs" @click="remove(index)") 
		.sort
			.text-weight-bold Сортировка:
			div Тип &uarr;
			.text-weight-bold Группировка:
			div Вид карточки<br>Статус
</template>

<style scoped lang="scss">
.main {
	margin: 0 auto;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	align-items: start;
	column-gap: 2rem;
	row-gap: 0.5rem;
	font-size: 0.9rem;
}
.list-group {
	display: flex;
	flex-direction: column;
	cursor: move;
}
.list-group-item {
	display: flex;
	justify-content: space-between;
	background: #fff;
	padding: 6px 6px 6px 16px;
	margin-bottom: -1px;
	position: relative;
	border: 1px solid #dedede;
	font-size: 0.9rem;
}
.filt {
	font-size: 0.9rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
}
.dragg {
	position: absolute;
	top: 0;
	left: 0;
	width: 10px;
	height: 100%;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAChJREFUGFc1ikEOwDAAguD/j2ax7fSiBMUgE1xlOY/uemCaTRjrV/kAE0wHDsCeQbcAAAAASUVORK5CYII=)
		repeat;
}
.ghost {
	opacity: 0.5;
}
.sort {
	display: grid;
	grid-template-columns: auto 1fr;
	justify-items: start;
	align-items: start;
	gap: 1rem;
}
ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
}
ul {
	margin-top: 1rem;
}
ul:empty:after {
	display: block;
	content: 'Пусто. Настройте колонки, перетащив их из дерева слева.';
	width: 100%;
	text-align: center;
	color: rgba(0, 0, 0, 0.5);
	height: 75px;
	// line-height: 75px;
	border-radius: 4px;
	font-size: 0.9rem;
}
</style>
