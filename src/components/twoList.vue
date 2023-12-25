<script setup lang="ts">
import { ref, computed, reactive } from 'vue'
import draggable from 'vuedraggable'
import { datasource, datasource1 } from '@/stores/select'
import formItem from '@/components/formItem.vue'
import formItem1 from '@/components/formItem1.vue'
import { useRoute } from 'vue-router'
import { useStore } from '@/stores/store'

const store = useStore()
const source = ref('Источник 1')
const sourceOptions = ['Источник 1', 'Источник 2']

const query = ref('')
const clearFilter = () => {
	query.value = ''
}

const ds = computed(() => {
	return datasource.filter((array_el: any) => {
		return (
			store.currentNode?.data.fields.filter((anotherOne_el: Select) => {
				return anotherOne_el.id == array_el.id
			}).length == 0
		)
	})
})

const list = computed(() => {
	if (query.value.length > 0 && source.value === 'Источник 1') {
		return ds.value.filter((item: any) =>
			item.label.toLowerCase().includes(query.value.toLowerCase())
		)
	} else if (query.value.length > 0 && source.value === 'Источник 2') {
		return datasource1.filter((item: any) =>
			item.label.toLowerCase().includes(query.value.toLowerCase())
		)
	} else if (query.value.length === 0 && source.value === 'Источник 1') {
		return ds.value
	} else if (query.value.length === 0 && source.value === 'Источник 2') {
		return datasource1
	}
})

const route = useRoute()
const height = computed(() => {
	if (store.dialog === true) {
		return '400px'
	}
	if (route.name === 'layout') {
		return '415px'
	}
	if (route.name === 'mysearch') {
		return '250px'
	}
})
const field = computed(() => {
	return route.name === 'layout' ? 'колонки' : 'поля'
})
</script>

<template lang="pug">
.source
	label Источник данных:
	q-select(v-model="source" dense :options="sourceOptions" outlined bg-color="white")
.drag
	div
		.filt Доступные {{ field }}:
			q-input.trim(dense
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
				group="data")

				template(#item="{ element }")
					.list-group-item
						.dragg
						label {{ element.label }}

	div
		.filt Выбранные {{ field }}:
		draggable.sele(:list="store.currentNode?.data.fields"
			item-key="id"
			class="list-group"
			ghost-class="ghost"
			@dragstart="start"
			@dragend="end"
			group="data")

			template(#item="{ element }" )
				.list-group-item.big
					.dragg
					formItem1(:item="element" v-if="route.name === 'layout' && !store.dialog")
					formItem(:item="element" :wind="false" v-if="route.name === 'mysearch' && !store.dialog")
					formItem(:item="element" :wind="true" v-if="store.dialog")
</template>

<style scoped lang="scss">
.source {
	margin: 1rem auto;
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: center;

	.q-select {
		width: 350px;
	}
}

.sele {
	background: var(--bg-main);
	min-height: 48px;
	margin-top: 2rem;
	position: relative;

	&::before {
		content: 'Пусто. Перетащите сюда для выбора';
		font-size: 0.8rem;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		color: #999;
	}
}

.avail {
	height: v-bind(height);
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
	// max-height: 450px;
	// background: pink;
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
