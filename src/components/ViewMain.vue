<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'

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
const double = (() => {
	console.log(111)
})
</script>

<template lang="pug">
.row.items-center.justify-between
	q-btn(flat round dense @click="switchSidebar" )
		q-icon(name="mdi-forwardburger" v-if="props.splitter === 0")
		q-icon(name="mdi-backburger" v-else)
	.zg(v-if="store.currentNode") {{ store.currentNode.data.text }}
	div(v-else) Выберите представление
	.btngroup
		q-btn(outline size="10px" color="primary" :disable="!store.currentNode" @click="double") Дублировать
</template>

<style scoped lang="scss"></style>
