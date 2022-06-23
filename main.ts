input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    אופקי += 1
    if (אופקי > 4) {
        אופקי = 0
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    אנכי += 1
    if (אנכי > 4) {
        אנכי = 0
    }
})
let אנכי = 0
let אופקי = 0
אופקי = 0
אנכי = 0
loops.everyInterval(500, function () {
    led.toggle(אופקי, אנכי)
})
basic.forever(function () {
	
})
