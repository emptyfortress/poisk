<script setup lang="ts">
import { ref } from 'vue'
import { uid } from 'quasar'
import draggable from 'vuedraggable'

type Color = {
	id: string
	name: string
	filt: string
	val: string
}

const list = ref<Color[]>([])
const option1 = ['Просроченные задания', 'Я - автор', 'Высокая важность', 'Мой запрос']
const option2 = [
	{ label: 'Тревожный', color: 'red' },
	{ label: 'Положительный', color: 'green' },
	{ label: 'Внимание', color: 'blue' },
	{ label: 'Яркий', color: 'orange' },
]
const del = (ind: number) => {
	list.value.splice(ind, 1)
}
const add = () => {
	let temp = {
		id: uid(),
		name: '',
		filt: '',
		val: '',
	}
	list.value.push(temp)
}
</script>

<template lang="pug">
.main
	draggable(:list="list" class="list-group" group="a" item-key="name")
		template(#item="{ element, index }")
			.list-group-item
				div {{index + 1}}
				q-select(dense outlined bg-color="white" v-model="element.filt" label="Запрос" :options="option1")
				q-select(dense outlined bg-color="white" v-model="element.val" label="Цвет" :options="option2")
					template(v-slot:option="scope")
						q-item(v-bind="scope.itemProps")
							q-item-section
								q-item-label {{ scope.opt.label }}
							q-item-section(side)
								.square(:class="scope.opt.color")
				q-btn(flat round icon="mdi-close" dense @click="del(index)" size="sm") 

		template(#header)
			.q-mb-md
				q-btn(unelevated color="primary" label="Добавить цвет" @click="add" size="sm") 
</template>

<style scoped lang="scss">
.main {
	width: 600px;
	margin: 0 auto;
}
.list-group-item {
	padding: 0.5rem 1rem;
	background: var(--bg-main);
	margin-bottom: 1px;
	display: grid;
	grid-template-columns: auto 1fr 1fr auto;
	justify-items: start;
	align-items: center;
	column-gap: 1rem;
}
.q-select {
	width: 100%;
}
.square {
	width: 20px;
	height: 20px;
	border: 1px solid black;
	&.red {
		background: darkred;
	}
	&.green {
		background: green;
	}
	&.blue {
		background: blue;
	}
	&.orange {
		background: orange;
	}
}
</style>
