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
for (let i = 0; i < 21; i++) {
	let key = 'par' + i
	rows.map((e: any) => {
		e[key] = Math.round(Math.random() * 20)
	})
}
const tabkey = ref(0)
const dialog = ref(false)
</script>

<template lang="pug">
q-table(flat
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

MeasureSetupDialog(v-model="dialog")
</template>

<style scoped lang="scss"></style>
