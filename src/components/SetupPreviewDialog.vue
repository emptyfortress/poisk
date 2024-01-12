<script setup lang="ts">
import { ref, reactive, onMounted, computed } from 'vue'
import draggable from 'vuedraggable'
import { datasource, options } from '@/stores/twolist'
import FieldTree from '@/components/FieldTree.vue'

const pred = ref('Я - автор')
const modelValue = defineModel()

const close = () => {
	modelValue.value = false
}
const vis = ref(false)

const list = ref([...datasource])
</script>

<template lang="pug">
q-dialog(v-model="modelValue" persistent)
	q-card(style="width: 700px; max-width: 80vw; cursor: default; max-height: 70vh;")
			q-card-section.q-pa-sm(horizontal)
				.col
					.text-h6.q-ml-lg Настройка таблицы
				.col-auto
					q-btn(icon="mdi-close" flat round dense v-close-popup)
			q-separator
			q-card-section
				q-scroll-area(style="height: 50vh;")
					q-select(v-model="pred" :options="options" label="Название" dense)
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
			q-card-section
				q-card-actions(align="right")
					q-btn(flat color="primary" label="Отмена" @click="close") 
					q-btn(unelevated color="primary" label="Применить" @click="close") 

</template>

<style scoped lang="scss">
.avail {
	height: 400px;
}
.q-select {
	width: 260px;
}
.main {
	margin-top: 2rem;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
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

.filt {
	font-size: 0.9rem;
	font-weight: 600;
	margin-bottom: 0.5rem;
}

.drag {
	display: grid;
	grid-template-columns: 230px 1fr;
	gap: 2rem;
}

.list-group-item {
	background: #fff;
	padding: 6px 1rem 6px 1.5rem;
	margin-bottom: -1px;
	position: relative;
	border: 1px solid #dedede;
	font-size: 0.9rem;

	&.big {
		// display: flex;
		display: grid;
		grid-template-columns: 180px 1fr auto;
		align-items: center;
		gap: 0.5rem;
		// background: transparent;
		// padding: 1rem 1rem 1rem 1.5rem;
	}
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
