<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTree from '@/components/BaseTree.vue'
import ZaprosMain from '@/components/ZaprosMain.vue'

const splitterModel = ref(25)

const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 180) + 'px;'
})
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag.q-mb-lg Настройка поисковых запросов
		q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="hei" )
			template(v-slot:before)
				q-scroll-area.list
					BaseTree
			template(v-slot:after)
				.main
					ZaprosMain(:splitter="splitterModel"
						@maximize="splitterModel = 0"
						@reset="splitterModel = 30")
</template>

<style scoped lang="scss">

.list {
	height: calc(100vh - 180px);
	margin-right: 1rem;
}

.main {
	margin-left: .5rem;
	height: calc(100vh - 180px);
}
</style>
