class obstacleclass
{
    static rockCounter = 5;

    constructor(oX,oY,oW,oH,)
    {
        this.oX = oX;
        this.oY = oY;
        this.oW = oW;
        this.oH = oH;
        this.rock = new Sprite(this.oX, this.oY, this.oW, this.oH);
        this.health = 50;
        this.counter = 5;
    }

    createRock()
    {
        this.rock.collider = "s";
        this.rock.stroke = '#B0B0B0';
        this.rock.color = '#D9D9D9';
        this.rock.strokeWeight = 4;
    }

    intersect(x,y,pX,pY)
    {
        let distance = dist(x,y,this.oX, this.oY);
        if(distance < this.oW + 10 && distance < this.oH + 10)
        {
            if(this.health >= -1)
            {
                this.health -= 1;

                for(let j = 0; j < 5; j++)
                {
                    let p = new particleclass(pX,pY);
                    particles.push(p);
                }
            
                for(let j = particles.length - 1; j >= 0; j--)
                {
                    particles[j].update();
                    particles[j].show();
            
                    if(particles[j].finished())
                    {
                        particles.splice(j,1);
                    }
                }
            }

            else if(this.health < 0)
            {
                this.rock.remove();
                for(let j = particles.length - 1; j >= 0; j--)
                {
                    particles[j].hide(); 
                    particles.splice(j,1); 
                }
            } 

            if(this.health == 0)
            {
                obstacleclass.rockCounter -= 1;
                print(obstacleclass.rockCounter);
            }
        }
    }

    positionX()
    {
        return this.oX;
    }

    positionY()
    {
        return this.oY;
    }
}