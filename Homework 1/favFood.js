function setup()
{
    createCanvas(500,500);
}

function draw()
{
    background(225,120,106);
    strokeWeight(2);

    //plate
    stroke('black');
    fill('white');
    ellipse(250,400,300,50);

    //green beans
    noStroke();
    fill(42,177,29);
    rect(120,370,200,10);
    rect(110,385,200,10);
    fill(52,134,45);
    rect(125,380,200,10);

    //fish
    fill(221,199,175);
    noStroke();
    triangle(300,360,450,270,400,360);
    ellipse(275,360,250,90);
    triangle(400,250,425,230,450,270);
    triangle(450,270,450,230,480,220);

    stroke('black');
    strokeWeight(10);
    point(200,350);
    point(170,345);

    //more green beans
    noStroke();
    fill(52,134,45);
    rect(150,400,200,10);
    rect(170,390,200,10);
    fill(42,177,29);
    rect(155,395,200,10);
    rect(160,410,200,10);
    
    //lemon
    noStroke();
    fill(255,234,104);
    circle(300,380,70);
    fill(255,248,198);
    circle(300,380,55);

    fill(221,199,175);
    rect(260,345,80,35);

    //grill marks
    stroke(194,124,19);
    strokeWeight(4);
    line(210,325,250,360);
    line(240,325,280,360);
    line(270,325,310,360);
    line(300,325,340,360);
    line(330,325,360,350);

    //lemon sauce
    noStroke();
    fill(255,234,104);
    ellipse(285,330,120,30);

    //text
    fill('white');
    textSize(20);
    text("Grilled Fish",130,200);
    




}