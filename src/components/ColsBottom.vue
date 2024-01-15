<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { datasource, options } from '@/stores/twolist'
import FieldTree from '@/components/FieldTree.vue'

const list = ref([...datasource])
</script>

<template lang="pug">
q-scroll-area(style="height: 50vh;")
	.main
		div
			.text-weight-bold Колонки:
			draggable(:list="list"
				item-key="id"
				class="list-group"
				ghost-class="ghost"
				group="data" )
				template(#item="{ element }")
					.list-group-item
						.dragg
						q-checkbox(v-model="element.check" dense :label="element.label")
		div
			.text-weight-bold Доступные поля:
			FieldTree(layout)
</template>

<style scoped lang="scss">
.main {
	width: 700px;
	margin: 0 auto;
	display: grid;
	grid-template-columns: repeat(2, auto);
	justify-items: center;
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
	background: #fff;
	padding: 6px 1rem 6px 1.5rem;
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
	width: 15px;
	height: 100%;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAChJREFUGFc1ikEOwDAAguD/j2ax7fSiBMUgE1xlOY/uemCaTRjrV/kAE0wHDsCeQbcAAAAASUVORK5CYII=)
		repeat;
}
.ghost {
	opacity: 0.5;
}
</style>
