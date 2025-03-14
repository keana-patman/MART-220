class imageclass
{
    constructor(x,y)
    {
        //this.path = path;
        this.x = x;
        this.y = y;
        //this.myImage = loadImage(this.path);
        //this.imageWidth = 150;
        //this.imageHeight = 175;
        //this.flipX = false;
        this.currentAnimation;
        this.createAnimation();
        this.speed = 2;
    }

    createAnimation()
    {
        this.currentAnimation = createSprite(this.x, this.y,100,175);
    }

    addAnimation(aniType, fileNames)
    {
        this.currentAnimation.addAnimation(aniType, fileNames);
        this.currentAnimation.width = 150;
        this.currentAnimation.height = 350;
    }

    draw(aniType)
    {
        //this.currentAnimation.collider = "k";
        this.currentAnimation.frameDelay = 5;
        this.currentAnimation.scale = .1;
        this.currentAnimation.changeAnimation(aniType);

        if(aniType == 'walk' && this.direction == 'forward')
        {
            this.currentAnimation.direction = 0;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = this.speed;
        }
        else if(aniType == 'walk' && this.direction == 'reverse')
        {
            this.currentAnimation.direction = 180;
            this.currentAnimation.mirror.x = true;
            this.currentAnimation.speed = this.speed;
        }
        else if(aniType == 'walk' && this.direction == 'up')
        {
            this.currentAnimation.direction = 270;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = this.speed;
        }
        else if(aniType == 'walk' && this.direction == 'down')
        {
            this.currentAnimation.direction = -270;
            this.currentAnimation.mirror.x = false;
            this.currentAnimation.speed = this.speed;
        }
        else
        {
            this.currentAnimation.velocity.x = 0;
            this.currentAnimation.velocity.y = 0;
        } 
    }

    updatePosition(direction)
    {
        this.direction = direction;
    }

    isColliding(myImage)
    {
        return this.currentAnimation.collide(myImage);
    }
}