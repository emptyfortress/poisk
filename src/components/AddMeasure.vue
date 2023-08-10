<script setup lang="ts">
import { ref, reactive } from 'vue'
import { req } from '@/utils/utils'
import { useStore } from '@/stores/store'

const form = ref()
const store = useStore()

const item = reactive({
	id: Date.now(),
	par: ''
})

const emit = defineEmits(['add'])
const err = ref(false)

const add = (() => {
	emit('add')
	// modelValue.value = false
})

</script>

<template lang="pug">
q-dialog(v-model="store.addMeasureDialog" transition-show="slide-up" transition-hide="slide-down")
	q-card( style="width: 700px; max-width: 80vw;")
		q-card-section.row.items-center.q-pb-none
			.text-h6 Добавить измерение
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-form(ref="form" @submit="add" @validation-error="err = true" @validation-success="err = false")
			q-card-section
				.blo
					template(v-for="n in 5")
						.label Параметр {{ n }}:
						q-input(dense filled autofocus v-model="item.par" :rules="req" @blur="form.validate()")
			q-card-actions.q-mx-md.q-mb-md(align="right")
				q-btn(flat color="primary" label="Отмена" v-close-popup)
				q-btn(unelevated color="primary" label="Добавить" type="submit" :disable="err" v-close-popup)
</template>

<style scoped lang="scss">
.blo {
	display: grid;
	align-items: baseline;
	grid-template-columns: auto 1fr;
	column-gap: 1rem;
	row-gap: .5rem;

	.q-input,
	.q-select {
		max-width: 450px;
	}
}

.q-radio {
	width: 80px;
}
</style>
