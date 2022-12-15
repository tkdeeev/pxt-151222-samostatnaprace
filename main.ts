/*



hod koustkou (6)

zobrazeni hodnoty kostky (tecky)

vyhodnoceni

*/
/*
let throws = [images.createImage(`
. . . . .
. . . . .
. . # . .
. . . . .
. . . . .
`), images.createImage(`
. . . . .
. . . # .
. . . . .
. # . . .
. . . . .
`), images.createImage(`
. . . . .
. . . # .
. . # . .
. # . . .
. . . . .
`), images.createImage(`
. . . . .
. # . # .
. . . . .
. # . # .
. . . . .
`), images.createImage(`
. . . . .
. # . # .
. . # . .
. # . # .
. . . . .
`), images.createImage(`
. . . . .
. # . # .
. # . # .
. # . # .
. . . . .
`)]*/

function showThrownNumber (showNum : number) {
    switch (showNum) {
        case 1:
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
            `)
            break;

        case 2:
            basic.showLeds(`
                . . . . .
                . . . # .
                . . . . .
                . # . . .
                . . . . .
            `)
            break;

        case 3:
            basic.showLeds(`
                . . . . .
                . . . # .
                . . # . .
                . # . . .
                . . . . .
            `)
            break;

        case 4:
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                . # . # .
                . . . . .
            `)
            break;

        case 5:
            basic.showLeds(`
                . . . . .
                . # . # .
                . . # . .
                . # . # .
                . . . . .
            `)
            break;;

        case 6:
            basic.showLeds(`
                . . . . .
                . # . # .
                . # . # .
                . # . # .
                . . . . .
            `)
            break;

        default:
            break;
    }
}

let guess = 1
let stage = "hod"

input.onGesture(Gesture.Shake, function () {
    if (stage != "hod") return;
    stage = "thrown"
    let rng = randint(1, 6)
    showThrownNumber(rng)
    if(rng == guess) {
        music.playTone(400, 500)
    } else {
        music.playTone(200, 500)
    }
    basic.pause(1000)
    stage = "hod"
    basic.showNumber(guess)
})


input.onButtonPressed(Button.A, function() {
    if(stage != "hod") return;
    guess--
    if(guess < 1) {
        guess = 6
    }
    basic.showNumber(guess)
})

input.onButtonPressed(Button.B, function () {
    if (stage != "hod") return;
    guess++
    if (guess > 6) {
        guess = 1
    }
    basic.showNumber(guess)
})