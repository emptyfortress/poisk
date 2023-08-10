<script setup lang="ts">
import { ref, reactive } from 'vue'
import { useStore } from '@/stores/store'
import draggable from 'vuedraggable'
import type { QTableColumn } from 'quasar'

interface MyCol extends QTableColumn {
	id?: number
	use?: boolean
}

// const props = defineProps<{
// 	cols: MyCol[]
// }>()

const modelValue = defineModel()
const store = useStore()

var arr: MyCol[] = reactive([
	{
		id: 0,
		name: 'time',
		required: true,
		label: 'Дата измерения',
		field: 'time',
		sortable: true,
		align: 'left',
		use: true,
	},
])
for (var i = 1; i < 20; i++) {
	arr.push({
		id: i,
		name: 'par' + i,
		required: true,
		label: 'Параметр ' + i,
		field: 'par' + i,
		sortable: true,
		align: 'right',
		use: true
	});
}

const filter = ref('')
const cancel = (() => {
	// store.resetColumns()
	// store.$reset()
	modelValue.value = false
})

const drag = ref(false)
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Настройка колонок
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)
		q-card-section.q-pb-none
			q-input(v-model="filter" dense autofocus clearable placeholder="Поиск" @clear="filter = ''")
				template(v-slot:prepend)
					q-icon(name="mdi-magnify")

		q-scroll-area.area
			draggable(:list="arr" 
				item-key="id"
				class="list-group"
				ghost-class="ghost"
				@start="drag = true"
				@end="drag = false")
				template(#item="{ element }")
					.item(@click="element.use = !element.use")
						div
							q-checkbox(:model-value="element.use" dense :val="element.use" @click="element.use = !element.use")
						div
							q-item-label {{ element.label }}

		q-card-actions(align="right")
			q-btn(flat color="primary" label="Reset" @click="cancel")
			q-btn(unelevated color="primary" label="Применить" v-close-popup)
</template>

<style scoped lang="scss">
.q-card {
	min-width: 500px;
}

.item {
	padding: .7rem 1rem;
	display: flex;
	align-items: center;
	background: white;
	gap: 1rem;
	cursor: pointer;
	margin: 0 2px;

	&:hover {
		outline: 1px solid #dedede;
	}
}

.ghost {
	background: var(--bg-selection);
}

.area {
	height: calc(100vh - 350px);
	padding: 1rem;
}

:deep(.q-field__native) {
	font-size: 1.2rem;
}
</style>
