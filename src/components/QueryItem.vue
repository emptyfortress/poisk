<script setup lang="ts">
import { ref, computed } from 'vue'
import { Draggable } from '@he-tree/vue'
import ConditionItem from '@/components/ConditionItem.vue'
import TreeMenu from '@/components/TreeMenu.vue'

const treeData = [
	{
		text: 'One', type: 0, typ: 0, children: [
			{ text: '', text1: '', text2: '', type: 1, children: [] },
		]
	},
]

const isDrop = (e: any) => {
	if (e.data.type == 0) return true
	else return false
}

const tree = ref()
const remove = ((e: Stat) => {
	tree.value.remove(e)
})
const addOperator = ((e: Stat) => {
	tree.value.add({text: 'operator', type: 0, typ: 0}, e)
})
const addCondition = ((e: Stat) => {
	if (e.data.type === 0) {
		tree.value.add({text: '', type: 1 }, e)
	} else {
		tree.value.add({text: '', type: 1 }, e.parent)
	}
})
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
			component(:is="ConditionItem" :stat="stat")
			TreeMenu(:stat="stat" @kill="remove" @addOp="addOperator" @addCond="addCondition" )

</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
}

:deep(.drag-placeholder) {
	height: 60px;
}
</style>
