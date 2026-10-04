input.onButtonPressed(Button.A, function () {
    SOUL.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    SOUL.change(LedSpriteProperty.X, 1)
})
let bullet: game.LedSprite = null
let SOUL: game.LedSprite = null
SOUL = game.createSprite(2, 4)
let HP = 240
basic.forever(function () {
    bullet = game.createSprite(randint(0, 4), 0)
    basic.pause(300)
    for (let index = 0; index < 4; index++) {
        bullet.change(LedSpriteProperty.Y, 1)
    }
    if (bullet.isTouching(SOUL)) {
        HP += -20
    }
    bullet.delete()
    basic.pause(500)
    if (HP == 0) {
        game.gameOver()
    }
})
