<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTree from '@/components/BaseTree.vue'

const splitterModel = ref(30)
const insideModel = ref(50)

const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 170) + 'px;'
})
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag.q-mb-lg Настройка поисков и представлений
		q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="hei" )
			template(v-slot:before)
				q-scroll-area.list
					BaseTree
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
