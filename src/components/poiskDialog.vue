<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from '@/stores/store'
import EditSearch from '@/components/EditSearch.vue'
import formItem from '@/components/formItem.vue'

const dialog = defineModel<boolean>()

const mystore = useStore()
const edit = ref(false)

const goToEdit = (() => {
	edit.value = true
	mystore.dialog = !mystore.dialog
})
</script>

<template lang="pug">
q-dialog(v-model="dialog")
	q-card.dialog
		q-card-section.row.items-center.q-pb-none
			.text-h6 Поиск 1
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup )

		q-card-section
			q-form.grid
				template(v-for="el in mystore.attributes" :key="el.id")
					formItem(:item="el" wind)

		q-card-section
			q-card-actions(align="between")
				q-btn(flat color="primary" label="Отмена" v-close-popup) 
				.q-gutter-md
					q-btn(flat color="primary" icon="mdi-cog" label="Настроить" @click="goToEdit") 
					q-btn(unelevated color="primary" icon="mdi-magnify" label="Искать" v-close-popup) 

EditSearch(v-model="edit")
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
</style>
