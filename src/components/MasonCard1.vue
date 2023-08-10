<script setup lang="ts">
import { ref, computed } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { randomNumber, randomArray } from '@/utils/utils'
import TrendDialog from './TrendDialog.vue';

const props = defineProps({
	name: {
		type: String,
		default: ''
	},
	red: {
		type: Boolean,
		default: false
	}
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
const options1 = {
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
	colors: ['red'],
	fill: {
		type: 'gradient',
		gradient: {
			opacityFrom: 0.7,
			opacityTo: 0.9,
			stops: [0, 90, 100],
			gradientToColors: ['pink']
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
const calcOption = computed(() => {
	return props.red ? options1 : options
})
const color = computed(() => {
	return props.red ? 'red' : '#3380bc'
})
</script>

<template lang="pug">
.cont
	.card(@click="big = true")
		.row.items-center.justify-between
			.data {{ val }}
			.om &Omega;

		VueApexCharts(ref="chart" height="50px" :options="calcOption" :series="series")
	.label {{ props.name }}

TrendDialog(v-model="big")
</template>

<style scoped lang="scss">
.cont {
	width: 160px;
}

.card {
	border-radius: 4px;
	background: #fff;
	padding: 0;
	cursor: pointer;
	box-shadow: var(--card-shadow);

	&:hover {
		outline: 1px solid v-bind(color);
	}
}

.data {
	font-size: 1.4rem;
	font-weight: 600;
	margin-left: .5rem;
	color: v-bind(color);
}

.label {
	font-size: .8rem;
	line-height: 1.0;
	margin-top: 4px;
}

.om {
	font-size: .8rem;
	margin-right: .5rem;
}
</style>
