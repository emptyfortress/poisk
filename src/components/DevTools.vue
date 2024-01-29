<script setup lang="ts">
import { ref, computed } from 'vue'
import BaseTree from '@/components/BaseTree.vue'
import ColumnSetup from '@/components/ColumnSetup.vue'
import { views } from '@/stores/tree'

const props = defineProps({
	height: {
		type: Number,
		default: 100,
	},
})
const splitterModel = ref(20)
const style = computed(() => {
	return 'height: ' + (props.height - 32) + 'px'
})
</script>

<template lang="pug">
.main
	q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="style" )
		template(v-slot:before)
			q-scroll-area.list
				BaseTree(:treeData="views" reset)
		template(v-slot:after)
			q-scroll-area.list.main
				ColumnSetup

</template>

<style scoped lang="scss">
.main {
	padding: 1rem;
}
.blo {
	border: 1px solid var(--my-border-color);
	background: var(--bg-panel);
	margin-right: 0.5rem;
	height: 100%;

	&.edit {
		border-color: red;
	}
}
.list {
	height: 100%;
}
</style>
