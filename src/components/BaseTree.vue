<script setup lang="ts">
const nodes = [
	{
		label: 'Satisfied customers (with avatar)',
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
		children: [
			{
				label: 'Good food (with icon)',
				icon: 'mdi-silverware',
				children: [
					{ label: 'Quality ingredients' },
					{ label: 'Good recipe' }
				]
			},
			{
				label: 'Good service (disabled node with icon)',
				icon: 'mdi-silverware',
				disabled: true,
				children: [
					{ label: 'Prompt attention' },
					{ label: 'Professional waiter' }
				]
			},
			{
				label: 'Pleasant surroundings (with icon)',
				icon: 'mdi-silverware',
				children: [
					{
						label: 'Happy atmosphere (with image)',
						img: 'https://cdn.quasar.dev/img/logo_calendar_128px.png'
					},
					{ label: 'Good table presentation' },
					{ label: 'Pleasing decor' }
				]
			}
		]
	}
]
</script>

<template lang="pug">
q-tree(:nodes="nodes" node-key="label" default-expand-all)
</template>

<style scoped lang="scss"></style>
