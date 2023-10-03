<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import EditSearch from '@/components/EditSearch.vue'
import formItem from '@/components/formItem.vue'
import BaseTree from '@/components/BaseTree.vue'
import { mySearches } from '@/stores/tree'

const dialog = defineModel<boolean>()
const edit = ref(false)

const mystore = useStore()

const goToEdit = (() => {
	edit.value = true
	mystore.dialog = !mystore.dialog
})
const sidebar = ref(false)
const switchSidebar = (() => {
	sidebar.value = !sidebar.value
})
</script>

<template lang="pug">
q-dialog(v-model="dialog")
	q-card.dialog
		q-card-section.row.items-center.q-pb-none
			q-btn(flat round dense @click="switchSidebar" )
				q-icon(name="mdi-forwardburger" v-if="sidebar")
				q-icon(name="mdi-backburger" v-else)
			.text-h6.q-ml-lg Поиск 1
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup )

		q-separator
		.topgrid
			q-scroll-area.list
				BaseTree(:treeData="mySearches")
			q-form.grid
				template(v-for="el in mystore.attributes" :key="el.id")
					formItem(:item="el" wind )
				p(v-for="n in 40") ljkalsj lakj l

		q-card-actions.q-mt-md(align="between")
			q-btn(flat color="primary" label="Отмена" v-close-popup) 
			.q-gutter-md
				q-btn(flat color="primary" icon="mdi-cog" label="Настроить" @click="goToEdit") 
				q-btn(unelevated color="primary" icon="mdi-magnify" label="Искать" v-close-popup) 

// EditSearch(v-model="edit" )
</template>

<style scoped lang="scss">
.dialog {
	width: 780px;
	max-width: 90vw;
	// min-height: 300px;
}

.topgrid {
	display: grid;
	grid-template-columns: auto 1fr;
	grid-template-rows: minmax(250px, 1fr);
	// justify-items: start;
	align-items: start;
	column-gap: 2rem;
	// background: pink;
	margin-right: 1rem;
	margin-top: 1rem;
}

.list {
	// height: minmax(250px, 600px);
	height: 100%;
	font-size: .9rem;
	background: #ededed;
	border-right: 1px solid #ccc;
	width: 200px;
}

.grid {
	width: 100%;
	display: grid;
	grid-template-columns: auto 1fr auto;
	align-items: center;
	column-gap: 1rem;
	row-gap: .5rem;
}

.q-field {
	font-size: 1rem;
}
</style>
