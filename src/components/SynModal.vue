<script setup lang="ts">
import { ref, computed, reactive, watch } from 'vue'
import type { QTableColumn } from 'quasar'
import { fields } from '@/stores/fields'
import { getMembers } from '@/utils/utils'

const props = defineProps<{
	stat: Stat
}>()

const chips = reactive([
	{ id: 0, selected: true, label: 'Все' },
	{ id: 1, selected: false, label: 'Входящий' },
	{ id: 2, selected: false, label: 'Исходящий' },
	{ id: 3, selected: false, label: 'На исполнение' },
	{ id: 4, selected: false, label: 'На ознакомление' },
	{ id: 5, selected: false, label: 'На согласовние' },
])
const chiplength = computed(() => {
	return chips.filter((el) => el.selected).length
})
const modelValue = defineModel()
const cols: QTableColumn[] = [
	{
		name: 'text',
		required: true,
		label: 'Поле',
		align: 'left',
		field: 'text',
		sortable: true,
	},
	{
		name: 'parents',
		required: true,
		label: 'Карточка',
		align: 'left',
		field: 'parents',
		sortable: true,
	},
]
const selected = ref<NodeData[]>([])
selected.value.push(props.stat.data)

const flat = getMembers(fields)

const rows = computed(() => {
	return flat.filter((el: any) => el.kind == props.stat.data.kind)
})
const select = (_: Event, row: any, index: number) => {
	let sel = selected.value.filter((el: any) => el.id == row.id).length == 0 ? false : true
	if (sel == true) {
		const ind = selected.value.indexOf(row)
		selected.value.splice(ind, 1)
	} else selected.value.push(row)
}
const filter = ref('')
const common = ref(props.stat.data.text)

const pagination = {
	rowsPerPage: 8,
}
const selChip = (id: number) => {
	if (id !== 0) {
		chips[0].selected = false
	} else {
		chips.map((el) => (el.selected = false))
		chips[0].selected = true
	}
}
watch(chiplength, (val) => {
	if (val == 0) {
		chips[0].selected = true
	}
})
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card
		q-card-section.row.items-center.q-pb-none
			.text-h6 Добавить поля
			q-space
			q-input(dense v-model="filter" debounce="300" color="primary" clearable)
				template(v-slot:prepend)
					q-icon(name="mdi-magnify")

		.q-mt-sm.q-mx-md
			q-chip(v-for="chip in chips" :key="chip.id" v-model:selected="chip.selected" size="12px" @click="selChip(chip.id)") {{ chip.label }}

		q-card-section
			q-table(flat
				:columns="cols"
				:rows="rows"
				color="primary"
				selection="multiple"
				:filter="filter"
				v-model:selected="selected"
				@rowClick="select"
				:pagination="pagination"
				row-key="id" )
				template(v-slot:header-selection="scope")
					q-checkbox(dense v-model="scope.selected" color="primary" size="sm")

				template(v-slot:body-selection="scope")
					q-checkbox(dense v-model="scope.selected" color="primary" size="sm")
				template(v-slot:body-cell-parents="props")
					q-td(:props="props")
						template(v-for="(par, index) in props.row.parents" :key="par")
							span {{par}}
							span.q-mx-sm(v-if="index + 1 < props.row.parents.length") >

		.info Введите общую метку для выбранных полей, для показа в форме поиска.
		.row.justify-center.items-center.q-gutter-x-md
			label Общая метка:
			q-input.lab(v-model="common" dense filled)
		q-card-section
			q-card-actions(align="right")
				q-btn(flat color="primary" label="Отмена" v-close-popup) 
				q-btn(unelevated color="primary" label="Добавить" v-close-popup) 

</template>

<style scoped lang="scss">
.q-card {
	min-width: 700px;
}
:deep(.q-checkbox) {
	width: 24px;
}
.q-input {
	width: 200px;
}
.bottom {
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.info {
	font-size: 0.9rem;
	margin: 0 2rem;
	margin-bottom: 1rem;
	// background: pink;
}
.lab {
	width: 320px;
}
.q-chip:first-child {
	margin-right: 2rem;
}
</style>
