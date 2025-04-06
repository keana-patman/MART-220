let fishScales;
let fishFins;

let font;

function preload()
{
    fishScales = loadImage("images/fish scales.jpg");
    fishFins = loadImage("images/fish fins.jpg");

    font = loadFont("fonts/Tomatoes-O8L8.ttf");
}

function setup()
{
    createCanvas(500,500,WEBGL);
}

function draw()
{
    background(173,135,214);
    noStroke();
    push();
    rotateY(frameCount * 0.01);
    texture(fishScales);
    ellipsoid(70,30,40);
    pop();
    push();
    rotateY(frameCount * 0.01);
    texture(fishScales);
    rotateX(radians(180));
    rotateZ(radians(-45));
    translate(28,87);
    cone(25,90);
    pop();
    //forward fin
    push();
    rotateY(frameCount * 0.01);
    texture(fishFins);
    rotateZ(radians(45));
    translate(0,0,-40);
    plane(30,30);
    //back fin
    translate(0,0,80);
    plane(30,30);
    pop();
    // eyes
    push();
    rotateY(frameCount * 0.01);
    normalMaterial();
    translate(-55,-10,-20);
    sphere(5);

    translate(0,0,40);
    sphere(5);
    pop();

    //tailfins
    push();
    rotateY(frameCount * 0.01);
    texture(fishFins);
    translate(135,-95,3);
    plane(50,50,);
    rotateZ(radians(-40));
    translate(-10,-20,-5);
    plane(50,50);
    pop();

    //headfin
    push();
    rotateY(frameCount * 0.01);
    texture(fishFins);
    rotateZ(radians(45));
    translate(0,-40,0);
    plane(40,40);
    pop();

    //text
    stroke('white');
    fill('white');
    textFont(font);
    textSize(20);
    text("A Spinning Fish",30,220);
    textSize(10);
    text("By: Keana Patman",100,240);
    
    

}