<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import { Draggable } from '@he-tree/vue'
import ConditionItem from '@/components/ConditionItem.vue'
import { useDrag } from '@/stores/drag'
import PreviewFormDialog from '@/components/PreviewFormDialog.vue'

const props = defineProps({
	preview: {
		type: Boolean,
		required: true,
		default: false,
	},
})

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
	if (tree.value.statsFlat.filter((item: Stat) => item.data.type == 1).length == 0) {
		drag.setTreeKey(null)
	}
}
const duble = (e: Stat) => {
	const temp = { ...e.data }
	tree.value.add(temp, e.parent)
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
			text2: 'Равно',
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
const emit = defineEmits(['closePreview'])

// const previewForm = ref(false)
// const showPreviewForm = () => {
// 	previewForm.value = true
// }
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
				@duble="duble(stat)"
				@kill="remove(stat)")
		
	PreviewFormDialog( v-model="props.preview" :tree="treeData" @close="emit('closePreview')")
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
	height: 58px;
	margin-bottom: 0.3rem;
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
