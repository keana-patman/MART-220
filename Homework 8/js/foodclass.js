class foodclass
{
    constructor(gX,gY,gW,gH)
    {
        this.gX = gX;
        this.gY = gY;
        this.gH = gH;
        this.gW = gW;
        this.food = new Sprite(this.gX, this.gY, this.gW, this.gH);
    }

    createBean()
    {
        this.food.strokeWeight = 2;
        this.food.stroke = '#348F2D';
        //fill(42,177,29);
        this.food.color = '#2AB11D'
        //rect(this.gX,this.gY,this.gW,this.gH);
        
    }

    createDBean()
    {
        this.food.stroke = '#6B570D';
        this.food.color = '#8C5912';
        fillGradient('linear', {
            from : [this.gX, this.gY],   // x, y : Coordinates
            to : [this.gX + 100, this.gY +5], // x, y : Coordinates
            steps : [
                color(186,156,24),
                color(161,60,22),
                color(0)
            ] // Array of p5.color objects or arrays containing [p5.color Object, Color Stop (0 to 1)]
        });
        //rect(this.gX,this.gY,this.gW,this.gH);
    }
    
}