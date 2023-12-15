<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import '@he-tree/vue/style/default.css'
import WordHighlighter from 'vue-word-highlighter'
import { fields } from '@/stores/fields'
import { useDrag } from '@/stores/drag'
import { vid } from '@/stores/andreev'

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

// const treeKey = ref<string | null>(null)

const drag = useDrag()
const tree = ref()
const query = ref('')

const clearFilter = () => {
	query.value = ''
	tree.value.statsFlat.map((item: Stat) => (item.hidden = false))
}

const initial = (stat: any) => {
	stat.open = stat.data.open
	return stat
}
const dragstart = (e: NodeData) => {
	drag.setCurrentDrag(e)
}
const dragend = () => {
	if (!!drag.dragNode.parent && drag.treeKey !== drag.dragNode.parent[0]) {
		drag.setTreeKey(drag.dragNode.parent[0])
	}
	drag.setCurrentDrag(null)
}
watch(query, () => {
	if (query.value.length > 1) {
		tree.value.expandAll()
	}
})
const main = ref()

const myfields = computed(() => {
	if (!!drag.treeKey) {
		return filterByLabel(fields, drag.treeKey)
	}
	return fields
})
// const myfields = computed(() => {
// 	if (!!main.value && main.value.label == 'Документ - Входящий') {
// 		return filterByLabel(fields, 'Входящий')
// 	}
// 	if (!!main.value && main.value.label.includes('Задание')) {
// 		return filterByLabel(fields, 'Задание')
// 	}
// 	if (!!main.value && main.value.value == 'ГЗ') {
// 		return filterByLabel(fields, 'ГЗ')
// 	}
// 	return fields
// })
</script>

<template lang="pug">
div
	// q-select.q-mx-md.q-mb-md(dense v-model="main" :options="vid" option-disable="optionDisable" options-dense label="Выберите вид")
	q-input.q-mx-md.q-mb-md( ref="input" dense v-model="query" clearable hide-bottom-space @clear="clearFilter")
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")

	q-tree(
		ref="tree"
		:nodes="myfields"
		dense
		node-key="id"
		label-key="text"
		:filter="query"
		default-expand-all
		icon="mdi-chevron-right"
		)
		template(v-slot:default-header="prop")
			.node(:draggable="prop.node.drag" @dragstart="dragstart(prop.node)" @dragend="dragend")
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
</style>
