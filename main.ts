sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
scene.setBackgroundColor(15)
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . 1 f f 1 . . . . . . 
    . . . . . 1 d f f d 1 . . . . . 
    . . . . 2 d f f f f d 2 . . . . 
    . . . 1 d d d d d d d d 1 . . . 
    . . 1 d d d d d d d d d d 1 . . 
    . 1 d d d d d d d d d d d d 1 . 
    2 1 1 1 1 1 1 d d 1 1 1 1 1 1 2 
    . . . . . . 1 d d 1 . . . . . . 
    . . . . . 1 d d d d 1 . . . . . 
    . . . . 2 1 1 1 1 1 1 2 . . . . 
    . . . . . . . 2 2 . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.startEffect(effects.trail)
controller.moveSprite(mySprite)
let mySprite2 = sprites.create(img`
    . . . . . . . f . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
forever(function () {
    mySprite2.setPosition(randint(1, 100), randint(1, 10))
    pause(5000)
})
forever(function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . d d d f f d d d . . . . 
        . . . 1 1 1 1 d d d d d d . . . 
        . . d 1 1 1 1 b b b 1 1 d d . . 
        . . 1 1 1 1 1 b b b 1 1 f d . . 
        . d 1 1 1 1 b b b b b f f d d . 
        . d 1 1 1 b b f d d d d f d d . 
        . d d 1 1 b f d d d d d d d d . 
        . d b 1 1 b f d d d d d d d d . 
        . . d b 1 1 f d d d d d f d . . 
        . . d b b 1 b f d d d f d d . . 
        . . . d b b b b b b b b d . . . 
        . . . . d d b b b b d d . . . . 
        . . . . . . d d d d . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 50, 50)
    pause(5000)
})
