basic.showString("Opdracht 4")
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Square)
        basic.pause(500)
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(200)
        basic.clearScreen()
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showArrow(ArrowNames.East)
        basic.pause(1000)
        basic.showArrow(ArrowNames.West)
        basic.pause(1000)
    } else if (input.buttonIsPressed(Button.AB)) {
        basic.showString("42")
    } else {
        basic.showIcon(IconNames.Yes)
        basic.pause(200)
        basic.showIcon(IconNames.No)
        basic.pause(200)
    }
})
