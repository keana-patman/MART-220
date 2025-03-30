class particleclass
{
    constructor(pX,pY)
    {
        this.pX = pX;
        this.pY = pY;
        this.vx = random(-1,1);
        this.vy = random(-5,-1);
        this.alpha = 255;
    }

    finished()
    {
        return this.alpha < 0;
    }

    update()
    {
        this.pX += this.vx;
        this.pY += this.vy;
        this.alpha -= 10;
    }

    show()
    {
        noStroke();
        fill(255,this.alpha);
        ellipse(this.pX,this.pY,16);
    }

    hide()
    {
        noStroke();
        fill(0,0);
        ellipse(this.pX,this.pY,16);
    }
}