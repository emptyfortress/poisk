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
}
const col = computed(() => {
	return list.value.length
})
const tabs = ref('style')
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
				li.list-group-item {{ element.text }}
					q-btn.close(flat round icon="mdi-close" @click="remove(index)" size="xs" dense) 
		q-separator
		.gr
			.sam(v-for="item in list") data


	q-tabs(v-model="tabs" active-color="primary" v-if="list.length" )
		q-tab(name="style" label="Внешний вид")
		q-tab(name="sort" label="Сортировка")
		q-tab(name="group" label="Группировка")
		q-tab(name="select" label="Выделение")
</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
}
.list-group {
	display: grid;
	grid-template-columns: repeat(v-bind(col), 1fr);
	background: rgba(0, 0, 0, 0.07);
	gap: 1px;
}
.gr {
	display: grid;
	grid-template-columns: repeat(v-bind(col), 1fr);
	background: rgba(0, 0, 0, 0.07);
	gap: 1px;
}
.sam {
	font-size: 0.9rem;
	background: white;
	color: var(--text-color);
	padding: 0.7rem 1rem;
	line-height: 1.2;
}
.list-group-item {
	font-size: 0.9rem;
	background: white;
	cursor: move;
	color: var(--text-color);
	padding: 0.7rem 1rem;
	line-height: 1.2;
	position: relative;
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
.sample {
	padding: 0.5rem 1rem;
	background: white;
}
ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
}
.ghost {
	padding: 0.5rem 1rem;
	// height: 75px;
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
.q-tabs {
	border-bottom: 1px solid #ccc;
}
</style>
