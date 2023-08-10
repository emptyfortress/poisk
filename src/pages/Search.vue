<script setup lang="ts">
import { ref, computed } from 'vue'

const splitterModel = ref(30)
const insideModel = ref(50)

const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 170) + 'px;'
})
const simple = [
	{
		label: 'Satisfied customers (with avatar)',
		avatar: 'https://cdn.quasar.dev/img/boy-avatar.png',
		children: [
			{
				label: 'Good food (with icon)',
				icon: 'restaurant_menu',
				children: [
					{ label: 'Quality ingredients' },
					{ label: 'Good recipe' }
				]
			},
			{
				label: 'Good service (disabled node with icon)',
				icon: 'room_service',
				disabled: true,
				children: [
					{ label: 'Prompt attention' },
					{ label: 'Professional waiter' }
				]
			},
			{
				label: 'Pleasant surroundings (with icon)',
				icon: 'photo',
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
q-page(padding)
	.container
		.zag.q-mb-lg Настройка поисков и представлений
		q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="hei" )
			template(v-slot:before)
				q-scroll-area.list
					p laksldjal alsj 
					// qdraggabletree(:nodes="simple")
			template(v-slot:after)
				q-splitter(v-model="insideModel" horizontal)
					template(v-slot:before)
						.main
							p laksldjal alsj 
					template(v-slot:after)
						.q-ml-sm.main
							p laksldjal alsj 
</template>

<style scoped lang="scss">
.list {
	border: 1px solid var(--my-border-color);
	background: var(--bg-panel);
	padding: 0.5rem;
	margin-right: 0.5rem;
	height: calc(100vh - 170px);
}

.main {
	border: 1px solid var(--my-border-color);
	margin-left: 0.5rem;
	background: var(--bg-card);
	padding: 1rem;
	padding-top: 0.25rem;
}
</style>
