<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTree from '@/components/BaseTree.vue'
import ZaprosMain from '@/components/ZaprosMain.vue'
import FieldTree from '@/components/FieldTree.vue'
import { searches } from '@/stores/tree'

const splitterModel = ref(0)
const splitterModel1 = ref(80)

const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 180) + 'px;'
})
const tr = ref(true)
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag.q-mb-lg Настройка поисковых запросов
		q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="hei" )
			template(v-slot:before)
				.blo
					q-scroll-area.list
						BaseTree(:treeData="searches" reset)
			template(v-slot:after)
				q-splitter(v-model="splitterModel1" :limits="[0, 100]" :style="hei" )
					template(v-slot:before)
						.main
							q-scroll-area.list
								ZaprosMain(:splitter="splitterModel"
									@maximize="splitterModel = 0"
									@reset="splitterModel = 30")
					template(v-slot:after)
						.tree
							q-scroll-area.list
								FieldTree()

</template>

<style scoped lang="scss">
.blo {
	margin-right: 0.5rem;
	height: calc(100vh - 180px);
}

.list {
	height: 100%;
}

.main {
	border: 1px solid var(--my-border-color);
	background: var(--bg-panel);
	height: 100%;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	padding: 1rem;
}
.tree {
	height: 100%;
	margin-left: 0.5rem;
	padding-top: 0.4rem;
}
</style>
