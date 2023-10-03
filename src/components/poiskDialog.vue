<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import EditSearch from '@/components/EditSearch.vue'
import formItem from '@/components/formItem.vue'
import BaseTree from '@/components/BaseTree.vue'
import { mySearches } from '@/stores/tree'

const dialog = defineModel<boolean>()

const mystore = useStore()
const edit = ref(false)

const goToEdit = (() => {
	edit.value = true
	mystore.dialog = !mystore.dialog
})
const tabs = ref('poisk')
</script>

<template lang="pug">
q-dialog(v-model="dialog")
	q-card.dialog
		q-card-section.row.items-center.q-pb-none
			q-tabs.text-primary(v-model="tabs" inline-label)
				q-tab(name="poisk" label="Поиск 1")
				q-tab.all(name="all" label="Мои поиски" icon="mdi-folder-search-outline")
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup )

		q-separator
		q-tab-panels(v-model="tabs" animated)
			q-tab-panel.fl(name="poisk")
				q-form.grid
					template(v-for="el in mystore.attributes" :key="el.id")
						formItem(:item="el" wind)

				q-card-actions.q-mt-md(align="between")
					q-btn(flat color="primary" label="Отмена" v-close-popup) 
					.q-gutter-md
						q-btn(flat color="primary" icon="mdi-cog" label="Настроить" @click="goToEdit") 
						q-btn(unelevated color="primary" icon="mdi-magnify" label="Искать" v-close-popup) 

			q-tab-panel(name="all")
				q-scroll-area.list
					BaseTree(:treeData="mySearches")

EditSearch(v-model="edit" )
</template>

<style scoped lang="scss">
.dialog {
	min-width: 700px;
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

.all {
	margin-left: 4rem;
	font-size: 1rem;
}

:deep(.q-tab__label) {
	font-size: 1rem;

	.all & {
		font-size: .8rem;
	}
}

.fl {
	min-height: 200px;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
}

.list {
	height: 300px;
}
</style>
