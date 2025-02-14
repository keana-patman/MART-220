class imageclass
{
    constructor(path,x,y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
    }

    getImage()
    {
        var myImage = loadImage(this.path);
        return myImage;
    }

    /*move(xDir,yDir)
    {
        this.x = this.x + xDir;
        this.y = this.y + yDir;
    }*/

    getX()
    {
        return this.x;
    }
    
    getY()
    {
        return this.y;
    }
}