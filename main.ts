input.onPinPressed(TouchPin.P0, function () {
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # #
            # . . . .
            . . . # .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # #
            # . . # .
            `)
        basic.pause(100)
    }
    for (let index = 0; index < 15; index++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . # # # .
            # . . . #
            `)
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            . # # # .
            . . # . .
            . # . # .
            . # . # .
            `)
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.A, function () {
    x = 0
    for (let x = 0; x <= 4; x++) {
        led.plot(x, 2)
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index <= 15; index++) {
        basic.showIcon(IconNames.Surprised)
        basic.pause(100)
        basic.showIcon(IconNames.Asleep)
        basic.pause(100)
    }
    basic.clearScreen()
})
let x = 0
for (let index = 0; index < 4; index++) {
    basic.showArrow(ArrowNames.North)
    basic.showArrow(ArrowNames.East)
    basic.showArrow(ArrowNames.South)
    basic.showArrow(ArrowNames.West)
}
basic.clearScreen()
