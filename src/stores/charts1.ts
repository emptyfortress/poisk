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
		zoom: {
			enabled: false,
		},
	},
	dataLabels: {
		enabled: true,
	},
	stroke: {
		curve: 'smooth',
	},
	// title: {
	// 	text: 'Вольт',
	// 	align: 'left',
	// },
	yaxis: {
		opposite: true,
	},
}


const randomArray = (length: number, min: number, max: number) => {
	let result = []
	while (result.length < length) {
		let random = Math.floor(Math.random() * (max - min + 1) + min)
		result.push(random)
	}
	return result
}

const seriesTable1 = [{ data: randomArray(9, 100, 70) }]
const seriesTable2 = [{ data: randomArray(9, 10, 50) }]
const seriesTable3 = [{ data: randomArray(9, 40, 100) }]



export {
	chartOptions1,
	seriesTable1,
	seriesTable2,
	seriesTable3,
}
