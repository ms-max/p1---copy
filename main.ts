input.onGesture(Gesture.Shake, function () {
    i = randint(0, 2)
    if (i == 0) {
        basic.showIcon(IconNames.Happy)
    } else if (i == 1) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Heart)
    }
})
let i = 0
basic.showIcon(IconNames.Target)
