class imageclass
{
    constructor(path,x,y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
        this.myImage = loadImage(this.path);
        this.imageWidth = 150;
        this.imageHeight = 175;
        this.flipX = false;
    }

    draw()
    {
        push();
        if (this.flipX) 
        {
            translate(this.imageWidth, 0);
            scale(-1.0, 1.0);
            image(this.myImage, -this.x, this.y, 150, 175);
        }
        else 
        {
            image(this.myImage, this.x, this.y, 150, 175);
        }
        pop();
    }

    hasCollided(x2, y2, w2, h2)
    {
        return (this.x < x2 + w2 && this.x +  this.imageWidth > x2 && this.y < y2 + h2 && this.y + this.imageHeight > y2);
    }
}