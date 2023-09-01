<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import { useStore } from '@/stores/store'
import resultItem from '@/components/resultItem.vue'
import twoList from '@/components/twoList.vue'

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

const name = ref()

watchEffect(() => {
	name.value = store.currentNode?.data.text
})
const showSave = ref(false)
const toggleShowSave = (() => {
	showSave.value = !showSave.value
})

const savePoisk = (() => {
	store.savePoisk(name.value, store.currentNode!.data.text1)
	showSave.value = false
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

	template(v-if="store.currentNode?.data.type == 1" )
		twoList()

		.q-mt-lg
			.row.justify-between
				q-btn(flat color="primary" label="Удалить поиск" icon="mdi-trash-can-outline") 
					q-menu(anchor="bottom right" self="top right")
						q-list
							q-item.pink(clickable @click="remove" v-close-popup )
								q-item-section Удалить
				q-btn(flat color="primary" label="Сохранить" icon="mdi-content-save" @click="toggleShowSave") 

		br
		resultItem
		br
		.row.justify-between
			q-btn(flat color="primary" label="Сохранить как папку" icon="mdi-folder-outline" @click="")
			q-btn(unelevated color="primary" label="Искать" icon="mdi-magnify" @click="")

q-dialog(v-model="showSave")
	q-card(style="min-width: 500px;")
		q-card-section.row.items-center.q-pb-none
			.text-h6 Сохранить поиск
			q-space
			q-btn(icon="mdi-close" flat round dense @click="toggleShowSave")

		q-card-section(v-if="store.currentNode !== null")
			q-input.q-mb-sm(v-model="name" dense filled label="Название")
			q-input(v-model="store.currentNode.data.text1" dense filled label="Описание")
		q-card-section
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" @click="toggleShowSave") 
				q-btn(unelevated color="primary" label="Сохранить" @click="savePoisk") 
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
</style>
