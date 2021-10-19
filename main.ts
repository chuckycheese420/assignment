namespace SpriteKind {
    export const door = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (tubboTrowsers.vy == 0) {
        tubboTrowsers.vy = -200
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`door`, function (sprite, location) {
    destroyDoor()
    scene.setBackgroundImage(assets.image`Level2background`)
    tiles.setTilemap(tilemap`level0`)
})
function destroyDoor () {
    travelDoor.destroy()
}
let travelDoor: Sprite = null
let tubboTrowsers: Sprite = null
scene.setBackgroundImage(assets.image`background`)
tiles.setTilemap(tilemap`textile level 1`)
tubboTrowsers = sprites.create(assets.image`pants player`, SpriteKind.Player)
controller.moveSprite(tubboTrowsers, 100, 0)
tubboTrowsers.ay = 350
scene.cameraFollowSprite(tubboTrowsers)
for (let value of tiles.getTilesByType(assets.tile`door`)) {
    travelDoor = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e 5 5 e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        . . . e e e e e e e e e e . . . 
        `, SpriteKind.door)
    tiles.placeOnTile(travelDoor, value)
    tiles.setTileAt(value, assets.tile`door`)
}
