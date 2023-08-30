<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useStore } from '@/stores/store'
import SearchForm from '@/components/SearchForm.vue'
import resultItem from '@/components/resultItem.vue'

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

const name = ref('name')
watchEffect(() => {
	name.value = store.currentNode?.data.text
})
</script>

<template lang="pug">
.layout
	div
		.row.items-center.justify-between
			q-btn(flat round dense @click="switchSidebar" )
				q-icon(name="mdi-forwardburger" v-if="props.splitter === 0")
				q-icon(name="mdi-backburger" v-else)
			template(v-if="store.currentNode?.data.type == 1" )
				.zg {{ name }}
					q-popup-edit( v-model="name" auto-save v-slot="scope")
						q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")

			div(v-else) Выберите запрос
			.btngroup
				q-btn(outline size="10px" color="primary" :disable="!store.currentNode" @click="double") Дублировать

		template(v-if="store.currentNode?.data.type == 1" )
			.descr {{ store.currentNode.data.text1 }}
				q-popup-edit( v-model="store.currentNode.data.text1" auto-save v-slot="scope")
					q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")

	SearchForm(v-if="store.currentNode?.data.type == 1" )
	.q-mt-lg
		.row.justify-between(v-if="store.currentNode?.data.type == 1" )
			q-btn(flat color="primary" label="Удалить поиск" icon="mdi-trash-can-outline") 
				q-menu(anchor="bottom right" self="top right")
					q-list
						q-item.pink(clickable @click="remove" v-close-popup )
							q-item-section Удалить
			q-btn(flat color="primary" label="Сохранить" icon="mdi-content-save") 

	br
	template(v-if="store.currentNode?.data.type == 1" )
		resultItem
		br
		.row.justify-between
			div
			q-btn(unelevated color="primary" label="Искать" icon="mdi-magnify" @click="")

</template>

<style scoped lang="scss">
.layout {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.zg {
	font-size: 1rem;
	text-transform: uppercase;
	font-weight: 600;
	padding: 0.5rem;
	padding-bottom: 0;
	border-bottom: 1px dotted var(--q-primary);
}

.descr {
	margin: .5rem 1rem;
	padding: 0.5rem;
	padding-bottom: 0;
	border-bottom: 1px dotted var(--q-primary);
}

.q-select {
	width: 175px;
}

:deep(.q-table th) {
	background: #dedede;
	// border-top-width: 1px;
}

:deep(.q-table tr) {
	height: 32px;
}
</style>
