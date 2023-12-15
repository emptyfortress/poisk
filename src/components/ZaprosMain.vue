<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useStore } from '@/stores/store'
import QueryItem from '@/components/QueryItem.vue'
import { useEditor } from '@/stores/editor'
import PreviewDialog from '@/components/PreviewDialog.vue'
// import PreviewFormDialog from '@/components/PreviewFormDialog.vue'

const props = defineProps({
	splitter: Number,
})

const emit = defineEmits(['maximize', 'reset'])

const store = useStore()
const editor = useEditor()

const switchSidebar = () => {
	if (props.splitter !== 0) {
		emit('maximize')
	} else emit('reset')
}
const remove = () => {
	store.toggleDel()
}
const double = () => {
	store.toggleDub()
}
const preview = ref(false)
const previewForm = ref(false)
const loading = ref(false)

const showPreview = () => {
	loading.value = true
	preview.value = true
	setTimeout(() => {
		loading.value = false
	}, 3000)
}
const togglePreviewForm = () => {
	previewForm.value = !previewForm.value
}

watch(
	() => editor.type,
	() => {
		editor.resetVid()
	}
)
</script>

<template lang="pug">
.layout
	div
		.row.items-center.justify-between
			q-btn(flat round dense @click="switchSidebar" )
				q-icon(name="mdi-forwardburger" v-if="props.splitter === 0")
				q-icon(name="mdi-backburger" v-else)
			template(v-if="store.currentNode?.data.type == 1" )
				.zg {{ store.currentNode.data.text }}
					q-popup-edit( v-model="store.currentNode.data.text" auto-save v-slot="scope")
						q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")
			div(v-else) Выберите запрос или создайте новый.
			.btngroup
				q-btn(v-if="store.currentNode?.data.type == 1" outline size="10px" color="primary" :disable="!store.currentNode" @click="double") Дублировать
				q-btn(v-else outline size="10px" color="primary"  @click="double") Создать
		template(v-if="store.currentNode?.data.type == 1" )
			.descr {{ store.currentNode.data.text1 }}
				q-popup-edit( v-model="store.currentNode.data.text1" auto-save v-slot="scope")
					q-input(v-model="scope.value" dense autofocus counter @keyup.enter="scope.set")

			QueryItem(:preview="previewForm" @closePreview="togglePreviewForm")

	.q-mt-lg
		.row.justify-between(v-if="store.currentNode?.data.type == 1" )
			q-btn(flat color="primary" label="Удалить поиск" icon="mdi-trash-can-outline") 
				q-menu(anchor="bottom right" self="top right")
					q-list
						q-item.pink(clickable @click="remove" v-close-popup )
							q-item-section Удалить
			div
				q-btn(flat color="primary" label="Применить" icon="mdi-check-bold" @click="togglePreviewForm") 
				q-btn(flat color="primary" label="Применить" icon="mdi-check-bold" @click="showPreview") 
				q-btn(unelevated color="primary" label="Сохранить" icon="mdi-content-save") 

	PreviewDialog(v-model="preview" :loading="loading" )
	// PreviewFormDialog(v-model="previewForm" :tree="")
</template>

<style scoped lang="scss">
.layout {
	height: 100%;
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
	margin: 0.5rem 1rem;
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
.type {
	margin-left: 1rem;
	margin-top: 1rem;
	display: flex;
	justify-content: flex-start;
	gap: 4rem;
}
</style>
