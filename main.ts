scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tubboTrowsers.vy == 0) {
        tubboTrowsers.vy = -200
    }
})
let tubboTrowsers: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`textile level 1`)
tubboTrowsers = sprites.create(assets.image`pants player`, SpriteKind.Player)
controller.moveSprite(tubboTrowsers, 100, 0)
tubboTrowsers.ay = 350
scene.cameraFollowSprite(tubboTrowsers)
