class obstacleclass
{
    constructor(oX,oY,oW,oH)
    {
        this.oX = oX;
        this.oY = oY;
        this.oW = oW;
        this.oH = oH;
        this.rock = new Sprite(this.oX, this.oY, this.oW, this.oH);
    }

    createRock()
    {
        this.rock.collider = "s";
        this.rock.stroke = '#B0B0B0';
        this.rock.color = '#D9D9D9';
        this.rock.strokeWeight = 4;
    }
}