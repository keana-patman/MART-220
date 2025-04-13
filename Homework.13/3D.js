let fishScales;
let fishFins;
let trafficCone;

let font;

let cone;
let mug;

var rotateSpeed = .01;
var mugObject;

var mugX = 50;
var mugY = 50;

var mugArray = [];
var textureArray = [];

var pink;
var blue;
var pale;
var choco;
var sprink;

var index = 0;

function preload()
{
    fishScales = loadImage("images/fish scales.jpg");
    fishFins = loadImage("images/fish fins.jpg");
    trafficCone = loadImage("images/traffic cone.jpg");

    font = loadFont("fonts/Tomatoes-O8L8.ttf");

    cone = loadModel("assets/Cone.obj",true);
    mug = loadModel("assets/Mug.obj", true);

    pink = loadImage("images/pink.jpg");
    //textureArray.push(pink);
    blue = loadImage("images/blue.jpg");
    //textureArray.push(blue);
    pale = loadImage("images/pale.jpg");
    //textureArray.push(pale);
    choco = loadImage("images/chocococo.jpg");
    //textureArray.push(choco);
    sprink = loadImage("images/sprinkles.png");
    //textureArray.push(sprink);

    textureArray = [pink, blue, pale, choco, sprink];
    //console.log("textureArray:", textureArray);
}

function setup()
{
    createCanvas(500,500,WEBGL);

    for(var i = 0; i < textureArray.length; i++)
    {
        //console.log("Using texture:", textureArray[i]);
        mugObject = new catclass(random(50),random(50),random(0.05),mug,textureArray[i],5,2.5,i);
        mugArray.push(mugObject);
    }
}

function draw()
{
    background(173,135,214);
    scale(5);
    rotateX(radians(180));
    normalMaterial();
    texture(trafficCone);
    model(cone);

    for(var i = 0; i < mugArray.length; i++)
    {
        //mugArray[i].rotation();
        index++;
        mugArray[i].draw(); 
    }
    
    

    //text
    //push();
    //translate(0,0,-100);
    resetMatrix();
    camera();

    stroke('white');
    fill('white');
    textFont(font);
    textSize(20);
    text("Donuts and a Traffic Cone",-30,-220);
    textSize(10);
    text("By: Keana Patman",110,-200);
    //pop();
    
}

function mousePressed()
{
    for(var i = 0; i < mugArray.length; i++)
        {
            mugArray[i].randomMove();
        }
    
}