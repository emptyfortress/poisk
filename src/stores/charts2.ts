const series = [
	{
		type: 'rangeArea',
		name: 'Phase 1 Range',

		data: [
			{
				x: 'Jan',
				y: [1100, 1900]
			},
			{
				x: 'Feb',
				y: [1200, 1800]
			},
			{
				x: 'Mar',
				y: [900, 2900]
			},
			{
				x: 'Apr',
				y: [1400, 2700]
			},
			{
				x: 'May',
				y: [2600, 3900]
			},
			{
				x: 'Jun',
				y: [500, 1700]
			},
			{
				x: 'Jul',
				y: [1900, 2300]
			},
			{
				x: 'Aug',
				y: [1000, 1500]
			}
		]
	},

	{
		type: 'rangeArea',
		name: 'Phase 2 Range',
		data: [
			{
				x: 'Jan',
				y: [3100, 3400]
			},
			{
				x: 'Feb',
				y: [4200, 5200]
			},
			{
				x: 'Mar',
				y: [3900, 4900]
			},
			{
				x: 'Apr',
				y: [3400, 3900]
			},
			{
				x: 'May',
				y: [5100, 5900]
			},
			{
				x: 'Jun',
				y: [5400, 6700]
			},
			{
				x: 'Jul',
				y: [4300, 4600]
			},
			{
				x: 'Aug',
				y: [2100, 2900]
			}
		]
	},

	{
		type: 'rangeArea',
		name: 'Phase 3 Range',
		data: [
			{
				x: 'Jan',
				y: [6000, 6200]
			},
			{
				x: 'Feb',
				y: [5000, 5300]
			},
			{
				x: 'Mar',
				y: [5200, 5400]
			},
			{
				x: 'Apr',
				y: [6000, 6800]
			},
			{
				x: 'May',
				y: [5100, 6500]
			},
			{
				x: 'Jun',
				y: [6400, 6700]
			},
			{
				x: 'Jul',
				y: [5300, 5600]
			},
			{
				x: 'Aug',
				y: [3100, 3900]
			}
		]
	},
	{
		type: 'line',
		name: 'Phase 2 Median',
		data: [
			{
				x: 'Jan',
				y: 1500
			},
			{
				x: 'Feb',
				y: 1700
			},
			{
				x: 'Mar',
				y: 1900
			},
			{
				x: 'Apr',
				y: 2200
			},
			{
				x: 'May',
				y: 3000
			},
			{
				x: 'Jun',
				y: 1000
			},
			{
				x: 'Jul',
				y: 2100
			},
			{
				x: 'Aug',
				y: 1200
			},
			{
				x: 'Sep',
				y: 1800
			},
			{
				x: 'Oct',
				y: 2000
			}
		]
	},
	{
		type: 'line',
		name: 'Phase 1 Median',
		data: [
			{
				x: 'Jan',
				y: 3300
			},
			{
				x: 'Feb',
				y: 4900
			},
			{
				x: 'Mar',
				y: 4300
			},
			{
				x: 'Apr',
				y: 3700
			},
			{
				x: 'May',
				y: 5500
			},
			{
				x: 'Jun',
				y: 5900
			},
			{
				x: 'Jul',
				y: 4500
			},
			{
				x: 'Aug',
				y: 2400
			},
			{
				x: 'Sep',
				y: 2100
			},
			{
				x: 'Oct',
				y: 1500
			}
		]
	},
	{
		type: 'line',
		name: 'Phase 3 Median',
		data: [
			{
				x: 'Jan',
				y: 6050
			},
			{
				x: 'Feb',
				y: 5100
			},
			{
				x: 'Mar',
				y: 5300
			},
			{
				x: 'Apr',
				y: 6550
			},
			{
				x: 'May',
				y: 5800
			},
			{
				x: 'Jun',
				y: 6500
			},
			{
				x: 'Jul',
				y: 5500
			},
			{
				x: 'Aug',
				y: 3700
			},
			{
				x: 'Sep',
				y: 3500
			},
			{
				x: 'Oct',
				y: 3400
			}
		]
	}

]

const options = {
	chart: {
		type: 'rangeArea',
		animations: {
			speed: 500
		}
	},
	colors: ['#d4526e', '#33b2df', '#4b8353', '#d4526e', '#33b2df', '#4b8353'],
	dataLabels: {
		enabled: false
	},
	fill: {
		opacity: [0.24, 0.24, 0.24, 1, 1, 1]
	},
	forecastDataPoints: {
		count: 2
	},
	stroke: {
		curve: 'straight',
		width: [0, 0, 0, 2, 2, 2]
	},
	title: {
		text: 'Range Area with Forecast Line (Combo)'
	},
	markers: {
		hover: {
			sizeOffset: 5
		}
	}
}

const options1 = {
	chart: {
		type: 'line',
		animations: {
			speed: 500
		},
		zoom: {
			enabled: false
		},
		selection: {
			enabled: true,
		},
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
		categories: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110],
	},
}

const series1 = [
	{
		type: 'line',
		name: 'Parameter 1',
		data: [103, 105, 100, 20, 0, 0, 5, 0, 0, 0, 0, 0]
	},
	{
		type: 'line',
		name: 'Parameter 2',
		data: [90, 90, 90, 90, 90, 98, 98, 98, 98, 98, 98, 98]
	},
	{
		type: 'line',
		name: 'Parameter 3',
		data: [100, 100, 85, 85, 85, 85, 85, 85, 85, 85, 85, 85]
	},
	{
		type: 'line',
		name: 'Parameter 4',
		data: [112, 112, 112, 108, 108, 108, 108, 108, 108, 108, 108, 108]
	},
	{
		type: 'line',
		name: 'Parameter 5',
		data: [114, 114, 114, 114, 110, 110, 110, 110, 110, 110, 110, 110]
	}

]

export { options, options1, series, series1 }
