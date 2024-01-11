<script setup lang="ts">
import { ref, computed } from 'vue'
import SetupPreviewDialog from '@/components/SetupPreviewDialog.vue'

const dialog = ref(true)
</script>

<template lang="pug">
q-page(padding)
	.container
		.zag.q-mb-lg Я - автор
		q-btn(unelevated color="primary" icon="mdi-tune-vertical-variant" label="Настроить" @click="dialog = true") 


		SetupPreviewDialog(v-model="dialog")
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
	// height: 100%;
	margin-left: 0.5rem;
	margin-right: 0.5rem;
	// padding: 1rem;
}
.tree {
	height: 100%;
	margin-left: 0.5rem;
	padding-top: 0.4rem;
}
</style>
