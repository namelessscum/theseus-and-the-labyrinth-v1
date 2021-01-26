namespace SpriteKind {
    export const GUN = SpriteKind.create()
    export const redbanana = SpriteKind.create()
    export const coins = SpriteKind.create()
    export const orthus = SpriteKind.create()
    export const serpents = SpriteKind.create()
    export const minotaur = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.coins, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    otherSprite.destroy()
    music.baDing.play()
})
function characterAnim () {
    animation.runImageAnimation(
    mySprite,
    [img`
        .....ffffff...b.
        ...ff666666ffbb.
        ..f666666666cdb.
        .f6666666666ddb.
        .f8666666666cdb.
        .f8666699666cdb.
        f88899999999cdbf
        f88888888888cdbf
        .fffffffffffcdb.
        .cc4bf4444fbcdb.
        .c4d1fddddf1cdb.
        .ccdddddddddcdb.
        ..ccddddddddcdb.
        ...cceeeeeeccbb.
        ...44fff444f444.
        ..4df86f4ddfdd4.
        ..4df866ffffdd4.
        ..eef866666f44..
        ....f444444f....
        ...f6666666f....
        ....ffffffff....
        .....fff.ff.....
        .....fff........
        ................
        ................
        `,img`
        ................
        .....ffffff.....
        ...ff666666ff...
        ..f6666666666f..
        .f666666666666f.
        .f866666666666f.
        .f866669966666f.
        f88899999999666f
        f88888888888888f
        .ffffffffffffff.
        .cc4bf4444fb4cc.
        .c4d1fddddf1d4c.
        .ccddddddddddcc.
        ..ccddddddddcc..
        ...cceeeeeecc...
        ...44fff444f4...
        ..4df86f4ddfd4..
        ..4df866ffffbccc
        ..eef866666fcddc
        ....f444444f.cc.
        ...f6666666f....
        ....ffffffff....
        .....ff.fff.....
        ........fff.....
        ................
        `,img`
        .....ffffff.....
        ...ff666666ff...
        ..f6666666666f..
        .f666666666666f.
        .f866666666666f.
        .f866669966666f.
        f88899999999666f
        f88888888888888f
        .ffffffffffffff.
        .cc4bf4444fb4cc.
        .c4d1fddddf1d4c.
        .ccddddddddddcc.
        ..ccddddddddcc..
        ...cceeeeeecc...
        .444ffff444f4...
        .4ddf66f4ddfd4..
        .4ddf666ffffbccc
        ..44f866666fcddc
        ....f444444f.cc.
        ....f8666666f...
        ....ffffffff....
        .....fff.ff.....
        .....fff........
        ................
        ................
        `,img`
        ................
        .....ffffff.....
        ...ff666666ff...
        ..f6666666666f..
        .f666666666666f.
        .f866666666666f.
        .f866669966666f.
        f88899999999666f
        f88888888888888f
        .ffffffffffffff.
        .cc4bf4444fb4cc.
        .c4d1fddddf1d4c.
        .ccddddddddddcc.
        ..ccddddddddcc..
        ...cceeeeeecc...
        ...44fff444f4...
        ..4df86f4ddfd4..
        ..4df866ffffbccc
        ..eef866666fcddc
        ....f444444f.cc.
        ...f6666666f....
        ....ffffffff....
        .....ff.fff.....
        ........fff.....
        ................
        `],
    200,
    true
    )
}
function storyline_1 () {
    game.showLongText("T H E S E U S", DialogLayout.Bottom)
    game.showLongText("You have arrived", DialogLayout.Bottom)
    athena()
    game.showLongText("You've been sent to the Labyrinth of Daedalus. ", DialogLayout.Bottom)
    game.showLongText("Slay the beast of Minos and you shall be honored among the Olympians", DialogLayout.Bottom)
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    game.showLongText("Joystick- Movement" + "B- Fight", DialogLayout.Bottom)
    game.showLongText("Collect the coins" + "Find the Orange Gate " + "SLAY THE BEAST", DialogLayout.Bottom)
}
function minotaur_life_dialog_function () {
    minos_life_caller = 1
}
function theRandomSpawn () {
    if (theRandomSpawner == 1) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(82, 2))
    } else if (theRandomSpawner == 2) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(97, 50))
    } else if (theRandomSpawner == 3) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(97, 88))
    } else if (theRandomSpawner == 4) {
        tiles.placeOnTile(mySprite, tiles.getTileLocation(2, 92))
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.minotaur, function (sprite, otherSprite) {
    pause(3000)
    if (controller.B.isPressed()) {
        minotaur_lifes += -1
    } else {
        info.changeLifeBy(-1)
        sprite.x += 10
    }
    if (minotaur_lifes == 0) {
        MINOTAUR.destroy(effects.disintegrate, 500)
        music.stopAllSounds()
        info.changeScoreBy(50)
        theseus_of_athens()
        tiles.setTilemap(tilemap`level3`)
        athena()
        game.showLongText("CONGRATULATIONS", DialogLayout.Bottom)
        game.showLongText("You have slayed the beast", DialogLayout.Bottom)
        game.showLongText("Go forth! Claim your glory.", DialogLayout.Bottom)
        game.over(true, effects.confetti)
    }
})
function theseus_of_athens () {
    music.baDing.loop()
    pause(5000)
    music.baDing.stop()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile19`, function (sprite, location) {
    level = 11
    tiles.setTilemap(tilemap`level1`)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(25, 50))
    minotaur_lifes = 10
    MINOTAUR = sprites.create(img`
        .......f..............f.......
        .......fff..........fff.......
        .......f6ffffffffffff6f.......
        .......f66fddddddddf66f.......
        ........ffdbbbbbbbbdff........
        .........fbbbbbbbbbbf.........
        .........fbfbbbbbbfbf.........
        .........fbbffbbffbbf.........
        .........fcb2bbbb2bcf.........
        .........fcbbbbbbbbcf.........
        ..........fbbbbbbbbf..........
        ..........fcffffffcf..........
        ........ffffddddddffff........
        .....fffddfbdfddfdbfddfff.....
        ....fdddbbbfbbbbbbfbbbdddf....
        ...fddbbbbbbffffffbbbbbbddf...
        ...fdbbbbbbbbbbbbbbbbbbbbdf...
        ...fbbbcbbbbbbbbbbbbbbcbbbf...
        ...fbbbcbbbbbbbbbbbbbbcbbbf...
        ...fbbccbbbbbbbbbbbbbbccbbf...
        ...fbccfbbbbbbbbbbbbbbfccbf...
        ..ffbbccfbbbbbccbbbbbfccbbff..
        ..fdbbbbffccccbbccccffbbbbdf..
        .ffbbbbf.fbbbbbbbbbbf.fbbbbff.
        .fdbbbf..fdbbbbbbbbdf..fbbbdf.
        .fdbbf...edbbbbbbbbde...fbbdf.
        ffdbbbf..5eeee55eeee5..fbbbdff
        fdbbbbbf.e5555555555e.fbbbbbdf
        .fcbbbbf.cee555555eec.fbbbbcf.
        .ffcbbbbfcc22222222ccfbbbbcff.
        ..ffcbbbbff2222222cffbbbbcff..
        ...ffcbbbbbfc2222cfbbbbbcff...
        ....ffcbbbbf.cc22cfbbbbcff....
        .....ffccccf...c2.fccccff.....
        .......fffff....2.fffff.......
        ...............22.............
        .............222..............
        ............22................
        .............222..............
        ...............2..............
        ...............2..............
        ..............................
        .............ffff.............
        ............ffffff............
        .............ffff.............
        ..............................
        ..............................
        ..............................
        `, SpriteKind.minotaur)
    MINOTAUR.follow(mySprite, 85)
    minotaur_life_dialog_function()
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`tile6`, function (sprite, location) {
    music.baDing.play()
    info.changeScoreBy(1)
    tiles.setTileAt(location, assets.tile`tile4`)
    if (info.score() == 60) {
        game.showLongText("all eggs have been collected", DialogLayout.Bottom)
    }
})
info.onLifeZero(function () {
    game.over(false)
})
function athena () {
    scene.setBackgroundImage(img`
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222fffcccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222ffcccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222222ffccccccccccccccccccccccccccccc
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccf2222222222222fcccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccf222222dd22222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccfddddddffd2222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccc15ffffff55fd222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cc155f5555555fd222fccc5555555555555555555555555
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1555555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f555ff55555f222fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1feef5feeef555ff22fccccccccccccccccccccccccccc
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15ff555fef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef555fccf2fccc5555555555555ccdc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccc3cccccccccc15fe4f44ef55f33cf2fccc5555555555555ccdc5555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33333cccccccccc5f444444f55f33cf22fcccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a3a333ccccccc35f442444f5fa33cf222fcccccccccccccccddcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aa333aa333cccc3a5fe4444ef5fa33ccfffccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a33a3333a3333aa3afaaeeeeeafaaa33ccccccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3a3aa3aa3a3aaa333aaaaaeeeeeaaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3a3aaaa3333aaaaaaaaa4444eeaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffaaaaaaaaaaaaa44444444eeaaa3cccccccccccccccccccddbdccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222ffaaaaaaaaa444444444444eeee4ccccccccccccccccccdbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222222222ffaaaa444444444444444444ee4ccccccccccccccccddbbdbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22222eeeeeeeeeee22222faaa44444444444444444444e4cccccccccccccccddbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222.eefffffffffffee.222fa444444444444444555555e4cccccccccccccccddbddbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222eeffeeeeeeeeeeeffee222f44444444444555555555554ccccccccccccccccdbdbccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222effee555eeeee555eeffe222f44e4445555555555555555cccccccccccccccccbbcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efee555555eee555554eefe222f4e45555555555555ee4455ccccccccccccccccebcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efeee5555554e5555554eeefe222fe5555555552222eee4445ccccccccccccccccefcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efeee45555554e55555444eeefe22fe5555222222222eee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22.efee5e4555554e5555444e4eefe.22f55522222222222ee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efe5555e455554e555444e5544efe22f2e222222222222eee444cccccccccccc4444444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccf222efe55555e45554e55444e55554efe222fe222222222222eee444ccccccccccc444e4444ccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccccccccf22efe5555555e4554e5544e5555544efe22fe222222222222eee4444ccccccccc444eee444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccf22efe55555555e454e544e55555544efe22fe222222222222eee4444cccccccc44eecce444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33ccccccccccc3f22efe455555555e44e54e555555544efe22fe222222222222eece444cccccc444eecccceecccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333cccccccc33f22efee455555544e4e4e555555444eefe22fe222222222222eece4444ccc4444eeccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa3333333333af22efeee444444444e2e444444444eeefe22fe222e2222222eeecce444cc4444eecccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33333333aaf22efeeeeeeeeeeeeee2eeeeeeeeeeeefe22fe222e222222eeecccce444444eecccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333aaaaaaf22efeee555555544eee455555554eeefe22fe222e222222eeecccce44444eeccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33cccc3a3333aa3af22efee555555554e4e5e455555554eefe22fe222e222222eeeccccce444eecccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa333aaf22efe555555554e54e54e455555544efe22fe222e222222eeeccccce44eeccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333aaaaaaf22efe55555554e554e554e45555544efe22fe222e222222eeecccccceeecccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aaaa3aaaaaf22efe4555554e5554e5554e4554444efe22fe222e222222eeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa33f222efe45554e55554e55544e44444efe222fe22ee22222eeeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa33aaaf22efe4444e555554e555544e4444efe22fee2eee22222eeeeccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333333..3aaf22.efee4e5555554e5555544e4eefe.22fe22eee22222eeecccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaaaf22efeee45555554e45555444eeefe22fee22ee222222eeecccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3caaf222efeee4555544e4455444eeefe222fe222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222efee444544eee444444eefe222fee222ee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222effee444eeeee444eeffe222fee2222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaf222eeffeeeeeeeeeeeffee222fee2222eee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaf222.eefffffffffffee.222fee2222eee2222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaf22222eeeeeeeeeee22222fee2222eeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccaff22222222222222222ffee2222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccccaaff2222222222222ffeee22222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccaaaafffffffffffffeeee22222eeeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaaaaaaaaaaaaeee222222eeeeee22222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccaaaaaaaa2222222222eeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccccccccaaa2222222222eeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccc222222222eeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222eeeeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffff2eeeeeeeeeeeeeeeee22222222eeeeecccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffeeeeeeeeeeeeeeee222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffeeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffeeeeeeeeee22222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffeeeeeee222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffeee22222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffe22222222222222eeeeeeeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffff222222222222eeeffeeeeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffffff222222222ffffffffeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffffff222fffffffffffffeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222ffffffffffffffffffffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222222222ffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22fffff2ccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222cccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    pause(100)
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222fffcccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222ffcccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222222ffccccccccccccccccccccccccccccc
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccf2222222222222fcccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccf222222dd22222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccfddddddffd2222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccc15ffffff55fd222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cc155f5555555fd222fccc5555555555555555555555555
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1555555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f555ff55555f222fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1feef5feeef555ff22fccccccccccccccccccccccccccc
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15ff555fef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef555fccf2fccc5555555555555ccdc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccc3cccccccccc15fe4f44ef55f33cf2fccc5555555555555ccdc5555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33333cccccccccc5f444444f55f33cf22fcccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a3a333ccccccc35f442444f5fa33cf222fcccccccccccccccddcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aa333aa333cccc3a5fe4444ef5fa33ccfffccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a33a3333a3333aa3afaaeeeeeafaaa33ccccccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3a3aa3aa3a3aaa333aaaaaeeeeeaaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3a3aaaa3333aaaaaaaaa4444eeaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffaaaaaaaaaaaaa44444444eeaaa3cccccccccccccccccccddbdccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222ffaaaaaaaaa444444444444eeee4ccccccccccccccccccdbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222222222ffaaaa444444444444444444ee4ccccccccccccccccddbbdbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22222eeeeeeeeeee22222faaa44444444444444444444e4cccccccccccccccddbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222.eefffffffffffee.222fa444444444444444555555e4cccccccccccccccddbddbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222eeffeeeeeeeeeeeffee222f44444444444555555555554ccccccccccccccccdbdbccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222effee555eeeee555eeffe222f44e4445555555555555555cccccccccccccccccbbcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efee555555eee555554eefe222f4e45555555555555ee4455ccccccccccccccccebcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efeee5555554e5555554eeefe222fe5555555552222eee4445ccccccccccccccccefcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efeee45555554e55555444eeefe22fe5555222222222eee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22.efee5e4555554e5555444e4eefe.22f55522222222222ee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efe5555e455554e555444e5544efe22f2e222222222222eee444cccccccccccc4444444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccf222efe55555e45554e55444e55554efe222fe222222222222eee444ccccccccccc444e4444ccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccccccccf22efe5555555e4554e5544e5555544efe22fe222222222222eee4444ccccccccc444eee444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccf22efe55555555e454e544e55555544efe22fe222222222222eee4444cccccccc44eecce444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33ccccccccccc3f22efe455555555e44e54e555555544efe22fe222222222222eece444cccccc444eecccceecccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333cccccccc33f22efee455555544e4e4e555555444eefe22fe222222222222eece4444ccc4444eeccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa3333333333af22efeee444444444e2e444444444eeefe22fe222e2222222eeecce444cc4444eecccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33333333aaf22efeeeeeeeeeeeeee2eeeeeeeeeeeefe22fe222e222222eeecccce444444eecccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333aaaaaaf22efeee555555544eee455555554eeefe22fe222e222222eeecccce44444eeccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33cccc3a3333aa3af22efee555555554e4e5e455555554eefe22fe222e222222eeeccccce444eecccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa333aaf22efe555555554e54e54e455555544efe22fe222e222222eeeccccce44eeccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333aaaaaaf22efe55555554e554e554e45555544efe22fe222e222222eeecccccceeecccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aaaa3aaaaaf22efe4555554e5554e5554e4554444efe22fe222e222222eeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa33f222efe45554e55554e55544e44444efe222fe22ee22222eeeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa33aaaf22efe4444e555554e555544e4444efe22fee2eee22222eeeeccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333333..3aaf22.efee4e5555554e5555544e4eefe.22fe22eee22222eeecccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaaaf22efeee45555554e45555444eeefe22fee22ee222222eeecccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3caaf222efeee4555544e4455444eeefe222fe222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222efee444544eee444444eefe222fee222ee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222effee444eeeee444eeffe222fee2222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaf222eeffeeeeeeeeeeeffee222fee2222eee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaf222.eefffffffffffee.222fee2222eee2222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaf22222eeeeeeeeeee22222fee2222eeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccaff22222222222222222ffee2222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccccaaff2222222222222ffeee22222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccaaaafffffffffffffeeee22222eeeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaaaaaaaaaaaaeee222222eeeeee22222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccaaaaaaaa2222222222eeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccccccccaaa2222222222eeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccc222222222eeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222eeeeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffff2eeeeeeeeeeeeeeeee22222222eeeeecccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffeeeeeeeeeeeeeeee222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffeeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffeeeeeeeeee22222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffeeeeeee222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffeee22222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffe22222222222222eeeeeeeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffff222222222222eeeffeeeeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffffff222222222ffffffffeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffffff222fffffffffffffeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222ffffffffffffffffffffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222222222ffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22fffff2ccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222cccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    pause(100)
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222fffcccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222ffcccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222222ffccccccccccccccccccccccccccccc
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccf2222222222222fcccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccf222222dd22222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccfddddddffd2222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccc15ffffff55fd222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cc155f5555555fd222fccc5555555555555555555555555
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1555555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f555ff55555f222fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1feef5feeef555ff22fccccccccccccccccccccccccccc
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15ff555fef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef555fccf2fccc5555555555555ccdc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccc3cccccccccc15fe4f44ef55f33cf2fccc5555555555555ccdc5555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33333cccccccccc5f444444f55f33cf22fcccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a3a333ccccccc35f442444f5fa33cf222fcccccccccccccccddcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aa333aa333cccc3a5fe4444ef5fa33ccfffccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a33a3333a3333aa3afaaeeeeeafaaa33ccccccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3a3aa3aa3a3aaa333aaaaaeeeeeaaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3a3aaaa3333aaaaaaaaa4444eeaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffaaaaaaaaaaaaa44444444eeaaa3cccccccccccccccccccddbdccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222ffaaaaaaaaa444444444444eeee4ccccccccccccccccccdbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222222222ffaaaa444444444444444444ee4ccccccccccccccccddbbdbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22222eeeeeeeeeee22222faaa44444444444444444444e4cccccccccccccccddbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222.eefffffffffffee.222fa444444444444444555555e4cccccccccccccccddbddbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222eeffeeeeeeeeeeeffee222f44444444444555555555554ccccccccccccccccdbdbccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222effee555eeeee555eeffe222f44e4445555555555555555cccccccccccccccccbbcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efee555555eee555554eefe222f4e45555555555555ee4455ccccccccccccccccebcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efeee5555554e5555554eeefe222fe5555555552222eee4445ccccccccccccccccefcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efeee45555554e55555444eeefe22fe5555222222222eee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22.efee5e4555554e5555444e4eefe.22f55522222222222ee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efe5555e455554e555444e5544efe22f2e222222222222eee444cccccccccccc4444444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccf222efe55555e45554e55444e55554efe222fe222222222222eee444ccccccccccc444e4444ccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccccccccf22efe5555555e4554e5544e5555544efe22fe222222222222eee4444ccccccccc444eee444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccf22efe55555555e454e544e55555544efe22fe222222222222eee4444cccccccc44eecce444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33ccccccccccc3f22efe455555555e44e54e555555544efe22fe222222222222eece444cccccc444eecccceecccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333cccccccc33f22efee455555544e4e4e555555444eefe22fe222222222222eece4444ccc4444eeccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa3333333333af22efeee444444444e2e444444444eeefe22fe222e2222222eeecce444cc4444eecccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33333333aaf22efeeeeeeeeeeeeee2eeeeeeeeeeeefe22fe222e222222eeecccce444444eecccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333aaaaaaf22efeee555555544eee455555554eeefe22fe222e222222eeecccce44444eeccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33cccc3a3333aa3af22efee555555554e4e5e455555554eefe22fe222e222222eeeccccce444eecccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa333aaf22efe555555554e54e54e455555544efe22fe222e222222eeeccccce44eeccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333aaaaaaf22efe55555554e554e554e45555544efe22fe222e222222eeecccccceeecccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aaaa3aaaaaf22efe4555554e5554e5554e4554444efe22fe222e222222eeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa33f222efe45554e55554e55544e44444efe222fe22ee22222eeeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa33aaaf22efe4444e555554e555544e4444efe22fee2eee22222eeeeccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333333..3aaf22.efee4e5555554e5555544e4eefe.22fe22eee22222eeecccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaaaf22efeee45555554e45555444eeefe22fee22ee222222eeecccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3caaf222efeee4555544e4455444eeefe222fe222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222efee444544eee444444eefe222fee222ee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222effee444eeeee444eeffe222fee2222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaf222eeffeeeeeeeeeeeffee222fee2222eee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaf222.eefffffffffffee.222fee2222eee2222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaf22222eeeeeeeeeee22222fee2222eeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccaff22222222222222222ffee2222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccccaaff2222222222222ffeee22222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccaaaafffffffffffffeeee22222eeeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaaaaaaaaaaaaeee222222eeeeee22222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccaaaaaaaa2222222222eeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccccccccaaa2222222222eeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccc222222222eeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222eeeeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffff2eeeeeeeeeeeeeeeee22222222eeeeecccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffeeeeeeeeeeeeeeee222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffeeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffeeeeeeeeee22222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffeeeeeee222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffeee22222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffe22222222222222eeeeeeeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffff222222222222eeeffeeeeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffffff222222222ffffffffeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffffff222fffffffffffffeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222ffffffffffffffffffffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222222222ffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22fffff2ccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222cccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    pause(100)
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222fffcccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222ffcccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222222ffccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf2222222222222fccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222dd22222fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfddddddffd2222fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15ffffff55fd222fcccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f5555555fd222fcccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1555555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f555ff55555f222fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1feef5feeef555ff22fccccccccccccccccccccccccccc
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15ff555fef5555fcf2fccc5555555555555cccc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccccccccccccc15fef5feef555fccf2fccc5555555555555ccdc5555555
        555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccc3cccccccccc15fe4f44ef55f33cf2fccc5555555555555ccdc5555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33333cccccccccc5f444444f55f33cf22fcccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a3a333ccccccc35f442444f5fa33cf222fcccccccccccccccddcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aa333aa333cccc3a5fe4444ef5fa33ccfffccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a33a3333a3333aa3afaaeeeeeafaaa33ccccccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3a3aa3aa3a3aaa333aaaaaeeeeeaaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3a3aaaa3333aaaaaaaaa4444eeaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffaaaaaaaaaaaaa44444444eeaaa3cccccccccccccccccccddbdccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222ffaaaaaaaaa444444444444eeee4ccccccccccccccccccdbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222222222ffaaaa444444444444444444ee4ccccccccccccccccddbbdbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22222eeeeeeeeeee22222faaa44444444444444444444e4cccccccccccccccddbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222.eefffffffffffee.222fa444444444444444555555e4cccccccccccccccddbddbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222eeffeeeeeeeeeeeffee222f44444444444555555555554ccccccccccccccccdbdbccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222effee555eeeee555eeffe222f44e4445555555555555555cccccccccccccccccbbcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efee555555eee555554eefe222f4e45555555555555ee4455ccccccccccccccccebcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efeee5555554e5555554eeefe222fe5555555552222eee4445ccccccccccccccccefcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efeee45555554e55555444eeefe22fe5555222222222eee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22.efee5e4555554e5555444e4eefe.22f55522222222222ee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efe5555e455554e555444e5544efe22f2e222222222222eee444cccccccccccc4444444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccf222efe55555e45554e55444e55554efe222fe222222222222eee444ccccccccccc444e4444ccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccccccccf22efe5555555e4554e5544e5555544efe22fe222222222222eee4444ccccccccc444eee444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccf22efe55555555e454e544e55555544efe22fe222222222222eee4444cccccccc44eecce444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33ccccccccccc3f22efe455555555e44e54e555555544efe22fe222222222222eece444cccccc444eecccceecccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333cccccccc33f22efee455555544e4e4e555555444eefe22fe222222222222eece4444ccc4444eeccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa3333333333af22efeee444444444e2e444444444eeefe22fe222e2222222eeecce444cc4444eecccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33333333aaf22efeeeeeeeeeeeeee2eeeeeeeeeeeefe22fe222e222222eeecccce444444eecccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333aaaaaaf22efeee555555544eee455555554eeefe22fe222e222222eeecccce44444eeccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33cccc3a3333aa3af22efee555555554e4e5e455555554eefe22fe222e222222eeeccccce444eecccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa333aaf22efe555555554e54e54e455555544efe22fe222e222222eeeccccce44eeccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333aaaaaaf22efe55555554e554e554e45555544efe22fe222e222222eeecccccceeecccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aaaa3aaaaaf22efe4555554e5554e5554e4554444efe22fe222e222222eeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa33f222efe45554e55554e55544e44444efe222fe22ee22222eeeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa33aaaf22efe4444e555554e555544e4444efe22fee2eee22222eeeeccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333333..3aaf22.efee4e5555554e5555544e4eefe.22fe22eee22222eeecccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaaaf22efeee45555554e45555444eeefe22fee22ee222222eeecccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3caaf222efeee4555544e4455444eeefe222fe222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222efee444544eee444444eefe222fee222ee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222effee444eeeee444eeffe222fee2222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaf222eeffeeeeeeeeeeeffee222fee2222eee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaf222.eefffffffffffee.222fee2222eee2222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaf22222eeeeeeeeeee22222fee2222eeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccaff22222222222222222ffee2222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccccaaff2222222222222ffeee22222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccaaaafffffffffffffeeee22222eeeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaaaaaaaaaaaaeee222222eeeeee22222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccaaaaaaaa2222222222eeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccccccccaaa2222222222eeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccc222222222eeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222eeeeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffff2eeeeeeeeeeeeeeeee22222222eeeeecccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffeeeeeeeeeeeeeeee222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffeeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffeeeeeeeeee22222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffeeeeeee222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffeee22222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffe22222222222222eeeeeeeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffff222222222222eeeffeeeeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffffff222222222ffffffffeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffffff222fffffffffffffeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222ffffffffffffffffffffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222222222ffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22fffff2ccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222cccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    pause(100)
    scene.setBackgroundImage(img`
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222fffcccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222ffcccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222222ffccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf2222222222222fccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222dd22222fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfddddddffd2222fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15ffffff55fd222fcccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f5555555fd222fcccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1555555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f555ff55555f222fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1feef5feeef555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15ff555fef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef555fccf2fccccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccc15fe4f44ef55f33cf2fccccccccccccccccccdcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33333cccccccccc5f444444f55f33cf22fcccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a3a333ccccccc35f442444f5fa33cf222fcccccccccccccccddcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aa333aa333cccc3a5fe4444ef5fa33ccfffccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a33a3333a3333aa3afaaeeeeeafaaa33ccccccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3a3aa3aa3a3aaa333aaaaaeeeeeaaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3a3aaaa3333aaaaaaaaa4444eeaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffaaaaaaaaaaaaa44444444eeaaa3cccccccccccccccccccddbdccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222ffaaaaaaaaa444444444444eeee4ccccccccccccccccccdbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222222222ffaaaa444444444444444444ee4ccccccccccccccccddbbdbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22222eeeeeeeeeee22222faaa44444444444444444444e4cccccccccccccccddbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222.eefffffffffffee.222fa444444444444444555555e4cccccccccccccccddbddbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222eeffeeeeeeeeeeeffee222f44444444444555555555554ccccccccccccccccdbdbccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222effee555eeeee555eeffe222f44e4445555555555555555cccccccccccccccccbbcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efee555555eee555554eefe222f4e45555555555555ee4455ccccccccccccccccebcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efeee5555554e5555554eeefe222fe5555555552222eee4445ccccccccccccccccefcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efeee45555554e55555444eeefe22fe5555222222222eee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22.efee5e4555554e5555444e4eefe.22f55522222222222ee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efe5555e455554e555444e5544efe22f2e222222222222eee444cccccccccccc4444444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccf222efe55555e45554e55444e55554efe222fe222222222222eee444ccccccccccc444e4444ccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccccccccf22efe5555555e4554e5544e5555544efe22fe222222222222eee4444ccccccccc444eee444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccf22efe55555555e454e544e55555544efe22fe222222222222eee4444cccccccc44eecce444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33ccccccccccc3f22efe455555555e44e54e555555544efe22fe222222222222eece444cccccc444eecccceecccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333cccccccc33f22efee455555544e4e4e555555444eefe22fe222222222222eece4444ccc4444eeccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa3333333333af22efeee444444444e2e444444444eeefe22fe222e2222222eeecce444cc4444eecccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33333333aaf22efeeeeeeeeeeeeee2eeeeeeeeeeeefe22fe222e222222eeecccce444444eecccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333aaaaaaf22efeee555555544eee455555554eeefe22fe222e222222eeecccce44444eeccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33cccc3a3333aa3af22efee555555554e4e5e455555554eefe22fe222e222222eeeccccce444eecccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa333aaf22efe555555554e54e54e455555544efe22fe222e222222eeeccccce44eeccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333aaaaaaf22efe55555554e554e554e45555544efe22fe222e222222eeecccccceeecccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aaaa3aaaaaf22efe4555554e5554e5554e4554444efe22fe222e222222eeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa33f222efe45554e55554e55544e44444efe222fe22ee22222eeeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa33aaaf22efe4444e555554e555544e4444efe22fee2eee22222eeeeccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333333..3aaf22.efee4e5555554e5555544e4eefe.22fe22eee22222eeecccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaaaf22efeee45555554e45555444eeefe22fee22ee222222eeecccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3caaf222efeee4555544e4455444eeefe222fe222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222efee444544eee444444eefe222fee222ee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222effee444eeeee444eeffe222fee2222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaf222eeffeeeeeeeeeeeffee222fee2222eee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaf222.eefffffffffffee.222fee2222eee2222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaf22222eeeeeeeeeee22222fee2222eeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccaff22222222222222222ffee2222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccccaaff2222222222222ffeee22222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccaaaafffffffffffffeeee22222eeeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaaaaaaaaaaaaeee222222eeeeee22222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccaaaaaaaa2222222222eeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccccccccaaa2222222222eeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccc222222222eeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222eeeeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffff2eeeeeeeeeeeeeeeee22222222eeeeecccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffeeeeeeeeeeeeeeee222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffeeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffeeeeeeeeee22222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffeeeeeee222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffeee22222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffe22222222222222eeeeeeeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffff222222222222eeeffeeeeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffffff222222222ffffffffeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffffff222fffffffffffffeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222ffffffffffffffffffffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222222222ffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22fffff2ccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222cccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    pause(100)
    scene.setBackgroundImage(img`
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222fffcccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222ffcccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222222ffccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf2222222222222fccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222dd22222fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfddddddffd2222fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15ffffff55fd222fcccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f5555555fd222fcccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1555555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f555ff55555f222fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1feef5feeef555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15ff555fef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef555fccf2fccccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccc15fe4f44ef55f33cf2fccccccccccccccccccdcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33333cccccccccc5f444444f55f33cf22fcccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a3a333ccccccc35f442444f5fa33cf222fcccccccccccccccddcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aa333aa333cccc3a5fe4444ef5fa33ccfffccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a33a3333a3333aa3afaaeeeeeafaaa33ccccccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3a3aa3aa3a3aaa333aaaaaeeeeeaaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3a3aaaa3333aaaaaaaaa4444eeaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffaaaaaaaaaaaaa44444444eeaaa3cccccccccccccccccccddbdccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222ffaaaaaaaaa444444444444eeee4ccccccccccccccccccdbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222222222ffaaaa444444444444444444ee4ccccccccccccccccddbbdbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22222eeeeeeeeeee22222faaa44444444444444444444e4cccccccccccccccddbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222.eefffffffffffee.222fa444444444444444555555e4cccccccccccccccddbddbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222eeffeeeeeeeeeeeffee222f44444444444555555555554ccccccccccccccccdbdbccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222effee555eeeee555eeffe222f44e4445555555555555555cccccccccccccccccbbcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efee555555eee555554eefe222f4e45555555555555ee4455ccccccccccccccccebcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efeee5555554e5555554eeefe222fe5555555552222eee4445ccccccccccccccccefcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efeee45555554e55555444eeefe22fe5555222222222eee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22.efee5e4555554e5555444e4eefe.22f55522222222222ee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efe5555e455554e555444e5544efe22f2e222222222222eee444cccccccccccc4444444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccf222efe55555e45554e55444e55554efe222fe222222222222eee444ccccccccccc444e4444ccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccccccccf22efe5555555e4554e5544e5555544efe22fe222222222222eee4444ccccccccc444eee444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccf22efe55555555e454e544e55555544efe22fe222222222222eee4444cccccccc44eecce444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33ccccccccccc3f22efe455555555e44e54e555555544efe22fe222222222222eece444cccccc444eecccceecccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333cccccccc33f22efee455555544e4e4e555555444eefe22fe222222222222eece4444ccc4444eeccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa3333333333af22efeee444444444e2e444444444eeefe22fe222e2222222eeecce444cc4444eecccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33333333aaf22efeeeeeeeeeeeeee2eeeeeeeeeeeefe22fe222e222222eeecccce444444eecccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333aaaaaaf22efeee555555544eee455555554eeefe22fe222e222222eeecccce44444eeccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33cccc3a3333aa3af22efee555555554e4e5e455555554eefe22fe222e222222eeeccccce444eecccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa333aaf22efe555555554e54e54e455555544efe22fe222e222222eeeccccce44eeccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333aaaaaaf22efe55555554e554e554e45555544efe22fe222e222222eeecccccceeecccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aaaa3aaaaaf22efe4555554e5554e5554e4554444efe22fe222e222222eeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa33f222efe45554e55554e55544e44444efe222fe22ee22222eeeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa33aaaf22efe4444e555554e555544e4444efe22fee2eee22222eeeeccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333333..3aaf22.efee4e5555554e5555544e4eefe.22fe22eee22222eeecccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaaaf22efeee45555554e45555444eeefe22fee22ee222222eeecccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3caaf222efeee4555544e4455444eeefe222fe222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222efee444544eee444444eefe222fee222ee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222effee444eeeee444eeffe222fee2222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaf222eeffeeeeeeeeeeeffee222fee2222eee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaf222.eefffffffffffee.222fee2222eee2222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaf22222eeeeeeeeeee22222fee2222eeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccaff22222222222222222ffee2222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccccaaff2222222222222ffeee22222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccaaaafffffffffffffeeee22222eeeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaaaaaaaaaaaaeee222222eeeeee22222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccaaaaaaaa2222222222eeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccccccccaaa2222222222eeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccc222222222eeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222eeeeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffff2eeeeeeeeeeeeeeeee22222222eeeeecccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffeeeeeeeeeeeeeeee222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffeeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffeeeeeeeeee22222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffeeeeeee222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffeee22222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffe22222222222222eeeeeeeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffff222222222222eeeffeeeeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffffff222222222ffffffffeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffffff222fffffffffffffeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222ffffffffffffffffffffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222222222ffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22fffff2ccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222cccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    pause(100)
    scene.setBackgroundImage(img`
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222fffcccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222ffcccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222222ffccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf2222222222222fccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222dd22222fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfddddddffd2222fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15ffffff55fd222fcccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f5555555fd222fcccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1555555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f555ff55555f222fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1feef5feeef555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15ff555fef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef555fccf2fccccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccc15fe4f44ef55f33cf2fccccccccccccccccccdcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33333cccccccccc5f444444f55f33cf22fcccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a3a333ccccccc35f442444f5fa33cf222fcccccccccccccccddcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aa333aa333cccc3a5fe4444ef5fa33ccfffccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a33a3333a3333aa3afaaeeeeeafaaa33ccccccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3a3aa3aa3a3aaa333aaaaaeeeeeaaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3a3aaaa3333aaaaaaaaa4444eeaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffaaaaaaaaaaaaa44444444eeaaa3cccccccccccccccccccddbdccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222ffaaaaaaaaa444444444444eeee4ccccccccccccccccccdbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222222222ffaaaa444444444444444444ee4ccccccccccccccccddbbdbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22222eeeeeeeeeee22222faaa44444444444444444444e4cccccccccccccccddbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222.eefffffffffffee.222fa444444444444444555555e4cccccccccccccccddbddbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222eeffeeeeeeeeeeeffee222f44444444444555555555554ccccccccccccccccdbdbccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222effee555eeeee555eeffe222f44e4445555555555555555cccccccccccccccccbbcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efee555555eee555554eefe222f4e45555555555555ee4455ccccccccccccccccebcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efeee5555554e5555554eeefe222fe5555555552222eee4445ccccccccccccccccefcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efeee45555554e55555444eeefe22fe5555222222222eee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22.efee5e4555554e5555444e4eefe.22f55522222222222ee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efe5555e455554e555444e5544efe22f2e222222222222eee444cccccccccccc4444444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccf222efe55555e45554e55444e55554efe222fe222222222222eee444ccccccccccc444e4444ccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccccccccf22efe5555555e4554e5544e5555544efe22fe222222222222eee4444ccccccccc444eee444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccf22efe55555555e454e544e55555544efe22fe222222222222eee4444cccccccc44eecce444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33ccccccccccc3f22efe455555555e44e54e555555544efe22fe222222222222eece444cccccc444eecccceecccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333cccccccc33f22efee455555544e4e4e555555444eefe22fe222222222222eece4444ccc4444eeccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa3333333333af22efeee444444444e2e444444444eeefe22fe222e2222222eeecce444cc4444eecccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33333333aaf22efeeeeeeeeeeeeee2eeeeeeeeeeeefe22fe222e222222eeecccce444444eecccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333aaaaaaf22efeee555555544eee455555554eeefe22fe222e222222eeecccce44444eeccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33cccc3a3333aa3af22efee555555554e4e5e455555554eefe22fe222e222222eeeccccce444eecccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa333aaf22efe555555554e54e54e455555544efe22fe222e222222eeeccccce44eeccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333aaaaaaf22efe55555554e554e554e45555544efe22fe222e222222eeecccccceeecccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aaaa3aaaaaf22efe4555554e5554e5554e4554444efe22fe222e222222eeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa33f222efe45554e55554e55544e44444efe222fe22ee22222eeeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa33aaaf22efe4444e555554e555544e4444efe22fee2eee22222eeeeccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333333..3aaf22.efee4e5555554e5555544e4eefe.22fe22eee22222eeecccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaaaf22efeee45555554e45555444eeefe22fee22ee222222eeecccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3caaf222efeee4555544e4455444eeefe222fe222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222efee444544eee444444eefe222fee222ee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222effee444eeeee444eeffe222fee2222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaf222eeffeeeeeeeeeeeffee222fee2222eee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaf222.eefffffffffffee.222fee2222eee2222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaf22222eeeeeeeeeee22222fee2222eeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccaff22222222222222222ffee2222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccccaaff2222222222222ffeee22222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccaaaafffffffffffffeeee22222eeeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaaaaaaaaaaaaeee222222eeeeee22222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccaaaaaaaa2222222222eeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccccccccaaa2222222222eeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccc222222222eeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222eeeeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffff2eeeeeeeeeeeeeeeee22222222eeeeecccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffeeeeeeeeeeeeeeee222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffeeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffeeeeeeeeee22222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffeeeeeee222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffeee22222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffe22222222222222eeeeeeeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffff222222222222eeeffeeeeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffffff222222222ffffffffeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffffff222fffffffffffffeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222ffffffffffffffffffffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222222222ffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22fffff2ccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222cccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    pause(100)
    scene.setBackgroundImage(img`
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222fffcccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222ffcccccccccccccccccccccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222222222222ffccccccccccccccccccccccccccccc
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cccf2222222222222fcccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccf222222dd22222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccccfddddddffd2222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555ccc15ffffff55fd222fccc5555555555555555555555555
        55555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555cc155f5555555fd222fccc5555555555555555555555555
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1555555555555fd22fcccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc155f555ff55555f222fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc1feef5feeef555ff22fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15ff555fef5555fcf2fccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc15fef5feef555fccf2fccccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccc15fe4f44ef55f33cf2fccccccccccccccccccdcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33333cccccccccc5f444444f55f33cf22fcccccccccccccccccdcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a3a333ccccccc35f442444f5fa33cf222fcccccccccccccccddcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aa333aa333cccc3a5fe4444ef5fa33ccfffccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33a33a3333a3333aa3afaaeeeeeafaaa33ccccccccccccccccccccdddccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3a3aa3aa3a3aaa333aaaaaeeeeeaaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3a3aaaa3333aaaaaaaaa4444eeaaaaa3cccccccccccccccccccddddccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccfffffffffffffaaaaaaaaaaaaa44444444eeaaa3cccccccccccccccccccddbdccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff2222222222222ffaaaaaaaaa444444444444eeee4ccccccccccccccccccdbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccff22222222222222222ffaaaa444444444444444444ee4ccccccccccccccccddbbdbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22222eeeeeeeeeee22222faaa44444444444444444444e4cccccccccccccccddbbdbcccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222.eefffffffffffee.222fa444444444444444555555e4cccccccccccccccddbddbcccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222eeffeeeeeeeeeeeffee222f44444444444555555555554ccccccccccccccccdbdbccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222effee555eeeee555eeffe222f44e4445555555555555555cccccccccccccccccbbcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efee555555eee555554eefe222f4e45555555555555ee4455ccccccccccccccccebcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf222efeee5555554e5555554eeefe222fe5555555552222eee4445ccccccccccccccccefcccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efeee45555554e55555444eeefe22fe5555222222222eee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22.efee5e4555554e5555444e4eefe.22f55522222222222ee444cccccccccccccccccefcccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccf22efe5555e455554e555444e5544efe22f2e222222222222eee444cccccccccccc4444444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccccf222efe55555e45554e55444e55554efe222fe222222222222eee444ccccccccccc444e4444ccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3cccccccccccccccf22efe5555555e4554e5544e5555544efe22fe222222222222eee4444ccccccccc444eee444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3ccccccccccccccf22efe55555555e454e544e55555544efe22fe222222222222eee4444cccccccc44eecce444ccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33ccccccccccc3f22efe455555555e44e54e555555544efe22fe222222222222eece444cccccc444eecccceecccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333cccccccc33f22efee455555544e4e4e555555444eefe22fe222222222222eece4444ccc4444eeccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa3333333333af22efeee444444444e2e444444444eeefe22fe222e2222222eeecce444cc4444eecccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca33333333aaf22efeeeeeeeeeeeeee2eeeeeeeeeeeefe22fe222e222222eeecccce444444eecccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccca333aaaaaaf22efeee555555544eee455555554eeefe22fe222e222222eeecccce44444eeccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33cccc3a3333aa3af22efee555555554e4e5e455555554eefe22fe222e222222eeeccccce444eecccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa333aaf22efe555555554e54e54e455555544efe22fe222e222222eeeccccce44eeccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333aaaaaaf22efe55555554e554e554e45555544efe22fe222e222222eeecccccceeecccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aaaa3aaaaaf22efe4555554e5554e5554e4554444efe22fe222e222222eeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaa33f222efe45554e55554e55544e44444efe222fe22ee22222eeeeccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaa33aaaf22efe4444e555554e555544e4444efe22fee2eee22222eeeeccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc333333..3aaf22.efee4e5555554e5555544e4eefe.22fe22eee22222eeecccccccccccccccccccccefccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc33aaaaf22efeee45555554e45555444eeefe22fee22ee222222eeecccccccccccccccccccccefccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc3aa3caaf222efeee4555544e4455444eeefe222fe222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222efee444544eee444444eefe222fee222ee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaf222effee444eeeee444eeffe222fee2222ee222222eeeccccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaaf222eeffeeeeeeeeeeeffee222fee2222eee222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaf222.eefffffffffffee.222fee2222eee2222222eeeccccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaaf22222eeeeeeeeeee22222fee2222eeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccaff22222222222222222ffee2222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaccccaaff2222222222222ffeee22222eeeee2222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccaaaafffffffffffffeeee22222eeeeee2222222eeeecccccccccccccccccccefcccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaacaaaaaaaaaaaaaeee222222eeeeee22222222eeeecccccccccccccccccccefcccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccaaaaaaaa2222222222eeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccaaccccccccccaaa2222222222eeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccacccccccccccc222222222eeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2222222222eeeeeeeeeeeeeee22222222eeeeccccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffff2eeeeeeeeeeeeeeeee22222222eeeeecccccccccccccccccefccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffeeeeeeeeeeeeeeee222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffeeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffeeeeeeeeeeeee2222222222eeeeecccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffeeeeeeeeee22222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffeeeeeee222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffeee22222222222222eeeeeeccccccccccccccccefccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffe22222222222222eeeeeeeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffff222222222222eeeffeeeeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2ffffffffffffffffffffff222222222ffffffffeeccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc2fffffffffffffffffffffff222fffffffffffffeccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222222222222ffffffffffffffffffffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc222222222222222222ffffffff2cccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22fffff2ccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc22222cccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefcccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccefccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        cccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc
        `)
    pause(100)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.serpents, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        otherSprite.destroy(effects.spray, 500)
    } else {
        info.changeLifeBy(-1)
        sprite.x += 10
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.orthus, function (sprite, otherSprite) {
    if (controller.B.isPressed()) {
        otherSprite.destroy(effects.spray, 500)
    } else {
        info.changeLifeBy(-1)
        sprite.x += 10
    }
})
sprites.onCreated(SpriteKind.Player, function (sprite) {
    controller.moveSprite(sprite, 100, 100)
})
function random_song_selector () {
    thesong_selector = randint(1, 101)
    if (thesong_selector <= 20 && thesong_selector >= 1) {
        game.showLongText("NOW PLAYING: Zankoku Na Tenshi No Teeze by Yoko Takahashi", DialogLayout.Bottom)
        cruelAngel = 1
    } else if (thesong_selector <= 40 && thesong_selector >= 21) {
        game.showLongText("NOW PLAYING: Pure Gold by half alive", DialogLayout.Bottom)
        puregold = 1
    } else if (thesong_selector <= 60 && thesong_selector >= 41) {
        game.showLongText("NOW PLAYING: Modern Day Cain by IDKHBTFM", DialogLayout.Bottom)
        mooderndaycain = 1
    } else if (thesong_selector <= 80 && thesong_selector >= 61) {
        game.showLongText("NOW PLAYING: Collar Full by Panic! At The Disco", DialogLayout.Bottom)
        collarfull = 1
    } else if (thesong_selector <= 100 && thesong_selector >= 81) {
        game.showLongText("NOW PLAYING: Pompeii by Bastille", DialogLayout.Bottom)
        pompeii = 1
    } else if (thesong_selector == 101) {
        game.showLongText("instant death", DialogLayout.Bottom)
        game.showLongText("NOW PLAYING: Never Gonna Give You Up by Rick Astley", DialogLayout.Bottom)
        rick = 1
    }
}
let rick = 0
let pompeii = 0
let collarfull = 0
let mooderndaycain = 0
let puregold = 0
let cruelAngel = 0
let thesong_selector = 0
let level = 0
let MINOTAUR: Sprite = null
let minotaur_lifes = 0
let minos_life_caller = 0
let theBastardSerpent: Sprite = null
let orthusTheDog: Sprite = null
let coins: Sprite = null
let mySprite: Sprite = null
let theRandomSpawner = 0
music.setVolume(80)
storyline_1()
info.setLife(6)
theRandomSpawner = randint(1, 4)
mySprite = sprites.create(img`
    .........23333........
    ........2222233.......
    .......222222223......
    .......22eefd212......
    .......2eed1f21.......
    .......eee41fdd.......
    ........f44ddd1.......
    .........444dd........
    .........ed444........
    ........4e55..........
    .......4d4e22.........
    ......4d44ee2....4....
    e....4dd.44e24.dd14...
    ee..4d4...ee2dd4444...
    .ee4d1d...e5544.......
    ...44e...ee22.........
    ......6669e2222.......
    ........e6666999.....9
    ........e2222666699966
    .......4d4....4d.666..
    ......4144....4d......
    .....4d4......4d......
    ....4d4.......4d......
    ....ee55......e55.....
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level2`)
scene.cameraFollowSprite(mySprite)
for (let value of tiles.getTilesByType(assets.tile`tile6`)) {
    coins = sprites.create(img`
        . . . . 6 6 6 6 6 6 6 . . . . 
        . . . 6 1 1 1 1 1 1 1 6 . . . 
        . . 6 1 1 9 9 9 9 9 9 1 6 . . 
        . 6 1 1 9 9 9 9 9 9 9 9 1 6 . 
        6 1 1 9 9 9 9 9 9 9 9 9 9 1 6 
        6 1 9 9 9 9 6 6 6 9 9 9 9 9 6 
        6 1 9 9 9 6 6 6 6 6 9 9 9 9 6 
        6 1 9 9 9 6 6 6 6 6 1 9 9 9 6 
        8 9 9 9 9 6 6 6 6 6 1 9 9 9 8 
        8 6 9 9 9 9 6 6 6 1 9 9 9 6 8 
        8 6 9 9 9 9 9 1 1 9 9 9 9 6 8 
        . 8 6 9 9 9 9 9 9 9 9 9 6 8 . 
        . . 8 6 9 9 9 9 9 9 9 6 8 . . 
        . . . 8 6 6 6 6 6 6 6 8 . . . 
        . . . . 8 8 8 8 8 8 8 . . . . 
        `, SpriteKind.coins)
    tiles.placeOnTile(coins, value)
    animation.runImageAnimation(
    coins,
    [img`
        . . . . 6 6 6 6 6 6 6 . . . . 
        . . . 6 1 1 1 1 1 1 1 6 . . . 
        . . 6 1 1 9 9 9 9 9 9 1 6 . . 
        . 6 1 1 9 9 9 9 9 9 9 9 1 6 . 
        6 1 1 9 9 9 9 9 9 9 9 9 9 1 6 
        6 1 9 9 9 9 6 6 6 9 9 9 9 9 6 
        6 1 9 9 9 6 6 6 6 6 9 9 9 9 6 
        6 1 9 9 9 6 6 6 6 6 1 9 9 9 6 
        8 9 9 9 9 6 6 6 6 6 1 9 9 9 8 
        8 6 9 9 9 9 6 6 6 1 9 9 9 6 8 
        8 6 9 9 9 9 9 1 1 9 9 9 9 6 8 
        . 8 6 9 9 9 9 9 9 9 9 9 6 8 . 
        . . 8 6 9 9 9 9 9 9 9 6 8 . . 
        . . . 8 6 6 6 6 6 6 6 8 . . . 
        . . . . 8 8 8 8 8 8 8 . . . . 
        `,img`
        . . . . 6 6 6 6 6 6 6 . . . . 
        . . . 6 1 1 1 1 1 1 1 6 . . . 
        . . 6 1 1 9 9 9 9 9 9 1 6 . . 
        . 6 1 1 9 9 9 9 9 9 9 9 1 6 . 
        6 1 1 9 9 9 9 9 9 9 9 9 9 1 6 
        6 1 9 9 9 9 6 6 6 9 9 9 9 9 6 
        6 1 9 9 9 6 6 6 6 6 9 9 9 9 6 
        6 1 9 9 9 6 6 6 6 6 1 9 9 9 6 
        8 9 9 9 9 6 6 6 6 6 1 9 9 9 8 
        8 6 9 9 9 9 6 6 6 1 9 9 9 6 8 
        8 6 9 9 9 9 9 1 1 9 9 9 9 6 8 
        . 8 6 9 9 9 9 9 9 9 9 9 6 8 . 
        . . 8 6 9 9 9 9 9 9 9 6 8 . . 
        . . . 8 6 6 6 6 6 6 6 8 . . . 
        . . . . 8 8 8 8 8 8 8 . . . . 
        `,img`
        . . . . . 6 6 6 6 6 . . . . . 
        . . . . 6 1 1 1 1 1 6 . . . . 
        . . . 6 1 1 9 9 9 9 1 6 . . . 
        . . 6 1 1 9 9 9 9 9 9 1 6 . . 
        . 6 1 1 9 9 9 9 9 9 9 9 1 6 . 
        . 6 1 9 9 9 9 6 9 9 9 9 9 6 . 
        . 6 1 9 9 9 6 6 6 9 9 9 9 6 . 
        . 6 1 9 9 9 6 6 6 1 9 9 9 6 . 
        . 8 9 9 9 9 6 6 6 1 9 9 9 8 . 
        . 8 6 9 9 9 9 6 1 9 9 9 6 8 . 
        . 8 6 9 9 9 9 1 9 9 9 9 6 8 . 
        . . 8 6 9 9 9 9 9 9 9 6 8 . . 
        . . . 8 6 9 9 9 9 9 6 8 . . . 
        . . . . 8 6 6 6 6 6 8 . . . . 
        . . . . . 8 8 8 8 8 . . . . . 
        `,img`
        . . . . . . 6 6 6 . . . . . . 
        . . . . . 6 1 9 9 6 . . . . . 
        . . . . 6 1 9 9 9 9 6 . . . . 
        . . . . 6 1 9 9 9 9 6 . . . . 
        . . . 6 1 9 9 9 9 9 9 6 . . . 
        . . . 6 1 9 9 6 9 9 9 6 . . . 
        . . . 6 1 9 9 6 9 9 9 6 . . . 
        . . . 6 9 9 9 6 1 9 9 6 . . . 
        . . . 8 6 9 9 6 1 9 6 8 . . . 
        . . . 8 6 9 9 6 1 9 6 8 . . . 
        . . . 8 6 9 9 1 9 9 6 8 . . . 
        . . . . 8 6 9 9 9 6 8 . . . . 
        . . . . 8 6 9 9 9 6 8 . . . . 
        . . . . . 8 6 6 6 8 . . . . . 
        . . . . . . 8 8 8 . . . . . . 
        `,img`
        . . . . . . . 6 . . . . . . . 
        . . . . . . 6 1 6 . . . . . . 
        . . . . . . 6 9 6 . . . . . . 
        . . . . . . 6 9 6 . . . . . . 
        . . . . . . 6 9 6 . . . . . . 
        . . . . . . 6 9 6 . . . . . . 
        . . . . . . 6 9 6 . . . . . . 
        . . . . . . 6 9 6 . . . . . . 
        . . . . . . 8 6 8 . . . . . . 
        . . . . . . 8 6 8 . . . . . . 
        . . . . . . 8 6 8 . . . . . . 
        . . . . . . 8 6 8 . . . . . . 
        . . . . . . 8 6 8 . . . . . . 
        . . . . . . 8 6 8 . . . . . . 
        . . . . . . . 8 . . . . . . . 
        `,img`
        . . . . . . 6 6 6 . . . . . . 
        . . . . . 6 1 9 9 6 . . . . . 
        . . . . 6 1 9 9 9 9 6 . . . . 
        . . . . 6 1 9 9 9 9 6 . . . . 
        . . . 6 1 9 9 9 9 9 9 6 . . . 
        . . . 6 1 9 9 6 9 9 9 6 . . . 
        . . . 6 1 9 9 6 9 9 9 6 . . . 
        . . . 6 9 9 9 6 1 9 9 6 . . . 
        . . . 8 6 9 9 6 1 9 6 8 . . . 
        . . . 8 6 9 9 6 1 9 6 8 . . . 
        . . . 8 6 9 9 1 9 9 6 8 . . . 
        . . . . 8 6 9 9 9 6 8 . . . . 
        . . . . 8 6 9 9 9 6 8 . . . . 
        . . . . . 8 6 6 6 8 . . . . . 
        . . . . . . 8 8 8 . . . . . . 
        `,img`
        . . . . . 6 6 6 6 6 . . . . . 
        . . . . 6 1 1 1 1 1 6 . . . . 
        . . . 6 1 1 9 9 9 9 1 6 . . . 
        . . 6 1 1 9 9 9 9 9 9 1 6 . . 
        . 6 1 1 9 9 9 9 9 9 9 9 1 6 . 
        . 6 1 9 9 9 9 6 9 9 9 9 9 6 . 
        . 6 1 9 9 9 6 6 6 9 9 9 9 6 . 
        . 6 1 9 9 9 6 6 6 1 9 9 9 6 . 
        . 8 9 9 9 9 6 6 6 1 9 9 9 8 . 
        . 8 6 9 9 9 9 6 1 9 9 9 6 8 . 
        . 8 6 9 9 9 9 1 9 9 9 9 6 8 . 
        . . 8 6 9 9 9 9 9 9 9 6 8 . . 
        . . . 8 6 9 9 9 9 9 6 8 . . . 
        . . . . 8 6 6 6 6 6 8 . . . . 
        . . . . . 8 8 8 8 8 . . . . . 
        `],
    100,
    true
    )
    tiles.setTileAt(value, assets.tile`tile4`)
}
for (let value of tiles.getTilesByType(assets.tile`tile25`)) {
    orthusTheDog = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.orthus)
    tiles.placeOnTile(orthusTheDog, value)
    animation.runImageAnimation(
    orthusTheDog,
    [img`
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ........cccccc..cccccc..........................................................
        ......ccdddddbccddddddc.........................................................
        ......cddddddbcddddddddc.......ccc..............................................
        ......cdcddcdbcdcddcdbdc......cdddc.............................................
        ......cddcdddbcddcdddcdc......cbcbdc............................................
        ......cdcccddbcdcccddcdcccccccccccdc............................................
        .......cd3dddbbcd3dddbccdeeeeeeeeddc............................................
        ........ccccbbbbcdddddbbdeeeeeddcbc.............................................
        ............ccbbcdddddddddeeddddcc..............................................
        ..............ccbcddddddddddddbdc...............................................
        ................cccddbbbbbbbbbddc...............................................
        ..................cdccccccccccbdcc..............................................
        .................cddcbc...cbc.cbdc..............................................
        .................cdcbbc...cbc..cdc..............................................
        ................cccccc...cccc.cccc..............................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        `,img`
        ..cccccc..cccccc................cccc............................................
        ccdddddbccddddddc..............cddddc...........................................
        cddddddbcddddddddc............cdbcccdc..........................................
        cdcddcdbcdcddcdbdc...........cdbc...cdc.........................................
        cddcdddbcddcdddcdc..........cdbc.....cdc........................................
        cdcccddbcdcccddcdcccccccccccdbc......cdc........................................
        .cd3dddbbcd3dddbccdeeeeeeeedbc.....c.cdc........................................
        ..ccccbbbbcdddddbbdeeeeeddcbc.....cbcdbc........................................
        ......ccbbcdddddddddeeddddcc.......cbbc.........................................
        ........ccbcddddddddddddbdc.........cc..........................................
        ..........cccddbbbbbbbbbddc.....................................................
        ............cdccccccccccbdcc....................................................
        ...........cddcbc...cbc.cbdc....................................................
        ...........cdcbbc...cbc..cdc....................................................
        ..........cccccc...cccc.cccc....................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        ................................................................................
        `],
    100,
    true
    )
    tiles.setTileAt(value, assets.tile`tile4`)
}
for (let value of tiles.getTilesByType(assets.tile`tile24`)) {
    theBastardSerpent = sprites.create(img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        `, SpriteKind.serpents)
    tiles.placeOnTile(theBastardSerpent, value)
    animation.runImageAnimation(
    theBastardSerpent,
    [img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . 7 7 7 7 7 . . . . . . . . . 
        7 7 1 7 7 7 7 . . . . . . . . 
        7 7 7 7 7 7 7 . . . . . . . . 
        3 3 3 3 7 7 7 . . . . . . . . 
        . . . 7 7 7 6 . . . . . . . . 
        . 7 7 7 7 7 6 . . . . . . . . 
        . . . 7 7 6 . . . . . . . . . 
        . . . 7 7 7 6 . . . . . . . . 
        . . . 7 7 7 7 . . . . . . . 7 
        . . . 6 7 7 7 7 . . . . . 7 7 
        . . . . 6 7 7 7 7 7 7 7 7 7 6 
        . . . . . 6 7 7 7 7 7 7 7 8 . 
        . . . . . . 6 8 8 8 8 8 8 . . 
        `,img`
        . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . 
        . . . . . . . . 7 7 7 7 . . . 
        . . . . . . . 7 7 1 7 7 7 . . 
        . . . . . . . 7 7 7 7 7 7 7 . 
        . . . . . . . . 7 7 7 7 7 7 . 
        . . . . . . . . . . . 7 7 6 . 
        . . . . . . . . . 7 7 7 7 6 . 
        . . . . . . . . . 7 7 7 6 . . 
        . . . . . . . . 7 7 7 8 . . . 
        . . . . . . . . 7 7 7 8 . . . 
        . . . . . 7 . . 7 7 7 7 6 . . 
        . . . . 7 7 . . 6 7 7 7 7 7 7 
        7 7 7 7 7 6 . . 8 6 7 7 7 7 7 
        7 7 7 7 8 . . . . 8 6 6 6 8 . 
        `],
    100,
    true
    )
    tiles.setTileAt(value, assets.tile`tile4`)
}
characterAnim()
theRandomSpawn()
random_song_selector()
forever(function () {
	
})
forever(function () {
    if (11 == level) {
        for (let value of tiles.getTilesByType(assets.tile`tile25`)) {
            orthusTheDog = sprites.create(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `, SpriteKind.orthus)
            tiles.placeOnTile(orthusTheDog, value)
            animation.runImageAnimation(
            orthusTheDog,
            [img`
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ........cccccc..cccccc..........................................................
                ......ccdddddbccddddddc.........................................................
                ......cddddddbcddddddddc.......ccc..............................................
                ......cdcddcdbcdcddcdbdc......cdddc.............................................
                ......cddcdddbcddcdddcdc......cbcbdc............................................
                ......cdcccddbcdcccddcdcccccccccccdc............................................
                .......cd3dddbbcd3dddbccdeeeeeeeeddc............................................
                ........ccccbbbbcdddddbbdeeeeeddcbc.............................................
                ............ccbbcdddddddddeeddddcc..............................................
                ..............ccbcddddddddddddbdc...............................................
                ................cccddbbbbbbbbbddc...............................................
                ..................cdccccccccccbdcc..............................................
                .................cddcbc...cbc.cbdc..............................................
                .................cdcbbc...cbc..cdc..............................................
                ................cccccc...cccc.cccc..............................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                `,img`
                ..cccccc..cccccc................cccc............................................
                ccdddddbccddddddc..............cddddc...........................................
                cddddddbcddddddddc............cdbcccdc..........................................
                cdcddcdbcdcddcdbdc...........cdbc...cdc.........................................
                cddcdddbcddcdddcdc..........cdbc.....cdc........................................
                cdcccddbcdcccddcdcccccccccccdbc......cdc........................................
                .cd3dddbbcd3dddbccdeeeeeeeedbc.....c.cdc........................................
                ..ccccbbbbcdddddbbdeeeeeddcbc.....cbcdbc........................................
                ......ccbbcdddddddddeeddddcc.......cbbc.........................................
                ........ccbcddddddddddddbdc.........cc..........................................
                ..........cccddbbbbbbbbbddc.....................................................
                ............cdccccccccccbdcc....................................................
                ...........cddcbc...cbc.cbdc....................................................
                ...........cdcbbc...cbc..cdc....................................................
                ..........cccccc...cccc.cccc....................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                ................................................................................
                `],
            100,
            true
            )
            tiles.setTileAt(value, assets.tile`tile4`)
            orthusTheDog.follow(mySprite, 99)
        }
        for (let value of tiles.getTilesByType(assets.tile`tile24`)) {
            theBastardSerpent = sprites.create(img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                `, SpriteKind.serpents)
            tiles.placeOnTile(theBastardSerpent, value)
            animation.runImageAnimation(
            theBastardSerpent,
            [img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . 7 7 7 7 7 . . . . . . . . . 
                7 7 1 7 7 7 7 . . . . . . . . 
                7 7 7 7 7 7 7 . . . . . . . . 
                3 3 3 3 8 7 7 . . . . . . . . 
                . 7 7 8 7 7 6 . . . . . . . . 
                7 7 8 7 7 7 6 . . . . . . . . 
                . . 7 7 7 6 . . . . . . . . . 
                . . 7 7 7 8 . . . . . . . . . 
                . . 7 7 7 8 . . . . . . . . 7 
                . . 7 7 7 7 6 . . . . . . 7 7 
                . . 6 7 7 7 7 7 7 7 7 7 7 7 6 
                . . 8 6 7 7 7 7 7 7 7 7 7 8 . 
                . . . 8 6 6 6 8 8 8 8 8 8 . . 
                `,img`
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . 7 7 7 7 7 . . . . . 
                . . . . 7 7 1 7 7 7 7 . . . . 
                . . . . 7 7 7 7 7 7 7 . . . . 
                . . . . . 6 8 8 8 7 7 . . . . 
                . . . . . . . 8 7 7 6 . . . . 
                . . . . . . 7 7 7 7 6 . . . . 
                . . . . . 7 7 7 7 6 . . . . . 
                . . . . 7 7 7 7 8 . . . . . . 
                . . . . 7 7 7 8 . . . . . . . 
                . 7 . . 7 7 7 7 6 . . . . . . 
                7 7 . . 6 7 7 7 7 7 7 7 7 7 7 
                7 6 . . 8 6 7 7 7 7 7 7 7 7 . 
                `,img`
                7 8 . . . . . . . . . . 8 6 . 
                . 6 6 . . 8 8 . . 8 8 . . 8 8 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . 
                . . . . . . . . . . 7 7 7 7 7 
                . . . . . . . . . 7 7 1 7 7 7 
                7 . . . . . . . . 7 7 7 7 7 7 
                7 . . . . . . . . . 6 8 8 8 7 
                7 . . . . . . . . . . . 8 7 7 
                6 . . . . . . . . . . 7 7 7 7 
                6 . . . . . . . . . 7 7 7 7 6 
                . . . . . . . . . 7 7 7 7 8 . 
                . . . . . . . . 7 7 7 7 8 . . 
                . . . . 7 . . . 7 7 7 6 . . . 
                . . . 7 7 . . . 7 7 7 7 7 7 . 
                `],
            100,
            true
            )
            tiles.setTileAt(value, assets.tile`tile4`)
            theBastardSerpent.follow(mySprite, 99)
        }
    }
})
forever(function () {
    if (mySprite.vx == 0) {
        pause(5000)
        pause(5000)
        if (info.life() == 1) {
            for (let index = 0; index < 5; index++) {
                pause(2000)
                info.changeLifeBy(1)
            }
        } else if (info.life() == 2) {
            for (let index = 0; index < 4; index++) {
                pause(2000)
                info.changeLifeBy(1)
            }
        } else if (info.life() == 3) {
            for (let index = 0; index < 3; index++) {
                pause(2000)
                info.changeLifeBy(1)
            }
        }
    }
})
forever(function () {
    if (minos_life_caller == 1) {
        MINOTAUR.say(minotaur_lifes)
    }
})
forever(function () {
    if (cruelAngel == 1) {
        music.setTempo(128)
        music.rest(music.beat(BeatFraction.Quarter))
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(311, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(311, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Whole))
        }
        music.rest(music.beat(BeatFraction.Quarter))
        for (let index = 0; index < 1; index++) {
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(466, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(311, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Quarter))
            music.playTone(311, music.beat(BeatFraction.Half))
            music.playTone(311, music.beat(BeatFraction.Whole))
        }
        music.rest(music.beat(BeatFraction.Quarter))
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(311, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(311, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Whole))
        }
        music.rest(music.beat(BeatFraction.Quarter))
        for (let index = 0; index < 1; index++) {
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(466, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(311, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Whole))
        }
        music.rest(music.beat(BeatFraction.Quarter))
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(311, music.beat(BeatFraction.Whole))
            music.playTone(349, music.beat(BeatFraction.Whole))
            music.playTone(311, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Quarter))
            music.playTone(349, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Whole))
        }
        music.rest(music.beat(BeatFraction.Quarter))
        for (let index = 0; index < 1; index++) {
            music.playTone(392, music.beat(BeatFraction.Whole))
            music.playTone(466, music.beat(BeatFraction.Whole))
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(311, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Quarter))
            music.playTone(523, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Whole))
        }
    }
})
forever(function () {
    if (puregold == 1) {
        music.setTempo(133)
        for (let index = 0; index < 1; index++) {
            music.playTone(523, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.playTone(247, music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(392, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Half))
            music.playTone(247, music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(262, music.beat(BeatFraction.Whole))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.playTone(262, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Half))
            music.playTone(247, music.beat(BeatFraction.Half))
        }
    }
})
forever(function () {
    if (puregold == 1) {
        music.setTempo(133)
        for (let index = 0; index < 3; index++) {
            music.rest(music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.rest(music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.playTone(659, music.beat(BeatFraction.Half))
            music.playTone(523, music.beat(BeatFraction.Quarter))
            music.playTone(494, music.beat(BeatFraction.Quarter))
        }
    }
})
forever(function () {
    if (collarfull == 1) {
        music.setTempo(170)
        for (let index = 0; index < 1; index++) {
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(370, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(554, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(330, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(370, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(294, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(370, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Half))
            music.playTone(247, music.beat(BeatFraction.Whole))
            music.rest(music.beat(BeatFraction.Whole))
        }
    }
})
forever(function () {
    if (mooderndaycain == 1) {
        music.setTempo(122)
        music.playTone(233, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 1; index++) {
            music.playTone(698, music.beat(BeatFraction.Whole))
            music.playTone(698, music.beat(BeatFraction.Half))
            music.playTone(622, music.beat(BeatFraction.Half))
            music.playTone(554, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
        }
        music.playTone(233, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 1; index++) {
            music.playTone(740, music.beat(BeatFraction.Whole))
            music.playTone(740, music.beat(BeatFraction.Half))
            music.playTone(698, music.beat(BeatFraction.Half))
            music.playTone(622, music.beat(BeatFraction.Half))
            music.playTone(466, music.beat(BeatFraction.Half))
        }
        music.playTone(208, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 1; index++) {
            music.playTone(740, music.beat(BeatFraction.Whole))
            music.playTone(740, music.beat(BeatFraction.Half))
            music.playTone(698, music.beat(BeatFraction.Half))
            music.playTone(622, music.beat(BeatFraction.Half))
            music.playTone(415, music.beat(BeatFraction.Half))
        }
        music.playTone(262, music.beat(BeatFraction.Whole))
        for (let index = 0; index < 1; index++) {
            music.playTone(698, music.beat(BeatFraction.Whole))
            music.playTone(740, music.beat(BeatFraction.Half))
            music.playTone(698, music.beat(BeatFraction.Half))
            music.playTone(740, music.beat(BeatFraction.Half))
            music.playTone(932, music.beat(BeatFraction.Half))
        }
    }
})
forever(function () {
    if (pompeii == 1) {
        music.setTempo(128)
        for (let index = 0; index < 1; index++) {
            music.playTone(587, music.beat(BeatFraction.Whole))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.playTone(494, music.beat(BeatFraction.Whole))
            music.playTone(587, music.beat(BeatFraction.Half))
            music.playTone(494, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(554, music.beat(BeatFraction.Whole))
            music.playTone(554, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(554, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(554, music.beat(BeatFraction.Whole))
            music.playTone(554, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(554, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
        }
        for (let index = 0; index < 1; index++) {
            music.playTone(494, music.beat(BeatFraction.Whole))
            music.playTone(494, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Whole))
            music.playTone(494, music.beat(BeatFraction.Half))
            music.playTone(440, music.beat(BeatFraction.Half))
            music.rest(music.beat(BeatFraction.Half))
        }
    }
})
forever(function () {
    if (rick == 1) {
        music.setTempo(128)
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(698, music.beat(BeatFraction.Whole))
        music.playTone(698, music.beat(BeatFraction.Half))
        music.playTone(831, music.beat(BeatFraction.Quarter))
        music.playTone(740, music.beat(BeatFraction.Quarter))
        music.playTone(698, music.beat(BeatFraction.Quarter))
        music.playTone(622, music.beat(BeatFraction.Quarter))
        music.playTone(554, music.beat(BeatFraction.Whole))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(622, music.beat(BeatFraction.Whole))
        music.playTone(622, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Whole))
        music.playTone(466, music.beat(BeatFraction.Half))
        music.playTone(831, music.beat(BeatFraction.Quarter))
        music.playTone(740, music.beat(BeatFraction.Quarter))
        music.playTone(698, music.beat(BeatFraction.Quarter))
        music.playTone(622, music.beat(BeatFraction.Quarter))
    }
})
