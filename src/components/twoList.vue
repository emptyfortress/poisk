<script setup lang="ts">
import { ref, reactive } from 'vue'
import draggable from "vuedraggable"
import { datasource } from '@/stores/select'
import formItem from '@/components/formItem.vue'

const source = ref('Общий - по атрибутам')
const sourceOptions = [
	'Общий - по атрибутам',
	'Документы - поиски документов',
]

const list = reactive(datasource)

const list1 = reactive([
	{ id: 0, label: 'Дайджест', check: true, type: 0 }
])
const query = ref('')
const clearFilter = (() => {
	query.value = ''
})
</script>

<template lang="pug">
.source
	label Источник данных:
	q-select(v-model="source" dense :options="sourceOptions" outlined bg-color="white")
.drag
	div
		.filt Доступно
			q-input(dense
				v-model="query"
				autofocus
				clearable
				@clear="clearFilter"
				placeholder="фильтр"
				).query
				template(v-slot:prepend)
					q-icon(name="mdi-magnify")
		q-scroll-area.avail
			draggable(:list="list"
				item-key="id"
				class="list-group"
				ghost-class="ghost"
				group="data"
				)

				template(#item="{ element }")
					.list-group-item
						.dragg
						label {{ element.label }}
						// q-checkbox(v-model="element.check" dense :label="element.name")

	div
		.filt Выбрано
		draggable(:list="list1"
			item-key="id"
			class="list-group"
			ghost-class="ghost"
			group="data")

			template(#item="{ element }" )
				.list-group-item.big
					.dragg
					formItem(:item="element" )
					// q-checkbox(v-model="element.check" dense :label="element.name")
</template>

<style scoped lang="scss">
.source {
	margin: 1rem auto;
	display: flex;
	align-items: center;
	gap: 1rem;

	.q-select {
		width: 350px;
	}
}

.avail {
	height: 250px;
}

.list-group {
	display: flex;
	flex-direction: column;
	cursor: move;
}

.filt {
	font-size: .9rem;
	font-weight: 600;
	margin-bottom: .5rem;
}

.drag {
	display: grid;
	grid-template-columns: 1fr 2fr;
	gap: 2rem;
}

.list-group-item {
	background: #fff;
	padding: 6px 1rem 6px 1.5rem;
	margin-bottom: -1px;
	position: relative;
	border: 1px solid #dedede;
	font-size: .9rem;

	&.big {
		padding: 1rem 1rem 1rem 1.5rem;
	}
}

.dragg {
	position: absolute;
	top: 0;
	left: 0;
	width: 15px;
	height: 100%;
	background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAChJREFUGFc1ikEOwDAAguD/j2ax7fSiBMUgE1xlOY/uemCaTRjrV/kAE0wHDsCeQbcAAAAASUVORK5CYII=) repeat;
}

.ghost {
	opacity: 0.5;
	// background: #c8ebfb;
}
</style>
