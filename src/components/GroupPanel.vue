<script setup lang="ts">
import { ref } from 'vue'
import draggable from 'vuedraggable'
import { useView } from '@/stores/views'

const view = useView()
const list1 = ref<ColNode[]>([])
const remove = (ind: number) => {
	list1.value.splice(ind, 1)
}
</script>

<template lang="pug">
section.q-mt-lg
	.text-body2 Группировать данные по колонкам:
	draggable(:list="list1"
		item-key="id"
		tag="ul"
		class="list-group"
		ghost-class="ghost"
		group="data")
		template(#item="{ element, index }")
			li.list-group-item
				div
					q-icon.q-mr-md(v-if="index == 0" name="mdi-check-bold" color="primary" size="sm")
						q-tooltip Сортировка по умолчанию
					span {{ element.text }}
				// q-btn(v-if="element.selected" unelevated icon="mdi-sort-ascending" label="по возрастанию" @click="element.selected = !element.selected" dense size="sm") 
				// q-btn(v-else unelevated icon="mdi-sort-descending" label="по убыванию"  @click="element.selected = !element.selected"  dense size="sm") 
				q-btn.close( flat round icon="mdi-close" @click="remove(index)" size="sm" dense)
</template>

<style scoped lang="scss">
ul,
li {
	margin: 0;
	padding: 0;
	list-style: none;
}
ul:empty:after {
	display: block;
	content: 'Пусто. Настройте группировку, перетащив сюда колонки из превью сверху.';
	width: 100%;
	text-align: center;
	color: rgba(0, 0, 0, 0.5);
	height: 75px;
	line-height: 75px;
	border-radius: 4px;
	font-size: 0.9rem;
	background: rgba($color: #000000, $alpha: 0.07);
}
.list-group-item {
	font-size: 0.9rem;
	background: white;
	cursor: move;
	color: var(--text-color);
	padding: 0.7rem 1rem;
	line-height: 1.2;
	border-bottom: 1px solid #dedede;
	display: grid;
	grid-template-columns: 1fr 30px;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
	&:first-child {
		border-top: 1px solid #dedede;
	}
}
.ghost {
	padding: 0.5rem 1rem;
	// height: 75px;
	opacity: 0.5;
	background: #ccc;
}
</style>
