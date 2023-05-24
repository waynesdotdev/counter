const increaseBtn = document.querySelector('.counter__button--increase')
const decreaseBtn = document.querySelector('.counter__button--decrease')
const counterValue = document.querySelector('.counter__value')
const counterResetBtn = document.querySelector('.counter__reset-button')

function incrementCounter() {
    const currentValue = counterValue.textContent
    const currentValueAsNumber = +currentValue
    const newValue = currentValueAsNumber + 1
    counterValue.textContent = newValue
}

counterResetBtn.addEventListener('click', function () {
    counterValue.textContent = +0
})

decreaseBtn.addEventListener('click', function () {
    const currentValue = counterValue.textContent

    const currentValueAsNumber = +currentValue

    const newValue = currentValueAsNumber - 1;
    if(newValue < 0) return // dont go below 0

    counterValue.textContent = newValue

})

increaseBtn.addEventListener('click', incrementCounter)


document.addEventListener('keydown', incrementCounter)