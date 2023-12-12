<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { Draggable } from '@he-tree/vue'
import ConditionItem from '@/components/ConditionItem.vue'
import TreeMenu from '@/components/TreeMenu.vue'
import { useDrag } from '@/stores/drag'

const drag = useDrag()
const treeData = reactive([
	{
		text1: '',
		text2: '',
		text3: '',
		type: 0,
		typ: 0,
		drop: true,
		drag: false,
		children: [
			{
				text1: '',
				text2: '',
				text3: '',
				type: 1,
				drop: false,
				drag: true,
				attribute: false,
				children: [],
			},
			// { text1: '', text2: '', text3: '', type: 1, drop: false, attribute: false, children: [] },
		],
	},
])

const isDrop = (e: any) => {
	if (e.data.drop) return true
	else return false
}
const isDrag = (e: any) => {
	if (e.data.drag) return true
	else return false
}

const tree = ref()

const remove = (e: Stat) => {
	tree.value.remove(e)
}
const addOperator = (e: Stat) => {
	if (e.children.length > 0) {
		e.open = true
	}
	tree.value.add(
		{ text: 'operator', text1: '', text2: '', text3: '', type: 0, typ: false, drop: true },
		e
	)
}
const addCondition = (e: Stat) => {
	if (e.children.length > 0) {
		e.open = true
	}
	tree.value.add(
		{ text: '', text1: '', text2: '', text3: '', type: 1, drop: false, attribute: false },
		e
	)
}
interface Fuck {
	stat: Stat
	text: any
}
const addColl = ({ stat, text }: Fuck) => {
	if (stat.children.length > 0) {
		stat.open = true
	} else if (
		stat.children.length == 0 &&
		(text.value == 'Отправитель' || text.value == 'Получатели')
	) {
		tree.value.add({ text1: '', text2: '', text3: '', type: 1, attribute: false }, stat)
	} else if (stat.children.length == 0) {
		tree.value.add({ text1: '', text2: '', text3: '', type: 1, attribute: false }, stat)
	}
}
const remColl = (e: Stat) => {
	e.open = false
}
const disable = (e: Stat) => {
	e.data.restrict = true
}
const clear = (e: Stat) => {
	e.data.text1 = ''
	e.data.text2 = ''
	e.data.text3 = ''
}

const externalDataHandler = () => {
	return {
		text1: '',
		text2: '',
		text3: '',
		type: drag.dragNode.type,
		typ: drag.dragNode.typ,
		selected: false,
		drag: drag.dragNode.drag,
		drop: drag.dragNode.drop,
		children: [],
	}
}
</script>

<template lang="pug">
.con
	Draggable(
		v-model="treeData"
		ref="tree"
		:indent="40"
		:eachDroppable="isDrop"
		:eachDraggable="isDrag"
		:onExternalDragOver="()=> true"
		:externalDataHandler="externalDataHandler"
		:watermark="false")
		template(#default="{ node, stat }")
			ConditionItem(:stat="stat"
				@addCollection="addColl"
				@removeCollection="remColl(stat)"
				@clear="clear(stat)"
				@addOp="addOperator(stat)"
				@addCond="addCondition(stat)"
				@kill="remove(stat)" )
			// TreeMenu(:stat="stat" @kill="remove" @addOp="addOperator" @addCond="addCondition" @disable="disable" )

</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
}

:deep(.drag-placeholder) {
	height: 60px;
}
</style>
