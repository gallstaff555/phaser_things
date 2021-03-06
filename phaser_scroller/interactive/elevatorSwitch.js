class ElevatorSwitch extends Phaser.Physics.Arcade.Sprite {
    constructor(config) {
        super(config.scene, config.x, config.y, config.key);
         
        config.scene.add.existing(this);
        config.scene.physics.world.enableBody(this);   
        this.setOrigin(0);
        this.body.setAllowGravity(false);
        this.body.setImmovable(true);
    }

}