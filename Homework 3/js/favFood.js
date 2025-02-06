var x = 285;
var y = 330;
var x2 = 160;
var y2 = 410;

var plateX = 250;
var plateY = 400;
var plateDirectionX;
var plateDirectionY;

var beanX = 120;
var beanY = 370;
var beanDirectionX;
var beanDirectionY;

var beanX2 = 110;
var beanY2 = 385;
var beanDirectionX2;
var beanDirectionY2;

var beanX3 = 125;
var beanY3 = 380;
var beanDirectionX3;
var beanDirectionY3;

var lemonX = 250;
var lemonY = 250;
var lemonDirectionX = 1;
var lemonDirectionY;

var fontOne;
var fontTwo;

var chatMan;
var lemonSlice;
var steam;

var steamY = 150;

var timerValue = 0;


function preload()
{
    fontOne = loadFont('fonts/LibreFranklin-VariableFont_wght.ttf');
    fontTwo = loadFont('fonts/Ephesis-Regular.ttf');

    chatMan = loadImage('images/ChatGPTmanImage.jpg');
    lemonSlice = loadImage('images/lemon.png');
    steam = loadImage('images/steam.png');
}

function setup()
{
    createCanvas(500,500);
    plateDirectionX = random(1,5);
    plateDirectionY = random(1,5);

    beanDirectionX = random(2,6);
    beanDirectionY = random(2,6);
    beanDirectionX2 = random(2,6);
    beanDirectionY2 = random(2,6);
    beanDirectionX3 = random(2,6);
    beanDirectionY3 = random(2,6);

    setInterval(timeMove,1000);
}

function draw()
{
    background(225,120,106);
    strokeWeight(2);

    timerValue++;

    //man image
    chatMan.resize(300,0);
    image(chatMan,100,100);

    //plate
    stroke('black');
    fill('white');
    ellipse(plateX,plateY,300,50);
    plateX += plateDirectionX;
    plateY += plateDirectionY;
    if(plateX >= 370 || plateX <= 130)
    {
        plateDirectionX *= -1;
    }
    if(plateY >= 480 || plateY <= 300)
    {
        plateDirectionY *= -1;   
    }
    

    //green beans
    noStroke();
    fill(42,177,29);
    rect(beanX,beanY,200,10);
    rect(beanX2,beanY2,200,10);
    fill(52,134,45);
    rect(beanX3,beanY3,200,10);
    beanX += beanDirectionX;
    beanY += beanDirectionY;

    beanX2 += beanDirectionX2;
    beanY2 += beanDirectionY2;

    beanX3 += beanDirectionX3;
    beanY3 += beanDirectionY3;

    if(beanX >= width || beanX <= 0)
    {
        beanDirectionX *= -1;
    }
    if(beanY >= height || beanY <= 0)
    {
        beanDirectionY *= -1;
    }

    if(beanX2 >= width || beanX2 <= 0)
    {
        beanDirectionX2 *= -1;
    }
    if(beanY2 >= height || beanY2 <= 0)
    {
        beanDirectionY2 *= -1;
    }

    if(beanX3 >= width || beanX3 <= 0)
    {
        beanDirectionX3 *= -1;
    }
    if(beanY3 >= height || beanY3 <= 0)
    {
        beanDirectionY3 *= -1;
    }

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
    rect(x2,y2,200,10);
    
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
    ellipse(x,y,120,30);

    if(keyIsPressed)
    {
        if(key == 'w')
        {
            y -= 3;
        }
        else if(key == 'a')
        {
            x -= 3;
        }
        else if(key == 's')
        {
            y += 3;
        }
        else if(key == 'd')
        {
            x += 3;
        }
    }
    
    //text
    fill('white');
    textFont(fontOne);
    textSize(20);
    text('"The Grilled Fish"',15,40);
    textFont(fontTwo);
    textSize(25);
    text("Keana Patman",370,485);

    //images 
    lemonSlice.resize(100,0);
    image(lemonSlice,lemonX,lemonY);
    lemonX += lemonDirectionX;
    if(lemonX >= 280 || lemonX <= 200)
    {
        lemonDirectionX *= -1;
    }
    
    image(steam,260,steamY);
    
}
//to move a green bean
function mouseClicked()
    {
        x2 = mouseX;
        y2 = mouseY;
    }

//timer stuff
function timeMove()
{
    if(timerValue = 10)
    {
        steamY -= 10;
        timerValue = 0;
    }
    if(steamY <= -50)
    {
        steamY = 150;
    }
}