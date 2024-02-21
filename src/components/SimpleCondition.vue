<script setup lang="ts">
const props = defineProps<{
	list: any
}>()
const emit = defineEmits(['remove'])

const remove = (index: number) => {
	emit('remove', index)
}
</script>

<template lang="pug">
.list
	.node(v-for="(item, index) in props.list")
		div(v-for="el in item.keys") {{el.text}}
		div {{item.cond}}
		div {{item.query}}
		q-space
		q-btn(flat round dense icon="mdi-close" @click="remove(index)") 
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
	display: flex;
	align-items: center;
	gap: 1rem;
	.q-btn {
	}
}
</style>
