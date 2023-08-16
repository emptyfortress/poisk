<script setup lang="ts">
import { ref, computed } from 'vue'
import { Draggable } from '@he-tree/vue'
import ConditionItem from '@/components/ConditionItem.vue'
import TreeMenu from '@/components/TreeMenu.vue'

const treeData = [
	{
		text: 'One', type: 0, typ: 0, children: [
			{ text: 'children', type: 1, children: [] },
			{ text: 'children', type: 1, children: [] },
			{ text: 'children', type: 1, children: [] },
			{ text: 'children', type: 1, children: [] },

		]
	},
	{ text: 'two', type: 0, typ: 1, children: [] },
]

const isDrop = (e: any) => {
	if (e.data.type == 0) return true
	else return false
}

const tree = ref()
const remove = ((e: Stat) => {
	tree.value.remove(e)
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
			ConditionItem( :stat="stat")
			TreeMenu(:stat="stat" @kill="remove")

</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
}

:deep(.drag-placeholder) {
	height: 60px;
}
</style>
