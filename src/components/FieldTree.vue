<script setup lang="ts">
import { ref, computed } from 'vue'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import WordHighlighter from 'vue-word-highlighter'
import { fields } from '@/stores/tree'

const list = ref([])
const tree = ref()
const toggle = (stat: any) => {
	stat.open = !stat.open
}
const query = ref('')
const clearFilter = () => {
	query.value = ''
	tree.value.statsFlat.map((item: Stat) => (item.hidden = false))
}

const initial = (stat: any) => {
	stat.open = stat.data.open
	return stat
}
</script>

const filter = ref('')
<template lang="pug">
div
	// .zg Библиотека
	q-input(ref="input" dense v-model="query" clearable hide-bottom-space @clear="clearFilter").q-mx-md.q-mb-md
		template(v-slot:prepend)
			q-icon(name="mdi-magnify")

	Draggable(v-model="fields"
		ref="tree"
		:indent="30"
		:defaultOpen="false"
		:statHandler="initial"
		treeLine
		:watermark="false")
		template(#default="{ node, stat }")
			.node(@click="toggle(stat)" :open="node.open" :class="{bold : stat.children.length > 0}")
				q-icon.mtl-mr(name="mdi-chevron-down" v-if="stat.children.length" :class="{ 'closed': !stat.open }").trig
				// q-icon(name="mdi-folder-outline" v-if="stat.data.type === 0").fold
				WordHighlighter(:query="query") {{ node.text }}
</template>

<style scoped lang="scss">
.zg {
	font-size: 0.9rem;
	font-weight: 600;
}
.node {
	padding: 4px 8px;
	cursor: pointer;
	font-size: 0.9rem;

	&.selected {
		background: #b1ddfc;
		color: #1565c0;

		&:hover {
			background: #b1ddfc;
		}
	}

	&:hover {
		background: hsla(0, 0%, 91%);
	}
}
.quick .q-field--dense .q-field__control,
.q-field--dense .q-field__marginal {
	height: 28px !important;
}

.fold {
	font-size: 1.3rem;
	margin-right: 0.5rem;
}

.trig {
	font-size: 1.3rem;
	margin-right: 0.5rem;
	transition: 0.2s ease all;

	&.closed {
		transform: rotate(-90deg);
	}
}
.bold {
	font-weight: 600;
}
</style>
