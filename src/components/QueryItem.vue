<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { Draggable } from '@he-tree/vue'
import ConditionItem from '@/components/ConditionItem.vue'
import { useDrag } from '@/stores/drag'

const drag = useDrag()
const treeData = reactive([
	{
		text1: '',
		text2: '',
		text3: '',
		type: 10,
		drop: false,
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
			parent: drag.dragNode.parent,
			man: drag.dragNode.man,
			date: drag.dragNode.date,
			ruk: drag.dragNode.ruk,
			children: [],
		}
	}
}
// additional code for top node
const typ = ref(false)
const next = () => {
	typ.value = !typ.value
}
const calcLength = computed(() => {
	if (tree.value && tree.value.statsFlat.length == 1) {
		return true
	}
	return false
})
</script>

<template lang="pug">
.con
	.zero.q-pl-lg
		.icon(:class="{ or: typ === true }" @click.stop="next")
		.q-ml-md Оператор
		.text-weight-bold.q-ml-sm {{ typ == true ? 'ИЛИ' : 'И' }}

	Draggable.q-ml-lg(
		v-model="treeData"
		ref="tree"
		:indent="40"
		:eachDroppable="isDrop"
		:eachDraggable="isDrag"
		:onExternalDragOver="()=> true"
		:externalDataHandler="externalDataHandler"
		:watermark="false")
		template(#default="{ node, stat }")
			.empty(v-if="calcLength") Перетащите сюда узел из дерева видов справа
			ConditionItem(:stat="stat"
				@clear="clear(stat)"
				@kill="remove(stat)")

</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
}
.zero {
	display: flex;
	align-items: center;
	background: transparent;
	padding: 0.5rem;
	margin-bottom: 4px;
	background: var(--bg-head);
	border: 1px solid #ccc;
	border-radius: 4px;

	&:hover {
		border-color: $primary;
	}
}

:deep(.drag-placeholder) {
	height: 60px;
}
.trig {
	font-size: 1.3rem;
	margin-right: 0.5rem;
	transition: 0.2s ease all;

	&.closed {
		transform: rotate(-90deg);
	}
}
.icon {
	width: 49px;
	height: 36px;
	background-image: url('@/assets/img/andor.svg');
	transition: 0.2s ease-out all;
	background-position: top left;
	cursor: pointer;

	&.or {
		background-position: bottom left;
	}
}
.empty {
	text-align: center;
	color: #aaa;
	border: 1px solid #ccc;
	padding: 1rem;
	border-radius: 4px;
}
</style>
