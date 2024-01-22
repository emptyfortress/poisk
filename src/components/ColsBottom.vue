<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { datasource, options } from '@/stores/twolist'
import FieldTree from '@/components/FieldTree.vue'

const list = ref([...datasource])
</script>

<template lang="pug">
q-scroll-area(style="height: 40vh;")
	.main
		.text-weight-bold Колонки:
		draggable(:list="list"
			item-key="id"
			class="list-group"
			ghost-class="ghost"
			group="data")
			template(#item="{ element }")
				.list-group-item
					.dragg
					q-checkbox.q-mr-lg(v-model="element.check" dense :label="element.label")
					q-btn.right(flat round icon="mdi-close" dense size="xs") 

		.text-weight-bold Доступные поля:
		FieldTree(layout )
</template>

<style scoped lang="scss">
.main {
	margin: 0 auto;
	display: grid;
	grid-template-columns: auto 1fr auto 1fr;
	justify-items: start;
	align-items: stretch;
	column-gap: 1rem;
	row-gap: 0.5rem;
	font-size: 0.9rem;
}
.list-group {
	display: flex;
	flex-direction: column;
	cursor: move;
}
.list-group-item {
	width: 100%;
	display: flex;
	justify-content: space-between;
	background: #fff;
	padding: 6px 6px 6px 16px;
	margin-bottom: -1px;
	position: relative;
	border: 1px solid #dedede;
	font-size: 0.9rem;
}
.filt {
	font-size: 0.9rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
}
.drag {
	display: grid;
	grid-template-columns: 230px 1fr;
	gap: 2rem;
	// max-height: 450px;
	// background: pink;
}
.dragg {
	position: absolute;
	top: 0;
	left: 0;
	width: 10px;
	height: 100%;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAChJREFUGFc1ikEOwDAAguD/j2ax7fSiBMUgE1xlOY/uemCaTRjrV/kAE0wHDsCeQbcAAAAASUVORK5CYII=)
		repeat;
}
.ghost {
	opacity: 0.5;
}
.right {
	// justify-self: flex-end;
}
</style>
