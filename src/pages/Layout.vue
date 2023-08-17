<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import BaseTree from '@/components/BaseTree.vue'
import ViewMain from '@/components/ViewMain.vue'

const store = useStore()

const splitterModel = ref(30)
const hei = computed(() => {
	return 'height: ' + (window.innerHeight - 180) + 'px;'
})
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag.q-mb-lg Настройка представлений
		q-splitter(v-model="splitterModel" :limits="[0, 100]" :style="hei" )
			template(v-slot:before)
				.blo(:class="{ edit: store.editMode }")
					q-scroll-area.list
						BaseTree
			template(v-slot:after)
				.main
					q-scroll-area.list
						ViewMain(:splitter="splitterModel"
							@maximize="splitterModel = 0"
							@reset="splitterModel = 30")
</template>

<style scoped lang="scss">
.blo {
	border: 1px solid var(--my-border-color);
	background: var(--bg-panel);
	margin-right: 0.5rem;
	height: calc(100vh - 180px);

	&.edit {
		border-color: red;
	}
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
