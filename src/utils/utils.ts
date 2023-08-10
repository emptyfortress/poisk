const req = [(val: string) => (val && val.length > 0) || 'Это обязательное поле']
const reqnum = [(val: number) => val >= 0 || 'Недопустимое значение']
const reqtrue = [() => true || 'always true']

const randomArray = (length: number, min: number, max: number) => {
	let result = []
	while (result.length < length) {
		let random = Math.floor(Math.random() * (max - min + 1) + min)
		result.push(random)
	}
	return result
}

const randomNumber = (min: number, max: number, fixed: number) => {
	return (Math.random() * (max - min + 1) + min).toFixed(fixed)
}

export { req, reqnum, reqtrue, randomNumber, randomArray }
