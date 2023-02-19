// variables
const calculator = document.querySelector('#calculator')
const display = calculator.querySelector('#display span')
const keys = calculator.querySelector('.button')
const operatorKeys = keys.querySelectorAll('[data-type="operator"]')
let memory = []
// click action
keys.addEventListener('click', (e) => {
	if (!e.target.closest('button')) return

	const key = e.target
	const keyValue = key.textContent
	const displayValue = display.textContent
	const { type } = key.dataset
	const { previousKeyType } = calculator.dataset

	// id this is number key
	if (type === 'number') {
		if (
			displayValue === '0' ||
			previousKeyType === 'operator' ||
			previousKeyType === 'equal'
		) {
			display.textContent = keyValue
		} else {
			display.textContent = displayValue + keyValue
		}
	}

	if (type === 'decimal') {
		if (!displayValue.includes('.')) {
			display.textContent = displayValue + '.'
		} else if (previousKeyType === 'operator' || previousKeyType === 'equal') {
			display.textContent = '0.'
		}
	}
	if (type === 'backspace') {
		current = display.textContent
		if (current === '0' || current.length < 2) {
			display.textContent = '0'
		} else {
			display.textContent = current.substr(0, display.textContent.length - 1)
		}
	}
	if (type === 'percent') {
		display.textContent = (displayValue / 100).toFixed(2)
	}
	if (type === 'zerozero') {
		if (display.textContent === '0' || previousKeyType === 'operator') {
			display.textContent = displayValue
		} else {
			display.textContent = displayValue + keyValue
		}
	}
	// if this is an operator

	if (type === 'operator') {
		// operatorKeys.forEach((el) => {
		// 	el.dataset.state = ''
		// })
		// key.dataset.state = 'selected'

		const firstNumber = calculator.dataset.firstNumber
		const operator = calculator.dataset.operator
		const secondNumber = displayValue

		if (
			firstNumber &&
			operator &&
			previousKeyType !== 'operator' &&
			previousKeyType !== 'equal'
		) {
			const calcValue = calculate(firstNumber, operator, secondNumber)
			display.textContent = calcValue

			calculator.dataset.firstNumber = calcValue
		} else {
			calculator.dataset.firstNumber = displayValue
		}

		calculator.dataset.operator = key.dataset.key
	}

	if (type === 'equal') {
		let firstNumber = calculator.dataset.firstNumber
		const operator = calculator.dataset.operator
		let secondNumber = displayValue

		if (firstNumber) {
			if (previousKeyType === 'equal') {
				firstNumber = displayValue
				secondNumber = calculator.dataset.modValue
			}
			display.textContent = calculate(firstNumber, operator, secondNumber)
		}

		calculator.dataset.modValue = secondNumber
	}

	if (type !== 'clear') {
		const clearBtn = calculator.querySelector('[data-type="clear"]')
		clearBtn.textContent = 'CE'
	}
	if (type === 'clear') {
		if (key.textContent === 'AC') {
			calculator.dataset.firstValue = ''
			calculator.dataset.modValue = ''
			calculator.dataset.operator = ''
			calculator.dataset.previousKeyType = ''
		} else {
			key.textContent = 'AC'
		}
		display.textContent = 0
		key.textContent = 'AC'
		operatorKeys.forEach((el) => {
			el.dataset.state = ''
		})
	}
	calculator.dataset.previousKeyType = type
})

const calculate = (firstNumber, operator, secondNumber) => {
	firstNumber = parseFloat(firstNumber)
	secondNumber = parseFloat(secondNumber)

	if (operator === 'add') return firstNumber + secondNumber
	if (operator === 'substract') return firstNumber - secondNumber
	if (operator === 'multiply') return firstNumber * secondNumber
	if (operator === 'divide') return firstNumber / secondNumber
}