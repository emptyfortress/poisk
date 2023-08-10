<script setup lang="ts">
import { ref } from 'vue'
import MasonCard from '@/components/MasonCard.vue'
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
</script>

<template lang="pug">
.grid
	.mas Circuit breaker pole
	.mas Ввод
	.mas Insulation
	.mason
		MasonCard(v-for="item in insulation" :name="item")
	q-separator
	.mas Circuit breaker pole
	.mas Arc extinguishing medium
	.mas Transformer oil
	.mason
		MasonCard(v-for="item in Transformeroil" :name="item")
	q-separator
	.mas(style="grid-row: 5/8") Circuit breaker pole
	.mas(style="grid-row: 5/8") Resistors
	.mas PIR
	.mason
		MasonCard(v-for="item in PIR" :name="item")
	div
	div
	.mas Current limiting
	.mason
		MasonCard(v-for="item in Current_limiting" :name="item")
	q-separator
	.mas Circuit breaker pole
	.mas
	.mas Built-in current transformers
	.mason
		MasonCard(v-for="item in Builtincurrenttransformers" :name="item")
	.mas Circuit breaker pole
	.mas Tractions
	.mas
	.mason
		MasonCard(v-for="item in Tractions" :name="item")
	q-separator
	.mas Circuit breaker pole
	.mas Main contact
	.mas
	.mason
		MasonCard(v-for="item in Maincontact" :name="item")
	q-separator
	.mas Circuit breaker pole
	.mas Pole (phase) heating
	.mas
	.mason
		MasonCard(v-for="item in Bounce" :name="item")
	q-separator
	.mas Circuit breaker pole
	.mas Arc extinguishing device
	.mas Arc-extinguishing contact
	.mason
		MasonCard(v-for="item in Bounceintravel" :name="item")
	q-separator
	.mas Circuit breaker drive
	.mas Spring
	.mas Closing
	.mason
		MasonCard(v-for="item in Turnonspringwindingtime" :name="item")
	q-separator

</template>

<style scoped lang="scss">
.grid {
	display: grid;
	grid-template-columns: 130px 130px 130px 1fr;
	gap: .5rem;
	font-size: .9rem;
	margin-top: 1rem;
	// align-items: center;
}

.q-separator {
	grid-column: 1/-1;
	margin-top: .5rem;
	margin-bottom: .5rem;
}

.mas {
	background: var(--bg-head);
	padding: .5rem;
}

.mason {
	display: flex;
	flex-wrap: wrap;
	gap: .5rem;
}
</style>
