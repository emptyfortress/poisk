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
		children: [],
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
const clear = (e: Stat) => {
	e.data.text2 = ''
	e.data.text3 = ''
}

const externalDataHandler = () => {
	if (!!drag.dragNode) {
		return {
			text: drag.dragNode.text,
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
				@clear="clear(stat)"
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
