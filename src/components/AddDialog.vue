<script setup lang="ts">
import { ref, reactive } from 'vue'
import { req } from '@/utils/utils'
import { useStore } from '@/stores/store'

const form = ref()
const store = useStore()

const item = reactive({
	id: Date.now(),
	manufacturer: '',
	model: '',
	voltage: 110,
	phase: 1,
	polus: 1,
	break: 1,
	typP: 'Электромагнитный',
	typB: 'Масляный',
})

const emit = defineEmits(['add'])

const pOptions = ['Электромагнитный', 'Механический', 'Магнитный']
const bOptions = ['Масляный', 'Мясной', 'Молочный']
const err = ref(false)
const add = (() => {
	emit('add', item)
	// modelValue.value = false
})
</script>

<template lang="pug">
q-dialog(v-model="store.addSwitchDialog" transition-show="slide-up" transition-hide="slide-down")
	q-card( style="width: 700px; max-width: 80vw;")
		q-card-section.row.items-center.q-pb-none
			.text-h6 Добавить устройство
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)

		q-form(ref="form" @submit="add" @validation-error="err = true" @validation-success="err = false")
			q-card-section
				.blo
					.label Производитель:
					q-input(dense filled autofocus v-model="item.manufacturer" :rules="req" @blur="form.validate()")
					.label Модель:
					q-input(dense filled v-model="item.model" :rules="req" @blur="form.validate()")
					.label Класс напряжения:
					div
						q-radio.q-mr-lg(v-model="item.voltage" :val="110") 110
						q-radio.q-mr-lg(v-model="item.voltage" :val="220") 220
						q-radio(v-model="item.voltage" :val="380") 380
					.label Фазы:
					div
						q-radio.q-mr-lg(v-model="item.phase" :val="1") 1
						q-radio.q-mr-lg(v-model="item.phase" :val="2") 2
						q-radio(v-model="item.phase" :val="3") 3
					.label Полюса:
					div
						q-radio.q-mr-lg(v-model="item.polus" :val="1") 1
						q-radio.q-mr-lg(v-model="item.polus" :val="2") 2
						q-radio(v-model="item.polus" :val="3") 3
					.label Разрывы на полюс:
					div
						q-radio.q-mr-lg(v-model="item.break" :val="1") 1
						q-radio.q-mr-lg(v-model="item.break" :val="2") 2
						q-radio(v-model="item.break" :val="3") 3
					.label Тип привода
					q-select(dense filled  v-model="item.typP" :options="pOptions")
					.label Тип ВВ:
					q-select(dense filled v-model="item.typB" :options="bOptions")
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
