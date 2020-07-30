class Scene0 extends Phaser.Scene {
    constructor() {
        super("bootGame");
    }

    preload () {
        //background
        this.load.image('sky', 'assets/sky.png');
        this.load.image('background', 'assets/forest_background.png');
        this.load.image('midground', 'assets/forest_midground.png');

        //effects
        this.load.image('atk_effect', 'assets/atk_effect.png');

        //ground
        this.ground = this.load.image('ground', 'assets/ground.png');
    
        //atlas for sprite animation
        this.load.atlas('player', 'assets/heroKnightSprites.png', 'assets/heroKnightSprites.json');
        this.load.atlas('skeleton', 'assets/skeletonSprites.png', 'assets/skeletonSprites.json');  
    }

    create() {
        this.add.text(20, 20, "Loading game...");
        this.addAnimations();
        this.scene.start("level_one");
    }

    //Add player and skeleton animations
    addAnimations() {

        //Player IDLE
        this.anims.create({
            key: 'HeroKnight_Idle',
            frames: this.anims.generateFrameNames('player', {
                start: 0,
                end: 7,
                zeroPad: 1,
                prefix: 'HeroKnight_Idle_',
                suffix: '.png'
            }),
            frameRate: 6,
            repeat: -1
        });
    
        //create RUN animation
        this.anims.create({
            key: 'HeroKnight_Run',
            frames: this.anims.generateFrameNames('player', {
                start: 0,
                end: 9,
                zeroPad: 1,
                prefix: 'HeroKnight_Run_',
                suffix: '.png'
            }),
            frameRate: 15,
            repeat: -1
        });
    
        //create ATTACK1 animation
        this.anims.create({
            key: 'HeroKnight_Attack1',
            frames: this.anims.generateFrameNames('player', {
                start: 0,
                end: 5,
                zeroPad: 1,
                prefix: 'HeroKnight_Attack1_',
                suffix: '.png'
            }),
            frameRate: 15,
            repeat: 0
        });
    
    
        //create ATTACK3 animation (down attack)
        this.anims.create({
            key: 'HeroKnight_Attack3',
            frames: this.anims.generateFrameNames('player', {
                start: 0,
                end: 7,
                zeroPad: 1,
                prefix: 'HeroKnight_Attack3_',
                suffix: '.png'
            }),
            frameRate: 15,
            repeat: -1
        });
    
        //create JUMP animation
        this.anims.create({
            key: 'HeroKnight_Jump',
            frames: this.anims.generateFrameNames('player', {
                start: 0,
                end: 2,
                zeroPad: 1,
                prefix: 'HeroKnight_Jump_',
                suffix: '.png'
            }),
            frameRate: 15,
            repeat: -1
        });
    
        //create FALL animation
        this.anims.create({
            key: 'HeroKnight_Fall',
            frames: this.anims.generateFrameNames('player', {
                start: 0,
                end: 3,
                zeroPad: 1,
                prefix: 'HeroKnight_Fall_',
                suffix: '.png'
            }),
            frameRate: 15,
            repeat: -1
        });
    
        //create ROLL animation
        this.anims.create({
            key: 'HeroKnight_Roll',
            frames: this.anims.generateFrameNames('player', {
                start: 0,
                end: 8,
                zeroPad: 1,
                prefix: 'HeroKnight_Roll_',
                suffix: '.png'
            }),
            frameRate: 15,
            repeat: 0
        });


        /*SKELETON ANIMATION */

        //create SKELETON IDLE animation
        this.anims.create({
            key: 'Skeleton_Idle',
            frames: this.anims.generateFrameNames('skeleton', {
                start: 0,
                end: 6,
                zeroPad: 1,
                prefix: 'Skeleton_Idle_',
                suffix: '.png'
            }),
            frameRate: 4,
            repeat: -1
        });

        //create SKELETON WALK animation
        this.anims.create({
            key: 'Skeleton_Walk',
            frames: this.anims.generateFrameNames('skeleton', {
                start: 0,
                end: 9,
                zeroPad: 1,
                prefix: 'Skeleton_Walk_',
                suffix: '.png'
            }),
            frameRate: 7,
            repeat: -1
        });


        //create SKELETON ATTACK animation
        this.anims.create({
            key: 'Skeleton_Attack',
            frames: this.anims.generateFrameNames('skeleton', {
                start: 0,
                end: 16,
                zeroPad: 1,
                prefix: 'Skeleton_Attack_',
                suffix: '.png'
            }),
            frameRate: 8,
            repeat: -1
        });
    }
}