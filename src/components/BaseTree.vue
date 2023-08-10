<script setup lang="ts">
import { Draggable } from '@he-tree/vue'
import '@he-tree/vue/style/default.css'

const treeData = [
	{
		text: 'Projects',
		children: [
			{
				text: 'Frontend',
				children: [
					{
						text: 'Vue',
						children: [
							{
								text: 'Nuxt',
							},
						],
					},
					{
						text: 'React',
						children: [
							{
								text: 'Next',
							},
						],
					},
					{
						text: 'Angular',
					},
				],
			},
			{
				text: 'Backend',
			},
		],
	},
	{ text: 'Photos' },
	{ text: 'Videos' },
]
</script>

<template lang="pug">
Draggable(v-model="treeData" trigger-class="node")
	template(#default="{ node, stat }")
		.node
			span(v-if="stat.children.length" @click="stat.open = !stat.open") {{ stat.open ? "-" : "+" }}
			span {{ node.text }}
</template>

<style scoped lang="scss">
.node {
	background: var(--bg-panel);
}
</style>
