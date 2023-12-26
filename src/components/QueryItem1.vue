<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue'
// import { Draggable } from '@he-tree/vue'
import draggable from 'vuedraggable'
// import ConditionItem from '@/components/ConditionItem.vue'
import { useDrag } from '@/stores/drag'
// import PreviewFormDialog from '@/components/PreviewFormDialog.vue'

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
	q-scroll-area(style="height: 200px; max-width: 100%;" )
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
					.sample sample data
// PreviewFormDialog(v-model="props.preview" :tree="all" @close="emit('closePreview')" @find="emit('find')")
</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
	// width: 100%;
}
.list-group {
	display: flex;
	align-items: stretch;
	background: rgba(0, 0, 0, 0.07);
	gap: 1px;
	flex-wrap: nowrap;
}
.list-group-item {
	font-size: 0.9rem;
	.head {
		color: var(--text-color);
		background: white;
		padding: 1rem 2rem;
		display: block;
		position: relative;
		cursor: move;
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
}
.sample {
	width: 100%;
	height: 42px;
	background: white;
	margin-top: 1px;
	line-height: 42px;
	text-align: center;
}
ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
}
.ghost {
	height: 50px;
	opacity: 0.5;
	background: #ccc;
}
ul:empty:after {
	display: block;
	content: 'Пусто. Перетащите сюда узел из дерева справа для настройки колонок';
	width: 100%;
	text-align: center;
	color: rgba(0, 0, 0, 0.5);
	padding: 1rem;
	border-radius: 4px;
	font-size: 0.9rem;
}
</style>
