<script setup lang="ts">
import { ref, computed, watch, watchEffect } from 'vue'
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'
import { searches, views } from '@/stores/tree'
import { useStore } from '@/stores/store'
import WordHighlighter from "vue-word-highlighter"
import { useRoute } from 'vue-router'
import DirMenu from '@/components/DirMenu.vue'

const store = useStore()
const query = ref('')
const route = useRoute()
const treeData = computed({
	get() {
		if (route.name === 'search') {
			return searches
		} else if (route.name === 'layout') {
			return views
		}
	},
	set(val) { }
})

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
watchEffect(() => {
	if (store.del === true) {
		tree.value.remove(store.currentNode)
		store.setCurrentNode(null)
		store.del = false
	}
	if (store.dub === true) {
		let temp = {
			text: store.currentNode!.data.text + '-copy'
		}
		tree.value.add(temp, store.currentNode!.parent)
		let one = tree.value.getStat(temp)
		select(one)
		store.toggleDub()
	}
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

const add = ((e: Stat) => {
	if (e.data.type === 0) {
		tree.value.add({ text: 'New item', hidden: false, type: 1 }, e)
	} else {
		tree.value.add({ text: 'New item', hidden: false, type: 1 }, e.parent)
	}
})
const addFolder = ((e: Stat) => {
	if (e.data.type === 0) {
		tree.value.add({ text: 'New folder', hidden: false, type: 0 }, e)
	} else {
		tree.value.add({ text: 'New folder', hidden: false, type: 0 }, e.parent)
	}
})
const remove = ((e: Stat) => {
	tree.value.remove(e)
	if (e === store.currentNode) {
		store.setCurrentNode(null)
	}
})

const isDrop = (e: any) => {
	if (e.data.type == 0) return true
	else return false
}

const toggleEdit = (() => {
	store.toggleEdit()
	drag.value = !drag.value
})
</script>

<template lang="pug">
div
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
		:eachDroppable="isDrop"
		:watermark="false")
		template(#default="{ node, stat }")
			.node(@click="select(stat)" :class="{ 'selected': stat.data.selected }")
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
				q-icon(name="mdi-folder-outline" v-if="stat.data.type === 0").fold
				WordHighlighter(:query="query") {{ node.text }}
				DirMenu(@kill="remove(stat)" @add="add(stat)" @addFolder="addFolder(stat)")

</template>

<style scoped lang="scss">
.node {
	padding: 4px 8px;
	cursor: pointer;

	&.selected {
		background: #b1ddfc;
		color: #1565c0;

		&:hover { background: #b1ddfc; }
	}

	&:hover { background: hsla(0, 0%, 91%); }
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

</style>
