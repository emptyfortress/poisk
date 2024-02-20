<script setup lang="ts">
const props = defineProps<{
	list: String[]
}>()
</script>

<template lang="pug">
.list
	.node(v-for="item in props.list") Краткое описание
</template>

<style scoped lang="scss">
.list {
	margin-bottom: 1rem;
}
.node {
	padding: 0.5rem 1rem;
	border: 1px solid #ccc;
	border-radius: 0.25rem;
	background: var(--bg-head);
	margin-bottom: 0.5rem;
}
</style>
