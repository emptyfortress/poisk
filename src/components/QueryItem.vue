<script setup lang="ts">
import { ref, computed } from 'vue'
import { Draggable } from '@he-tree/vue'
import ConditionItem from '@/components/ConditionItem.vue'

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
const pole = ref('test')
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
			ConditionItem(:stat="stat" )

</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
}

:deep(.drag-placeholder) {
	height: 60px;
}
</style>
