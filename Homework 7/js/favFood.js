var x = 0;
var y = 0;
var X2 = 160;
var Y2 = 410;

var counter = 0;

var fontOne;
var fontTwo;

var chatMan;
var lemonSlice;
var steam;

var steamY = 150;

var timerValue = 0;

var lemonX = 250;
var lemonY = 250;
var lemonDirectionX = 1;
var lemonDirectionY;

//character
var zombie;
var idleAnimation = [];
var walkAnimation = [];

var idleString = [];
var walkString = [];
var flipX = false;

var i = 0;
var j = 0;

var myBean;
var beanArray = [];
var myDBean;
var dBeanArray = [];

//timer shenanigans
let timer = 60;
var count = 0;
var randomMove;
var secs;

//sound
var backgroundSound;
var goodSound;
var badSound;

function preload()
{
    //character animation
    idleString = loadStrings("data/idle.txt");
    walkString = loadStrings("data/walk.txt");

    //sound
    backgroundSound = loadSound("sounds/onion.mp3");
    goodSound = loadSound("sounds/collect.mp3");
    badSound = loadSound("sounds/vineboom.mp3");

    //other
    /*fontOne = loadFont('fonts/LibreFranklin-VariableFont_wght.ttf');
    fontTwo = loadFont('fonts/Ephesis-Regular.ttf');

    chatMan = loadImage('images/ChatGPTmanImage.jpg');
    lemonSlice = loadImage('images/lemon.png');
    steam = loadImage('images/steam.png'); */
}

function setup()
{
    createCanvas(500,500);

    randomMove = random(100,2000);
    secs = millis();

    setInterval(idleIndex,50);
    setInterval(walkIndex,70);

    //setInterval(timeMove,1000);
    setInterval(randomMovement,1000);

    backgroundMusic(); //might take a second to hear it after user input

    

    for(var k = 0; k < 7; k++)
    {
        myBean = new foodclass(random(450),random(450),100,5);
        beanArray.push(myBean);
    }

    for(var m = 0; m < 3; m++)
    {
        myDBean = new foodclass(random(450),random(450),100,5);
        dBeanArray.push(myDBean);
    }

    for(var i = 0; i < idleString.length; i++)
    {
        zombie = new imageclass(idleString[i], x, y);
        idleAnimation.push(zombie);
    }
    for(var j = 0; j < walkString.length; j++)
    {
        zombie = new imageclass(walkString[j], x, y);
        walkAnimation.push(zombie);
    }
}

function draw()
{
    background(225,120,106);
    strokeWeight(2);
     
    //random green beans
    for(var k = 0; k < beanArray.length; k++)
    {
        beanArray[k].createBean();
    }

    for(var m = 0; m < dBeanArray.length; m++)
    {
        dBeanArray[m].createDBean();
    }

    for (let k = 0; k < beanArray.length; k++) 
    {
        if (collideRectRect(walkAnimation[j].x, walkAnimation[j].y, walkAnimation[j].imageWidth, walkAnimation[j].imageHeight,beanArray[k].gX, beanArray[k].gY, beanArray[k].gW, beanArray[k].gH)) 
        {
            beanArray.splice(k, 1);
            goodSound.play();
            count++; 
        }
    }

    for (let m = 0; m < dBeanArray.length; m++) 
    {
        if (collideRectRect(walkAnimation[j].x, walkAnimation[j].y, walkAnimation[j].imageWidth, walkAnimation[j].imageHeight,dBeanArray[m].gX, dBeanArray[m].gY, dBeanArray[m].gW, dBeanArray[m].gH)) 
        {
            dBeanArray.splice(m, 1);
            badSound.play();
            count--; 
        }
    }

//character movement
    if(!keyIsPressed)
    {
        idleAnimation[i].draw();
    }

    if(keyIsPressed)
    {
        walkAnimation[j].draw();
        counter++;
        if(counter > 3)
        {
            walkIndex();
            counter = 0;
        } 

        if(key == 'w')
        {
            y -= 2;
        }
        else if(key == 'a')
        {
            x -= 2;
            flipX = true; 
        }
        else if(key == 's')
        {
            y += 2;
        }
        else if(key == 'd')
        {
            x += 2;
            flipX = false;
        }

        for(let i = 0; i < 15; i++ )
        {
            idleAnimation[i].x = x;
            idleAnimation[i].y = y;
            idleAnimation[i].flipX = flipX;
        } 
        for(let j = 0; j < 10; j++ )
        {
            walkAnimation[j].x = x;
            walkAnimation[j].y = y;
            walkAnimation[j].flipX = flipX;
        }
    }

    gameTimer();
    displayCounter();   
}

//character timer
/*function timeMove()
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
}*/

function idleIndex()
{
    i += 1;

    if(i >= idleAnimation.length)
    {
        i = 0;
    }
}

function walkIndex()
{
    j += 1;

    if(j >= walkAnimation.length)
    {
        j = 0;
    }
}

//food functions
function fish()
{
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
}

function greenBeanA()
{
    noStroke();
    fill(52,134,45);
    rect(150,400,200,10);
    rect(170,390,200,10);
    fill(42,177,29);
    rect(155,395,200,10);
    rect(X2,Y2,200,10);
}

function lemon()
{
    noStroke();
    fill(255,234,104);
    circle(300,380,70);
    fill(255,248,198);
    circle(300,380,55);

    fill(221,199,175);
    rect(260,345,80,35);
}

function grillMarks()
{
    stroke(194,124,19);
    strokeWeight(4);
    line(210,325,250,360);
    line(240,325,280,360);
    line(270,325,310,360);
    line(300,325,340,360);
    line(330,325,360,350);
}

function lemonSauce()
{
    noStroke();
    fill(255,234,104);
    ellipse(285,330,120,30);
}

function words()
{
    strokeWeight(4);
    fill('white');
    textFont(fontOne);
    textSize(20);
    text('"The Grilled Fish"',15,40);
    textFont(fontTwo);
    textSize(25);
    text("Keana Patman",370,485);
}

function plate()
{
    stroke('black');
    fill('white');
    ellipse(250,400,300,50);
}

function man()
{
    chatMan.resize(300,0);
    image(chatMan,100,100);
}

function smoke()
{
    image(steam,260,steamY);
}

function lemonImage()
{
    lemonSlice.resize(100,0);
    image(lemonSlice,lemonX,lemonY);
    lemonX += lemonDirectionX;
    if(lemonX >= 280 || lemonX <= 200)
    {
        lemonDirectionX *= -1;
    }
}

//game functions
function gameTimer()
{
    noStroke();
    fill('white');
    textSize(30);
    text(timer,225,40);

    if(frameCount % 60 == 0 && timer > 0)
    {
        timer--;
    }

    if(timer > 0)
    {
        if(count == 7)
        {
            text("CONGRATULATIONS",110,250);
        }
    }
    else if(timer == 0)
    {
        text("GAME OVER",150,250);
    } 
}

function displayCounter()
{
    noStroke();
    fill("white");
    textSize(20);
    text("Green Beans Consumed: "+ count,250,490);
}

function randomMovement()
{
    if(millis()- secs > randomMove)
    {
       for(k = 0; k < beanArray.length; k++)
        {
            beanArray[k].gX = random(50,400);
            beanArray[k].gY = random(10,450);
        }
        
        secs = millis();
        randomMove = random(100,2000);
    }

    
}

function backgroundMusic()
{
    backgroundSound.play();
    backgroundSound.loop();
    userStartAudio();
}