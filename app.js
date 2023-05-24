const increaseBtn = document.querySelector('.counter__button--increase')
const decreaseBtn = document.querySelector('.counter__button--decrease')
const counterValue = document.querySelector('.counter__value')
const counterResetBtn = document.querySelector('.counter__reset-button')

let globalCounter = 0

counterResetBtn.addEventListener('click', function () {
    counterValue.textContent = +0
})

decreaseBtn.addEventListener('click', function () {
    const currentValue = counterValue.textContent

    const currentValueAsNumber = +currentValue

    const newValue = currentValueAsNumber - 1

    counterValue.textContent = newValue

})

increaseBtn.addEventListener('click', function () {
    const currentValue = counterValue.textContent

    const currentValueAsNumber = +currentValue

    const newValue = currentValueAsNumber + 1

    counterValue.textContent = newValue
})


