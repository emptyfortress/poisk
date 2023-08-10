<script setup lang="ts">
import { ref } from 'vue'
import MasonCard1 from '@/components/MasonCard1.vue'
import {
	insulation,
	Transformeroil,
	PIR,
	Current_limiting,
	Builtincurrenttransformers,
	Tractions,
	Maincontact,
	Bounce,
	Bounceintravel,
	Turnonspringwindingtime,
	Arcextinguishingcontact,
	Closing,
	Opening,
	Closingsolenoid,
	Undervoltage,
	Closing1,
	Undervoltage1,
	Opening1,
} from '@/stores/table'

const fullscreen = ref(false)
const toggleFullscreen = (() => {
	fullscreen.value = !fullscreen.value
})
const dialog = ref(false)
const sel = ref('Последняя неделя')
const selOptions = ['Последняя неделя', 'Последний месяц', 'Последний квартал', 'За все время']
</script>

<template lang="pug">
div
	.row.items-center
		q-space
		q-select(dense outlined v-model="sel" bg-color="white" :options="selOptions")
		q-btn.q-mr-lg(flat round icon="mdi-calendar" ) 
		q-btn(flat round dense icon="mdi-tune-variant" @click="dialog = true")
		q-btn(flat round dense @click="toggleFullscreen")
			q-icon(v-if="fullscreen" name="mdi-fullscreen-exit")
			q-icon(v-else name="mdi-fullscreen")
	q-separator
	.grid
		.mas Circuit breaker pole
		.mas Ввод
		.mas Insulation
	.mason
		MasonCard1(v-for="item in insulation" :name="item")
	q-separator
	.grid
		.mas Circuit breaker pole
		.mas Arc extinguishing medium
		.mas Transformer oil
	.mason
		MasonCard1(v-for="item in Transformeroil" :name="item")
		MasonCard1(name="Параметр" red)
	q-separator
	.grid
		.mas Circuit breaker pole
		.mas Resistors
		.mas PIR
	.mason
		MasonCard1(v-for="item in PIR" :name="item")
		MasonCard1(name="Параметр" red)
	q-separator

	.grid
		.mas Circuit breaker pole
		.mas Current limiting
	.mason
		MasonCard1(v-for="item in Current_limiting" :name="item")
	q-separator

	.grid
		.mas Circuit breaker pole
		.mas Built-in current transformers
	.mason
		MasonCard1(v-for="item in Builtincurrenttransformers" :name="item")
		MasonCard1(name="Параметр" red)
	q-separator
	.grid
		.mas Circuit breaker pole
		.mas Tractions
	.mason
		MasonCard1(v-for="item in Tractions" :name="item")
	q-separator
	.grid
		.mas Circuit breaker pole
		.mas Main contact
	.mason
		MasonCard1(v-for="item in Maincontact" :name="item")
	q-separator
	.grid
		.mas Circuit breaker pole
		.mas Pole (phase) heating
	.mason
		MasonCard1(v-for="item in Bounce" :name="item")
	q-separator
	.grid
		.mas Circuit breaker pole
		.mas Arc extinguishing device
		.mas Arc-extinguishing contact
	.mason
		MasonCard1(v-for="item in Bounceintravel" :name="item")
	q-separator
	.grid
		.mas Circuit breaker drive
		.mas Spring
		.mas Closing
	.mason
		MasonCard1(v-for="item in Turnonspringwindingtime" :name="item")
	q-separator

</template>

<style scoped lang="scss">
.grid {
	display: flex;
}

.q-separator {
	margin-top: 1rem;
	margin-bottom: 1rem;
}

.mas {
	font-size: .9rem;
	font-weight: 600;
	&::after {
		content: '>';
		font-size: 1rem;
		padding: 0 1rem;
	}
	// background: var(--bg-head);
	// padding: .5rem;
}

.mason {
	margin-top: .5rem;
	display: flex;
	flex-wrap: wrap;
	gap: .5rem;
}
</style>
