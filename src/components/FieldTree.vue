<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import WordHighlighter from 'vue-word-highlighter'
import { fields, operators } from '@/stores/fields'
import { useDrag } from '@/stores/drag'

const props = defineProps({
	layout: {
		type: Boolean,
		default: false,
	},
})

const filterByLabel = (array: any, searchTerm: string) => {
	return array.reduce((prev: any, curr: any) => {
		const children = curr.children ? filterByLabel(curr.children, searchTerm) : undefined
		const even = (elem: any) => elem.toLowerCase().includes(searchTerm.toLowerCase())

		return curr.text?.toLowerCase().includes(searchTerm.toLowerCase()) ||
			children?.length > 0 ||
			curr.parents?.some(even) ||
			curr.type == 0
			? [...prev, { ...curr, children }]
			: prev
	}, [])
}
const filterByKind = (array: any, searchTerm: number) => {
	return array.reduce((prev: any, curr: any) => {
		const children = curr.children ? filterByKind(curr.children, searchTerm) : undefined
		const even = (elem: any) => {
			elem == searchTerm ? true : false
		}

		return curr.kind == searchTerm || children?.length > 0 || curr.parents?.some(even)
			? [...prev, { ...curr, children }]
			: prev
	}, [])
}
const filterByCommon = (array: any, searchTerm: boolean) => {
	return array.reduce((prev: any, curr: any) => {
		const children = curr.children ? filterByCommon(curr.children, searchTerm) : undefined
		// const even = (elem: any) => {
		// 	elem == searchTerm ? false : false
		// }

		return curr.common !== searchTerm || children?.length > 0
			? [...prev, { ...curr, children }]
			: prev
	}, [])
}

const data = computed(() => {
	return props.layout ? fields.filter((el) => el.type !== 0) : fields
})

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
	if (!!drag.dragNode && !!drag.dragNode.parents && drag.treeKey !== drag.dragNode.parents[1]) {
		drag.setTreeKey(drag.dragNode.parents[1])
	}
	drag.setCurrentDrag(null)
}
watch(query, () => {
	if (query.value.length > 1) {
		tree.value.expandAll()
	}
})
watch(query, () => {
	if (query.value.length > 1) {
		tree.value.expandAll()
	}
})
watch(
	() => drag.focus,
	() => {
		setTimeout(() => {
			tree.value.expandAll()
		}, 50)
	}
)

const myfields = computed(() => {
	// if (!!drag.treeKey && drag.focus == false) {
	// 	return filterByLabel(data.value, drag.treeKey)
	// }
	if (!!drag.treeKey && drag.focus == true) {
		return filterByKind(data.value, drag.kind)
	}
	return filterByCommon(data.value, !common.value)
})
const expanded = ref(['type'])
const common = ref(false)
const calcCommon = (e: any) => {
	if (e.common == true && common.value == false) {
		return false
	}
	if (e.common == true && common.value == true) {
		return true
	}
	if (e.common == undefined) {
		return true
	}
}
</script>

<template lang="pug">
div
	q-input.q-mx-md.q-mb-md( ref="input" dense v-model="query" clearable hide-bottom-space @clear="clearFilter")
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")
	.oper
		div(v-for="item in operators" :key="item.id" draggable="true" @dragstart="dragstart(item)" @dragend="dragend")
			q-icon(:name="item.icon" )
			span Оператор {{ item.text}}

	q-checkbox.q-mb-md(v-model="common" dense label="Показать общие свойства")
	q-tree(ref="tree"
		:nodes="myfields"
		dense
		node-key="id"
		label-key="text"
		:filter="query"
		v-model:expanded="expanded"
		icon="mdi-chevron-right" )
		template(v-slot:default-header="prop")
			q-icon(v-if="!prop.node.drag" name="mdi-folder-outline")
			.node(:draggable="prop.node.drag" @dragstart="dragstart(prop.node)" @dragend="dragend" :class="{grey : prop.node.drag}" )
				WordHighlighter(:query="query" ) {{ prop.node.text }}

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
.oper {
	font-size: 0.9rem;
	margin-bottom: 1rem;
	color: $primary;
	cursor: pointer;
	div {
		padding: 2px 6px;
		background: var(--bg-main);
	}
	span {
		margin-left: 0.5rem;
	}
}
</style>
