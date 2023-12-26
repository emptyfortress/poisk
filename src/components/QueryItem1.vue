<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue'
import draggable from 'vuedraggable'
import { useDrag } from '@/stores/drag'

const drag = useDrag()

const list = ref([
	// { id: 0, text: 'one' },
	// { id: 1, text: 'one lakjsdl' },
])

const tree = ref()
const end = (ev: Event) => {
	ev.preventDefault()
}
const insert = () => {
	console.log(drag.dragNode)
	if (drag.dragNode) {
		list.value.push(drag.dragNode)
	}
}
const remove = (el: any) => {
	list.value.splice(el, 1)
	// list.value = list.value.filter((item) => item == el)
}
</script>

<template lang="pug">
.con
	q-scroll-area(style="height: 150px; max-width: 100%;" )
		draggable(v-model="list"
			item-key="id"
			tag="ul"
			class="list-group"
			ghost-class="ghost"
			:ondragover="end"
			:ondrop="insert"
			group="data")

			template(#item="{ element, index }")
				li.list-group-item
					.head {{ element.text }}
					q-btn.close(flat round icon="mdi-close" @click="remove(index)" size="xs" dense) 
					// .sample sample
</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
	// width: 100%;
}
.list-group {
	display: flex;
	// align-items: stretch;
	// display: grid;
	// grid-template-columns: auto;
	// grid-auto-flow: rows;
	background: rgba(0, 0, 0, 0.07);
	gap: 1px;
	flex-wrap: nowrap;
	height: 100%;
}
.list-group-item {
	font-size: 0.9rem;
	display: grid;
	height: 75px;
	grid-template-rows: 42px 32px;
	// background: white;
	align-items: center;
	gap: 1px;
	position: relative;
	cursor: move;
	// white-space: nowrap;
	.close {
		position: absolute;
		top: 1px;
		right: 1px;
		visibility: hidden;
	}
	&:hover .close {
		visibility: visible;
	}
}
.head {
	color: var(--text-color);
	padding: 0.5rem 1rem;
	background: white;
	// padding-left: 1rem;
	// padding-right: 1rem;
	// height: 100%;
	// background: pink;
}
.sample {
	padding: 0.5rem 1rem;
	background: white;
	// padding-left: 1rem;
	// padding-right: 1rem;
	// text-align: center;
}
ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
}
.ghost {
	height: 75px;
	opacity: 0.5;
	background: #ccc;
}
ul:empty:after {
	display: block;
	content: 'Пусто. Настройте колонки, перетащив их из дерева справа.';
	width: 100%;
	text-align: center;
	color: rgba(0, 0, 0, 0.5);
	height: 75px;
	line-height: 75px;
	border-radius: 4px;
	font-size: 0.9rem;
}
</style>
