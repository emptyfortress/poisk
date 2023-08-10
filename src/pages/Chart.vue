<script setup lang="ts">
import { ref, reactive } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import { options, series, series1 } from '@/stores/charts2'

const sss = ref(false)

const left = ref('')
const top = ref('')
const calc = ref('')
const minSel = ref(0)
const maxSel = ref(0)

const test = ((_: any, e: any) => {
	let min = e.xaxis.min
	let max = e.xaxis.max
	minSel.value = Number(min.toFixed())
	maxSel.value = Number(max.toFixed())

	let sel = document.getElementsByClassName('apexcharts-selection-rect')
	let bound = sel[0].getBoundingClientRect()
	top.value = bound.height / 2 + 80 + 'px'
	left.value = bound.right - 255 + 'px'
	calc.value = (max - min).toFixed(2)
	izm.value = calc.value

	setTimeout(() => {
		sss.value = true
	}, 100)

})
const deselect = (() => {
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
	sss.value = false
})
const chart = ref()
const izm = ref()

const setSelection = (() => {
	let options = {
		x: minSel.value,
		x2: maxSel.value,
		borderColor: 'blue',
		label: {
			borderColor: 'blue',
			style: {
				color: '#fff',
				background: 'blue',
				fontSize: '20px',
			},
			orientation: 'horizontal',
			text: izm.value
		}
	}
	chart.value.clearAnnotations()
	chart.value.addXaxisAnnotation(options)
	deselect()
})

const options1 = reactive({
	chart: {
		type: 'line',
		animations: {
			enabled: false,
			speed: 100
		},
		zoom: {
			enabled: false
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
	tooltip: {
		enabled: false
	},
	colors: ['#33b2df', '#4b8353', '#4b8353', '#d4526e', '#d4526e'],
	dataLabels: {
		enabled: false
	},
	stroke: {
		curve: ['smooth', 'stepline', 'stepline', 'stepline', 'stepline'],
		width: [6, 2, 2, 2, 2]
	},
	title: {
		text: 'Dynamic data'
	},
	markers: {
		hover: {
			sizeOffset: 5
		}
	},
	xaxis: {
		type: 'numeric',
		categories: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
	},
})
</script>

<template lang="pug">
q-page(padding)
	.container
		.hd Примеры графиков
		q-card.q-mb-md.rel
			q-card-section
				VueApexCharts(ref="chart" :options="options1" :series="series1" @selection="test" )
			.count(v-if="sss")
				span {{ calc }}
				q-btn(dense flat round icon="mdi-check-bold" @click="setSelection") 
		q-card
			q-card-section
				VueApexCharts(:options="options" :series="series")

</template>

<style scoped lang="scss">
.hd {
	font-size: 2.125rem;
}

.q-card {
	width: 800px;
}

.rel {
	position: relative;
}

.count {
	position: absolute;
	top: v-bind(top);
	left: v-bind(left);

	span {
		font-size: 1.3rem;
	}

	.q-btn {
		transform: translateY(-5px);
		margin-left: 4px;
	}
}

:deep(.apexcharts-selection-rect) {
	background: #dedede;
}

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
