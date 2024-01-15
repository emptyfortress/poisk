<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'

const list = ref([
	{ name: 'one', id: 0 },
	{ name: 'two', id: 1 },
])
</script>

<template lang="pug">
draggable(:list="list" class="list-group" group="a" item-key="name")
	template(#item="{ element }")
		.list-group-item {{ element.name }}

	template(#header)
		.list-group-item
			q-btn(unelevated color="primary" label="Отмена" @click="action") 
</template>

<style scoped lang="scss"></style>
