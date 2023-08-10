<script setup lang="ts">
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { randomNumber, randomArray } from '@/utils/utils'
import TrendDialog from './TrendDialog.vue';

const props = defineProps({
	name: {
		type: String,
		default: ''
	},
})
const options = {
	chart: {
		type: 'area',
		height: '50px',
		sparkline: {
			enabled: true,
		},
		zoom: {
			enabled: false,
		},
		animations: {
			enabled: false
		}
	},
	stroke: {
		curve: 'smooth',
		width: 1,
	},
	tooltip: {
		enabled: false
	}
}
const series = ref([
	{
		data: randomArray(5, 20, 30)
	}
])
const val = ref(randomNumber(40, 80, 0))
const big = ref(false)
</script>

<template lang="pug">
.card(@click="big = true")
	.data {{ val }}
	VueApexCharts(ref="chart" height="50px" :options="options" :series="series")

	.label {{ props.name }}

TrendDialog(v-model="big")
</template>

<style scoped lang="scss">
.card {
	width: 160px;
	border-radius: 4px;
	background: #fff;
	position: relative;
	padding: 0;
	cursor: pointer;

	&:hover {
		box-shadow: var(--card-shadow);
	}
}

.data {
	font-size: 1.3rem;
	font-weight: 600;
	position: absolute;
	top: 2px;
	left: 3px;
	z-index: 5;
}

.label {
	font-size: .8rem;
	line-height: 1.0;
	margin-top: 2px;
}
</style>
