<script setup lang="ts">
import { ref, computed } from 'vue'
import { Draggable } from '@he-tree/vue'
import ConditionItem from '@/components/ConditionItem.vue'
import TreeMenu from '@/components/TreeMenu.vue'

const treeData = [
	{
		text: 'One',
		type: 0,
		typ: 0,
		drop: true,
		children: [{ text: '', text1: '', text2: '', type: 1, drop: false, children: [] }],
	},
]

const isDrop = (e: any) => {
	if (e.data.drop) return true
	else return false
}

const tree = ref()
const remove = (e: Stat) => {
	tree.value.remove(e)
}
const addOperator = (e: Stat) => {
	tree.value.add({ text: 'operator', type: 0, typ: 0, drop: true }, e)
}
const addCondition = (e: Stat) => {
	if (e.data.type === 0) {
		tree.value.add({ text: '', type: 1, drop: false }, e)
	} else {
		tree.value.add({ text: '', type: 1, drop: false }, e.parent)
	}
}
const addColl = ({ stat, text }) => {
	if (text.value == 'Отправитель' || text.value == 'Получатели') {
		tree.value.add({ text: 'b', type: 1, drop: false }, stat)
	} else tree.value.add({ text: 'a', type: 1, drop: false }, stat)
}
const disable = (e: Stat) => {
	e.data.restrict = true
}
</script>

<template lang="pug">
.con
	Draggable(
		v-model="treeData"
		ref="tree"
		:indent="40"
		:eachDroppable="isDrop"
		:watermark="false")
		template(#default="{ node, stat }")
			ConditionItem(:stat="stat" @addCollection="addColl")
			TreeMenu(:stat="stat" @kill="remove" @addOp="addOperator" @addCond="addCondition" @disable="disable" )

</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
}

:deep(.drag-placeholder) {
	height: 60px;
}
</style>
