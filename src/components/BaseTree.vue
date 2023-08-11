<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { treenodes } from '@/stores/tree'
import { useStore } from '@/stores/store'

const store = useStore()
const query = ref('')
const treeData = reactive(treenodes)

const clearFilter = (() => {
	query.value = ''
	tree.value.statsFlat.map((item: Stat) => item.hidden = false)
})

watch(query, (newValue) => {
	if (newValue !== '') {
		tree.value.statsFlat.map((stat: Stat) => {
			stat.hidden = true
			if (stat.data.text.toLowerCase().includes(query.value.toLowerCase())) {
				stat.hidden = false
				for (const parentStat of tree.value.iterateParent(stat, { withSelf: false })) {
					parentStat.hidden = false
				}
			}
		})
	} else clearFilter()

})

const tree = ref()
const select = ((n: Stat) => {
	tree.value.statsFlat.map((item: Stat) => (item.data.selected = false))
	n.data.selected = true
	store.setCurrentNode(n)
})

</script>

<template lang="pug">
q-form.quick
	q-card-section.q-pt-xs
		q-input(dense
			v-model="query"
			autofocus
			clearable
			@clear="clearFilter"
			placeholder="фильтр"
			).query
			template(v-slot:prepend)
				q-icon(name="mdi-magnify")
Draggable(
	v-model="treeData"
	ref="tree"
	:watermark="false")
	template(#default="{ node, stat }")
		.node(@click="select(stat)" :class="{ 'selected': stat.data.selected }")
			span(v-if="stat.children.length" @click="stat.open = !stat.open") {{ stat.open ? "-" : "+" }}
			span {{ node.text }}
			span {{ node.fuck }}
</template>

<style scoped lang="scss">
.node {
	background: var(--bg-panel);
	padding: 4px 8px;
	cursor: pointer;

	&.selected {
		background: #b1ddfc;
		color: #1565c0;
	}
}

.quick .q-field--dense .q-field__control,
.q-field--dense .q-field__marginal {
	height: 28px !important;
}
</style>
