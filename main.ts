 let score = 0
let bob = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(bob, 80, 80)
bob.setFlag(SpriteFlag.StayInScreen, true)
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . b b b b . .
    . b 5 5 5 5 b .
    b 5 d 3 3 d 5 b
    b 5 3 5 5 1 5 b
    c 5 3 5 5 1 d c
    c d d 1 1 d d c
    . f d d d d f .
    . . f f f f . .
`, SpriteKind.Food)
let mySprite2 = sprites.create(img`
    . . b b b b . .
    . b 5 5 5 5 b .
    b 5 d 3 3 d 5 b
    b 5 3 5 5 1 5 b
    c 5 3 5 5 1 d c
    c d d 1 1 d d c
    . f d d d d f .
    . . f f f f . .
`, SpriteKind.Food)
let mySprite3 = sprites.create(img`
    . . b b b b . .
    . b 5 5 5 5 b .
    b 5 d 3 3 d 5 b
    b 5 3 5 5 1 5 b
    c 5 3 5 5 1 d c
    c d d 1 1 d d c
    . f d d d d f .
    . . f f f f . .
`, SpriteKind.Food)
let mySprite4 = sprites.create(img`
    . . b b b b . .
    . b 5 5 5 5 b .
    b 5 d 3 3 d 5 b
    b 5 3 5 5 1 5 b
    c 5 3 5 5 1 d c
    c d d 1 1 d d c
    . f d d d d f .
    . . f f f f . .
`, SpriteKind.Food)
let mySprite5 = sprites.create(img`
    . . b b b b . .
    . b 5 5 5 5 b .
    b 5 d 3 3 d 5 b
    b 5 3 5 5 1 5 b
    c 5 3 5 5 1 d c
    c d d 1 1 d d c
    . f d d d d f .
    . . f f f f . .
`, SpriteKind.Food)
let mySprite6 = sprites.create(img`
    . . b b b b . .
    . b 5 5 5 5 b .
    b 5 d 3 3 d 5 b
    b 5 3 5 5 1 5 b
    c 5 3 5 5 1 d c
    c d d 1 1 d d c
    . f d d d d f .
    . . f f f f . .
`, SpriteKind.Food)
let mySprite7 = sprites.create(img`
    . . b b b b . .
    . b 5 5 5 5 b .
    b 5 d 3 3 d 5 b
    b 5 3 5 5 1 5 b
    c 5 3 5 5 1 d c
    c d d 1 1 d d c
    . f d d d d f .
    . . f f f f . .
`, SpriteKind.Food)
let mySprite8 = sprites.create(img`
    . . b b b b . .
    . b 5 5 5 5 b .
    b 5 d 3 3 d 5 b
    b 5 3 5 5 1 5 b
    c 5 3 5 5 1 d c
    c d d 1 1 d d c
    . f d d d d f .
    . . f f f f . .
`, SpriteKind.Food)
let mySprite9 = sprites.create(img`
    . . b b b b . .
    . b 5 5 5 5 b .
    b 5 d 3 3 d 5 b
    b 5 3 5 5 1 5 b
    c 5 3 5 5 1 d c
    c d d 1 1 d d c
    . f d d d d f .
    . . f f f f . .
`, SpriteKind.Food)
let mySprite10 = sprites.create(img`
    . . b b b b . .
    . b 5 5 5 5 b .
    b 5 d 3 3 d 5 b
    b 5 3 5 5 1 5 b
    c 5 3 5 5 1 d c
    c d d 1 1 d d c
    . f d d d d f .
    . . f f f f . .
`, SpriteKind.Food)
let exit = sprites.create(img`
    f f f f f f f f f f f f f f f f f f
    f 2 2 2 f 2 f f f f 2 f 2 f f 2 f f
    f 2 f f f f 2 f f 2 f f f f f 2 f f
    f 2 f f f f f 2 2 f f f 2 f 2 2 2 f
    f 2 2 2 f f f 2 2 f f f 2 f f 2 f f
    f 2 f f f f 2 f f 2 f f 2 f f 2 f f
    f 2 2 2 f 2 f f f f 2 f 2 f f 2 f f
    f f f f f f f f f f f f f f f f f f
`, SpriteKind.Projectile)
let enemy = sprites.create(assets.image`myImage`, SpriteKind.Enemy)
let enemy2 = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)
let enemy3 = sprites.create(assets.image`myImage0`, SpriteKind.Enemy)

mySprite.setPosition(Math.randomRange(1, 160), Math.randomRange(1, 120))
mySprite2.setPosition(Math.randomRange(1,160), Math.randomRange(1,120))
mySprite3.setPosition(Math.randomRange(1, 160), Math.randomRange(1, 120))
mySprite4.setPosition(Math.randomRange(1, 160), Math.randomRange(1, 120))
mySprite5.setPosition(Math.randomRange(1, 160), Math.randomRange(1, 120))
mySprite6.setPosition(Math.randomRange(1, 160), Math.randomRange(1, 120))
exit.setPosition(150, 115)
mySprite7.setPosition(Math.randomRange(1, 160), Math.randomRange(1, 120))
mySprite8.setPosition(Math.randomRange(1, 160), Math.randomRange(1, 120))
mySprite9.setPosition(Math.randomRange(1, 160), Math.randomRange(1, 120))
mySprite10.setPosition(Math.randomRange(1, 160), Math.randomRange(1, 120))
bob.setPosition(10, 10)
enemy.setPosition(150, 100)
enemy2.setPosition(130, 110)
enemy3.setPosition(130, 100)
game.showLongText("Collect the coins and get to the exit while avoiding Phantoms!", DialogLayout.Bottom)
forever(function(){
    enemy.follow(bob, 70, 70)
    enemy2.follow(bob, 60, 60)
    enemy3.follow(bob, 50, 50)
})


sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function(sprite: Sprite, otherSprite: Sprite) {
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
    info.changeScoreBy(10)
    otherSprite.destroy(effects.confetti, 100)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function(sprite: Sprite, otherSprite: Sprite) {
   game.gameOver(true)
   game.gameOverPlayerWin(null)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function(sprite: Sprite, otherSprite: Sprite) {
    game.setGameOverMessage(true, "You Lost!")
    game.gameOver(null)
})
