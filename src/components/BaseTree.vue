<script setup lang="ts">
import { ref, reactive, watch } from 'vue'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { treenodes } from '@/stores/tree'
import { useStore } from '@/stores/store'
import WordHighlighter from "vue-word-highlighter"

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

const toggle = (stat: any) => {
	stat.open = !stat.open
}

const add = (() => {
	tree.value.add({ text: 'Новый поиск', hidden: false }, store.currentNode)
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
	:indent="30"
	:watermark="false")
	template(#default="{ node, stat }")
		.node(@click="select(stat)" :class="{ 'selected': stat.data.selected }")
			div
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
				q-icon(name="mdi-folder-outline" v-if="stat.children.length").fold
				WordHighlighter(:query="query") {{ node.text }}

			.btn(v-if="store.editMode")
				q-btn(flat round icon="mdi-pencil" size="7px")
					q-popup-edit(v-model="node.text" auto-save v-slot="scope")
						q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set").pop
				q-btn(flat round icon="mdi-close" size="7px")


q-btn(round icon="mdi-plus" color="primary"  @click="add").add
q-btn(flat round icon="mdi-pencil" @click="store.toggleEdit" size="sm").edit
</template>

<style scoped lang="scss">
.node {
	background: var(--bg-panel);
	padding: 4px 8px;
	cursor: pointer;
	display: flex;
	justify-content: space-between;
	// align-items: center;

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

.add {
	position: absolute;
	bottom: .5rem;
	right: .5rem;
}

.edit {
	position: absolute;
	left: .5rem;
	bottom: .5rem;
}
</style>
