<script setup lang="ts">
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { randomArray } from '@/utils/utils'

const props = defineProps({
	index: {
		type: Number,
		default: 1
	}
})

const chartOptions1 = {
	xaxis: {
		type: 'datetime',
		categories: [
			'2022-03-04',
			'2022-03-11',
			'2022-03-18',
			'2022-03-24',
			'2022-04-01',
			'2022-04-08',
			'2022-04-14',
		],
	},

	chart: {
		type: 'area',
		animations: {
			enabled: false
		},
		zoom: {
			enabled: false,
		},
		selection: {
			enabled: true,
		},
		toolbar: {
			show: true,
			tools: {
				download: true,
				customIcons: [
					{
						icon: '<img src="/select-off.svg" >',
						title: 'None',
						index: 1,
						class: "customicon",
						click: function () {
							chart.value.clearAnnotations()
							deselect()
						}
					}
				]
			},
			autoSelected: 'selection'
		}
	},
	dataLabels: {
		enabled: true,
	},
	stroke: {
		curve: 'smooth',
	},
	yaxis: {
		opposite: true,
	},
}
const modelValue = defineModel<boolean>()

const series1 = [{ name: 'Тренд', data: randomArray(7, 30, 40) }]
const chart = ref()
const min = ref()
const max = ref()
const select = ((_: any, e: any) => {
	min.value = e.xaxis.min
	max.value = e.xaxis.max
})

const deselect = (() => {
	chart.value.addXaxisAnnotation({
		x: min.value,
		x2: max.value
	})
	chart.value.updateOptions({
		chart: {
			selection: {
				xaxis: {
					min: undefined,
					max: undefined
				}
			},
		},
	})
})
</script>

<template lang="pug">
q-dialog(v-model="modelValue")
	q-card(style="width: 900px; max-width: 80vw;")
		q-card-section.row.items-center.q-pb-none
			.text-h6 Параметр {{ props.index + 1 }}
			q-space
			q-btn(icon="mdi-close" flat round dense v-close-popup)
		q-card-section
			VueApexCharts(ref="chart" type="area" :options="chartOptions1" :series="series1" @selection="select")
</template>

<style scoped lang="scss">
:deep(.customicon) {
	cursor: pointer;
	width: 18px;
	height: 18px;
	color: #6e8192;
	text-align: center;
	margin-top: 4px;
	margin-left: 4px;
}
</style>
