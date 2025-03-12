let direçao = 0
basic.forever(function () {
    direçao = input.compassHeading()
    if (direçao < 45 || direçao > 315) {
        basic.showString("n")
    } else {
        basic.showString("n")
    }
})
