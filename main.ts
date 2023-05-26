input.onButtonPressed(Button.A, function () {
    if (Cond == 1) {
        answer = "" + answer + "A"
        Check()
    } else {
        game.gameOver()
    }
})
function Check () {
    if (answer.length == length) {
        if (answer == Question) {
            basic.showLeds(`
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                . . . . .
                `)
            game.addScore(1)
            basic.pause(500)
            Generate()
        } else {
            basic.showLeds(`
                # . . . #
                . # . # .
                . . # . .
                . # . # .
                # . . . #
                `)
            game.gameOver()
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    Generate()
})
input.onButtonPressed(Button.B, function () {
    if (Cond == 1) {
        answer = "" + answer + "B"
        Check()
    } else {
        game.gameOver()
    }
})
function Generate () {
    basic.showLeds(`
        # # # # #
        # . . . #
        # . # . #
        # . . . #
        # # # # #
        `)
    basic.pause(50)
    answer = ""
    Question = ""
    length = 2 + (level - 1 - 2)
    Cond = 1
    for (let index = 0; index < length; index++) {
        RandNum = randint(1, 2)
        Cond = 0
        if (RandNum == 1) {
            AB = "A"
        } else {
            AB = "B"
        }
        if (game.isGameOver()) {
            break;
        }
        basic.showString("" + (AB))
        basic.pause(delay)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        Question = "" + Question + AB
    }
    if (!(game.isGameOver())) {
        level += 1
        if (delay >= 50) {
            delay += -50
        }
        Cond = 1
        basic.showString("?")
    }
}
let AB = ""
let RandNum = 0
let Question = ""
let length = 0
let answer = ""
let Cond = 0
let delay = 0
let level = 0
led.setBrightness(25)
basic.showLeds(`
    . . . . .
    . # . # .
    # # . # #
    . # . # .
    . . . . .
    `)
level = 1
delay = 500
game.setScore(0)
