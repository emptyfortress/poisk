<script setup lang="ts">
import { ref } from 'vue'
import { Draggable } from '@he-tree/vue'

const treeData = [
	{ text: 'One', type: 0, typ: 0, children: [
		{ text: 'children', type: 1, children: [] },
		{ text: 'children', type: 1, children: [] },
		{ text: 'children', type: 1, children: [] },
		{ text: 'children', type: 1, children: [] },

	] },
]

const toggle = (stat: any) => {
	stat.open = !stat.open
}

const next = (e: any) => {
	if (e.typ === 1) {
		e.typ = 0
	} else e.typ = e.typ + 1
}
const drag = ref(false)
</script>

<template lang="pug">
.con
	Draggable(
		v-model="treeData"
		ref="tree"
		:indent="40"
		:watermark="false")
		template(#default="{ node, stat }")
			.zero(v-if="stat.data.type === 0")
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
				.icon(:class="{or : node.typ === 1}" @click.stop="next(node)")
				.q-ml-md Оператор
				.text-weight-bold.q-ml-sm {{node.typ === 1 ? 'ИЛИ' : 'И'}}
			.one(v-if="stat.data.type === 1" )
				q-icon(name="mdi-chevron-down" v-if="stat.children.length" @click.stop="toggle(stat)" :class="{ 'closed': !stat.open }").trig
				span one

</template>

<style scoped lang="scss">
.con {
	margin: 1rem;
}
.node {
	background: var(--bg-panel);
	cursor: pointer;
	img {
		width: 42px;
		margin-right: 1rem;
	}
}
.zero {
	display: flex;
	align-items: center;
	background: transparent;
	padding: .5rem;
	&:hover {
		background: var(--bg-main);
	}
}
.one {
	display: flex;
	align-items: center;
	background: var(--bg-panel);
	height: 48px;
	padding: .8rem;
	border: 1px solid var(--bg-head);
	border-radius: 4px;
	margin-bottom: 2px;
	&:hover {
		border-color: $primary;
	}
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
</style>
