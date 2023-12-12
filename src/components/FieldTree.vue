<script setup lang="ts">
import { ref, computed } from 'vue'
import '@he-tree/vue/style/default.css'
import WordHighlighter from 'vue-word-highlighter'
import { fields } from '@/stores/tree'
import { useDrag } from '@/stores/drag'

const drag = useDrag()
const tree = ref()
const query = ref('')
const clearFilter = () => {
	query.value = ''
	tree.value.statsFlat.map((item: Stat) => (item.hidden = false))
}

const initial = (stat: any) => {
	stat.open = stat.data.open
	return stat
}
const dragstart = (e: Stat) => {
	drag.setCurrentDrag(e)
}
const dragend = () => {
	drag.setCurrentDrag(null)
}
</script>

const filter = ref('')
<template lang="pug">
div
	// .zg Библиотека
	q-input.q-mx-md.q-mb-md( ref="input" dense v-model="query" clearable hide-bottom-space @clear="clearFilter")
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")

	q-tree(
		:nodes="fields"
		node-key="text"
		label-key="text"
		icon="mdi-chevron-right"
		)
		template(v-slot:default-header="prop")
			.node(:draggable="prop.node.drag" @dragstart="dragstart(prop.node)" @dragend="dragend") {{ prop.node.text }}

</template>

<style scoped lang="scss">
.zg {
	font-size: 0.9rem;
	font-weight: 600;
}
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
</style>
