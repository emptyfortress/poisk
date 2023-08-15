<script setup lang="ts">
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
</script>

<template lang="pug">
.row.items-center.justify-between
	q-btn(flat round dense @click="switchSidebar" )
		q-icon(name="mdi-forwardburger" v-if="props.splitter === 0")
		q-icon(name="mdi-backburger" v-else)
	.zg(v-if="store.currentNode") {{ store.currentNode.data.text }}
	div(v-else) Выберите поиск
	.btngroup
		q-btn(outline size="10px" color="primary" :disable="!store.currentNode" @click="double") Дублировать
QueryItem
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
.zg {
	font-size: 1.2rem;
}
</style>
