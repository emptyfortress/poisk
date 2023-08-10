<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from '@/stores/store'
import { rows } from '@/stores/data'
import GridSetupDialog from '@/components/GridSetupDialog.vue'
import AddDialog from '@/components/AddDialog.vue'
import { useQuasar } from 'quasar'
import { router } from '@/router/router'

const $q = useQuasar()
const store = useStore()
const fullscreen = ref(false)
const pagination = {
	sortBy: '',
	descending: true,
	page: 1,
	rowsPerPage: 13
}
const toggleFullscreen = (() => {
	fullscreen.value = !fullscreen.value
})
const dialog = ref(false)
const addDialog = ref(false)

const add = (() => {
	addDialog.value = true
})
const filteredRows = computed(() => {
	return rows
})
const tabkey = ref(0)
const addItem = ((e: any) => {
	filteredRows.value.push(e)
	tabkey.value += 1
	let message = 'Добавлено!'
	$q.notify({
		message: message,
		position: 'top',
		timeout: 3000,
		icon: 'mdi-check-bold',
		color: 'primary',
		classes: 'notifications',
	})
})
const goto = ((e: any) => {
	router.push('/item/' + e.id)
})
</script>

<template lang="pug">
q-page(padding)
	.container
		q-table(bordered flat
			:key="tabkey"
			:rows='filteredRows'
			:columns='store.columns'
			row-key='id'
			rows-per-page-label="Записей на стр."
			:class="{ full: fullscreen }"
			:pagination="pagination")
			template(v-slot:top)
				.zag Выключатели
				q-space
				q-btn(flat round dense icon="mdi-tune-variant" @click="dialog = true")
				q-btn(flat round dense @click="toggleFullscreen")
					q-icon(v-if="fullscreen" name="mdi-fullscreen-exit")
					q-icon(v-else name="mdi-fullscreen")
			template(v-slot:body="props")
				q-tr(:props="props" @click="goto(props.row)" :class="props.row.class")
					q-td(key="manufacturer" :props="props") {{ props.row.manufacturer }}
					q-td(key="model" :props="props") {{ props.row.model }}
					q-td(key="voltage" :props="props") {{ props.row.voltage }}
					q-td(key="phase" :props="props") {{ props.row.phase }}
					q-td(key="polus" :props="props") {{ props.row.polus }}
					q-td(key="break" :props="props") {{ props.row.break }}
					q-td(key="typP" :props="props") {{ props.row.typP }}
					q-td(key="typB" :props="props") {{ props.row.typB }}

	GridSetupDialog(v-model="dialog")
	AddDialog(@add="addItem")
</template>

<style scoped lang="scss">
.q-tr {
	cursor: pointer;
}

.warn {
	background: var(--warn);
}
</style>
