<script setup lang="ts">
import { ref, computed } from 'vue'
import { date } from 'quasar'
import { useStore } from '@/stores/store'
import MeasureSetupDialog from '@/components/MeasureSetupDialog.vue'

import type { QTableColumn } from 'quasar'

interface MyCol extends QTableColumn {
	id?: number
	use?: boolean
}

const store = useStore()
const fullscreen = ref(false)
const pagination = {
	sortBy: '',
	descending: true,
	page: 1,
	rowsPerPage: 9
}

var arr: MyCol[] = [
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
];
for (var i = 1; i < 31; i++) {
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
const toggleFullscreen = (() => {
	fullscreen.value = !fullscreen.value
})

let newDate = new Date(2023, 2, 7)
let rows: any = []
for (var i = 0; i < 50; i++) {
	let temp = date.subtractFromDate(newDate, { days: i })
	rows.push({
		id: i,
		time: date.formatDate(temp, 'YYYY-MM-DD'),
	})
}
for (let i = 0; i < 31; i++) {
	let key = 'par' + i
	rows.map((e: any) => {
		e[key] = Math.round(Math.random() * 20)
	})
}
const tabkey = ref(0)
const dialog = ref(false)
</script>

<template lang="pug">
q-table.sticky(flat
	:key="tabkey"
	:rows="rows"
	:columns="arr"
	row-key='id'
	rows-per-page-label="Записей на стр."
	:class="{ full: fullscreen }"
	:pagination="pagination")

	template(v-slot:top)
		q-space
		q-btn(flat round dense icon="mdi-tune-variant" @click="dialog = true")
		q-btn(flat round dense @click="toggleFullscreen")
			q-icon(v-if="fullscreen" name="mdi-fullscreen-exit")
			q-icon(v-else name="mdi-fullscreen")

	template(v-slot:header="props")
		q-tr(:props="props")
			q-th(v-for="(col, index) in props.cols" :key="col.name" :props="props")
				span(:class="{ rot: index > 0 }") {{ col.label }}

MeasureSetupDialog(v-model="dialog")
</template>

<style scoped lang="scss">
th {
	vertical-align: bottom;
	text-align: center;
}

th span.rot {
	-ms-writing-mode: tb-rl;
	-webkit-writing-mode: vertical-rl;
	writing-mode: vertical-rl;
	transform: rotate(180deg);
	white-space: nowrap;
}

.q-table thead .q-tr:first-child th:first-child {
	background-color: #fff;
}

:deep(.q-table tbody td:first-child) {
	background-color: #f5f5dc;
}

:deep(th:first-child),
:deep(td:first-child) {
	position: sticky;
	left: 0;
	z-index: 1;
}
</style>
