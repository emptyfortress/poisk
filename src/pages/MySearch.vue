<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTree from '@/components/BaseTree.vue'
import MyZaprosMain from '@/components/MyZaprosMain.vue'
import { mySearches } from '@/stores/tree'

const splitterModel = ref(25)

const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 180) + 'px;'
})
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag.q-mb-lg Мои поисковые запросы
		q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="hei" )
			template(v-slot:before)
				.blo
					q-scroll-area.list
						BaseTree(:treeData="mySearches")
			template(v-slot:after)
				.main
					q-scroll-area.list
						MyZaprosMain(:splitter="splitterModel"
							@maximize="splitterModel = 0"
							@reset="splitterModel = 30")
</template>

<style scoped lang="scss">
.blo {
	border: 1px solid var(--my-border-color);
	background: var(--bg-panel);
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
	margin-left: .5rem;
	padding: 1rem;

}
</style>
