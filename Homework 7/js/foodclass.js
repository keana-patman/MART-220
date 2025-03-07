class foodclass
{
    constructor(gX,gY,gW,gH)
    {
        this.gX = gX;
        this.gY = gY;
        this.gH = gH;
        this.gW = gW;
    }

    createBean()
    {
        stroke(52,134,45);
        fill(42,177,29);
        rect(this.gX,this.gY,this.gW,this.gH);
        
    }

    createDBean()
    {
        stroke(153,124,18);
        fill(186,156,24);
        fillGradient('linear', {
            from : [this.gX, this.gY],   // x, y : Coordinates
            to : [this.gX + 100, this.gY +5], // x, y : Coordinates
            steps : [
                color(186,156,24),
                color(161,60,22),
                color(0)
            ] // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
        });
        rect(this.gX,this.gY,this.gW,this.gH);
    }
    
}