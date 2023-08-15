<script setup lang="ts">
import { Draggable } from '@he-tree/vue'

const treeData = [
	{ text: 'One', type: 0, children: [
		{ text: 'chilren', type: 1, children: [] },

	] },
]

const toggle = (stat: any) => {
	stat.open = !stat.open
}
</script>

<template lang="pug">
.con
	Draggable(
		v-model="treeData"
		ref="tree"
		:indent="30"
		:watermark="false")

		template(#default="{ node, stat }")
			.node(@click="select(stat)" :class="{ 'oper': stat.data.type === 0 }")
				div
					q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
					q-icon(name="mdi-folder-outline" v-if="stat.children.length").fold
					span {{ node.text }}

</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
}
.oper {
	background: #ccc;
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
