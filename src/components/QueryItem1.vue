<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue'
import draggable from 'vuedraggable'
import { useDrag } from '@/stores/drag'
import StylePanel from '@/components/StylePanel.vue'
import SortPanel from '@/components/SortPanel.vue'
import GroupPanel from '@/components/GroupPanel.vue'
import { useView } from '@/stores/views'

const drag = useDrag()
const view = useView()
const headsize = computed(() => {
	return view.head.size + 'rem'
})

const list = ref<ColNode[]>([])

// const tree = ref()
const end = (ev: Event) => {
	ev.preventDefault()
}
const insert = () => {
	// console.log(drag.dragNode)
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
	q-scroll-area
		draggable(:list="list"
			item-key="id"
			tag="ul"
			class="list-group"
			ghost-class="ghost"
			:ondragover="end"
			:ondrop="insert"
			:group="{ name: 'data', pull: 'clone', put: false }"
			)
			template(#item="{ element, index }")
				li.list-group-item {{ element.text }}
					q-btn.close(flat round icon="mdi-close" @click="remove(index)" size="xs" dense) 
		.gr
			.sam(v-for="item in list") -- data --
			.sam(v-for="item in list") -- data --

	template( v-if="list.length" )
		q-tabs(v-model="tabs" active-color="primary")
			q-tab(name="style" label="Шапка")
			q-tab(name="style1" label="Данные")
			q-tab(name="sort" label="Сортировка")
			q-tab(name="group" label="Группировка")
			q-tab(name="select" label="Выделение")
			q-tab(name="graph" label="График")

		q-separator
		q-tab-panels(v-model="tabs" animated)
			q-tab-panel(name="style")
				StylePanel
			q-tab-panel(name="style1") data
			q-tab-panel(name="sort")
				SortPanel
			q-tab-panel(name="group")
				GroupPanel()
			q-tab-panel(name="select") select
			q-tab-panel(name="graph") graph
</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
}
.list-group {
	// box-sizing: border-box;
	display: grid;
	grid-template-columns: repeat(v-bind(col), 1fr);
	border: 1px solid #e0e0e0;
	border-bottom: none;
	// background: rgba(0, 0, 0, 0.07);
	background: white;
	padding: 1px;
	gap: 2px;
}
.q-tab-panels {
	background: transparent;
}
.q-tab-panel {
	padding: 0;
}
.gr {
	display: grid;
	grid-template-columns: repeat(v-bind(col), 1fr);
	background: white;
	gap: 1px;
}
.sam {
	font-size: 1rem;
	background: white;
	// color: var(--text-color);
	color: #000;
	padding: 0.7rem 1rem;
	line-height: 1.2;
	min-width: 127px;
	border-bottom: 1px solid #e0e0e0;
}
.list-group-item {
	font-size: v-bind(headsize);
	background: v-bind('view.head.bgColor');
	cursor: move;
	color: v-bind('view.head.fontColor');
	padding: 0.7rem 1rem;
	line-height: 1.2;
	position: relative;
	text-align: v-bind('view.head.align');
	font-weight: v-bind('view.head.weight');
	font-style: v-bind('view.head.style');
	border: 1px solid #e0e0e0;
	min-width: 127px;
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
:deep(.q-scrollarea) {
	height: 140px;
	max-width: 100%;
}
</style>
