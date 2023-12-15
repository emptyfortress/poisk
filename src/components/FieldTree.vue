<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import WordHighlighter from 'vue-word-highlighter'
import { fields } from '@/stores/fields'
import { useDrag } from '@/stores/drag'

const filterByLabel = (array: any, searchTerm: string) => {
	return array.reduce((prev: any, curr: any) => {
		const children = curr.children ? filterByLabel(curr.children, searchTerm) : undefined
		const even = (elem: any) => elem.toLowerCase().includes(searchTerm.toLowerCase())

		return curr.text?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			children?.length > 0 ||
			curr.parent?.some(even) ||
			curr.type == 0
			? [...prev, { ...curr, children }]
			: prev
	}, [])
}

const drag = useDrag()
const tree = ref()
const query = ref('')

const clearFilter = () => {
	query.value = ''
}

const dragstart = (e: NodeData) => {
	drag.setCurrentDrag(e)
}
const dragend = () => {
	if (!!drag.dragNode && !!drag.dragNode.parent && drag.treeKey !== drag.dragNode.parent[1]) {
		drag.setTreeKey(drag.dragNode.parent[1])
	}
	drag.setCurrentDrag(null)
}
watch(query, () => {
	if (query.value.length > 1) {
		tree.value.expandAll()
	}
})

const myfields = computed(() => {
	if (!!drag.treeKey) {
		return filterByLabel(fields, drag.treeKey)
	}
	return fields
})
</script>

<template lang="pug">
div
	q-input.q-mx-md.q-mb-md( ref="input" dense v-model="query" clearable hide-bottom-space @clear="clearFilter")
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")

	q-tree(ref="tree"
		:nodes="myfields"
		dense
		node-key="id"
		label-key="text"
		:filter="query"
		icon="mdi-chevron-right")
		template(v-slot:default-header="prop")
			.node(:draggable="prop.node.drag" @dragstart="dragstart(prop.node)" @dragend="dragend" :class="{grey : prop.node.drag}")
				WordHighlighter(:query="query") {{ prop.node.text }}

</template>

<style scoped lang="scss">
.node {
	width: 100%;
	padding: 2px 6px;
	cursor: pointer;
	font-size: 0.9rem;
	background: var(--bg-main);
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}
:deep(.q-tree__arrow) {
	font-size: 19px;
	color: #666;
}
.grey {
	color: $secondary;
}
</style>
