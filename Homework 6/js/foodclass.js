class foodclass
{
    constructor(gX,gY)
    {
        this.gX = gX;
        this.gY = gY;
    }

    createBean()
    {
        fill(42,177,29);
        rect(this.gX,this.gY,100,5);
    }
    
}