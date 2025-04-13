class catclass
{

    constructor(x,y,speed,model,texture,radius,radiCenter,index)
    {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.model = model;
        this.texture = texture;
        this.radius = radius;
        this.radiCenter = radiCenter;
        this.index = index;
    }

    randomMove()
    {
        this.x = random(-75,75);
        this.y = random(-75,75);
    }

    draw()
    {
        //push();
        //rotateX(frameCount * this.speed);
        //rotateY(frameCount * this.speed);
        //rotateZ(frameCount * this.speed);
        push();
        rotateX(frameCount * this.speed);
        rotateY(frameCount * this.speed);
        //rotateZ(frameCount * this.speed);
        translate(this.x, this.y);
        rotateX(radians(180));
        normalMaterial();
        //texture(textureArray[index]);
        if(this.texture)
        {
            texture(this.texture);
        }
        torus(this.radius,this.radiCenter);
        //translate(this.x, this.y);
        pop();
        
    }

    rotation()
    {
        rotateX(frameCount * this.speed);
        rotateY(frameCount * this.speed);
        rotateZ(frameCount * this.speed);
    }
}