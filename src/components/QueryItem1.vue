<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue'
// import { Draggable } from '@he-tree/vue'
import draggable from 'vuedraggable'
// import ConditionItem from '@/components/ConditionItem.vue'
import { useDrag } from '@/stores/drag'
// import PreviewFormDialog from '@/components/PreviewFormDialog.vue'

const drag = useDrag()

const list = ref([
	{ id: 0, text: 'text' },
	{ id: 1, text: 'textlaks' },
])

const tree = ref()
const end = (ev: Event) => {
	ev.preventDefault()
}
const fuck = () => {
	list.value.push(drag.dragNode)
	console.log(drag.dragNode)
}
</script>

<template lang="pug">
.con
	draggable.sele(v-model="list"
		item-key="id"
		class="list-group"
		ghost-class="ghost"
		:ondragover="end"
		:ondrop="fuck")

		template(#item="{ element }" )
			.list-group-item {{ element.text }}

// PreviewFormDialog(v-model="props.preview" :tree="all" @close="emit('closePreview')" @find="emit('find')")
</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
}

:deep(.drag-placeholder) {
	height: 58px;
	margin-bottom: 0.3rem;
}
.sele {
	background: var(--bg-main);
	min-height: 48px;
	margin-top: 2rem;
	position: relative;

	&::before {
		content: 'Пусто. Перетащите сюда для выбора';
		font-size: 0.8rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		color: #999;
	}
}
</style>
