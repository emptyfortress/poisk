<script setup lang="ts">
import { ref, computed } from 'vue'
import GridPreview from '@/components/GridPreview.vue'
import DevTools from '@/components/DevTools.vue'
import { useElementSize } from '@vueuse/core'
import { useStore } from '@/stores/store'

const splitterModel = ref(30)

const store = useStore()
const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 160) + 'px;'
})
const showDev = ref(false)

const toggle = () => {
	showDev.value = !showDev.value
}
const el = ref(null)
const { height } = useElementSize(el)
</script>

<template lang="pug">
.cont
	.row.justify-between.items-center.q-py-md.q-px-lg
		.zag.q-mb-md Представление 1
		q-btn(unelevated color="primary" icon="mdi-tune-vertical-variant" label="Настроить" @click="toggle" size="sm")

	template(v-if="showDev")
		q-splitter(v-model="splitterModel" :limits="[0, Infinity]" :style="hei" horizontal)
			template(v-slot:before)
				GridPreview
			template(v-slot:after)
				.after(ref="el")
					DevTools(:height="height")

	template(v-else)
		GridPreview
</template>

<style scoped lang="scss">
.cont {
	height: calc(100vh - 90px);
}
.after {
	background: #e5e5e5;
	height: 100%;
}

:deep(.q-splitter--horizontal > .q-splitter__separator) {
	height: 10px;
	background: #bbb;
}
// :deep(.q-splitter--horizontal > .q-splitter__separator:hover, .q-splitter__separator:active) {
// 	border-top: none;
// }
</style>
