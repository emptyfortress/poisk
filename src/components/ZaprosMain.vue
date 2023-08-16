<script setup lang="ts">
// import { ref } from 'vue'
import { useStore } from '@/stores/store'
import QueryItem from '@/components/QueryItem.vue'

const props = defineProps({
	splitter: Number,
})

const emit = defineEmits(['maximize', 'reset'])

const store = useStore()

const switchSidebar = () => {
	if (props.splitter !== 0) {
		emit('maximize')
	} else emit('reset')
}
const remove = (() => {
	store.toggleDel()
})
const double = (() => {
	store.toggleDub()
})
// const item = ref('')
</script>

<template lang="pug">
.layout
	div
		.row.items-center.justify-between
			q-btn(flat round dense @click="switchSidebar" )
				q-icon(name="mdi-forwardburger" v-if="props.splitter === 0")
				q-icon(name="mdi-backburger" v-else)
			.zg(v-if="store.currentNode")
				q-icon(name="mdi-briefcase-search-outline" size="sm")
				span.q-ml-md {{ store.currentNode.data.text }}
			div(v-else) Выберите поиск
			.btngroup
				q-btn(outline size="10px" color="primary" :disable="!store.currentNode" @click="double") Дублировать
		QueryItem(v-if="store.currentNode")
		// q-select(v-model="item" outlined label="Pole")
	div
		.row.justify-between(v-if="store.currentNode")
			q-btn(flat color="primary" label="Удалить поиск" icon="mdi-trash-can-outline") 
				q-menu(anchor="bottom right" self="top right")
					q-list
						q-item.pink(clickable @click="remove" v-close-popup )
							q-item-section Удалить
			div
				q-btn(flat color="primary" label="Применить" icon="mdi-check-bold") 
				q-btn(unelevated color="primary" label="Сохранить" icon="mdi-content-save") 

</template>

<style scoped lang="scss">
.layout {
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.zg {
	font-size: 1.2rem;
}
</style>
