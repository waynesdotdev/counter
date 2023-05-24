const increaseBtn = document.querySelector('.counter__button--increase')
const decreaseBtn = document.querySelector('.counter__button--decrease')
const counterValue = document.querySelector('.counter__value')
const counterResetBtn = document.querySelector('.counter__reset-button')
const counterEl = document.querySelector('.counter')
const counterTitle = document.querySelector('.counter__title')

const incrementCounter = () => {
    const currentValue = counterValue.textContent
    const currentValueAsNumber = +currentValue
    let newValue = currentValueAsNumber + 1;

    if (newValue > 5) {
        newValue = 5
        counterEl.classList.add('counter--limit')
        counterTitle.innerHTML = `Limit! Buy <strong>Pro</strong> for $5`

        increaseBtn.disabled = true
        decreaseBtn.disabled = true
    }


    counterValue.textContent = newValue
}

counterResetBtn.addEventListener('click', () => {
    counterValue.textContent = +0
    counterEl.classList.remove('counter--limit')
    counterTitle.innerHTML = `Nice Counter`
    increaseBtn.disabled = false
    decreaseBtn.disabled = false
    counterResetBtn.blur()
})

decreaseBtn.addEventListener('click', () => {
    const currentValue = counterValue.textContent

    const currentValueAsNumber = +currentValue

    const newValue = currentValueAsNumber - 1;
    if (newValue < 0) return // dont go below 0

    counterValue.textContent = newValue
})

increaseBtn.addEventListener('click', incrementCounter)


document.addEventListener('keydown', incrementCounter)