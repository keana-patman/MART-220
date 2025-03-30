var x = 0;
var y = 0;

var counter = 0;
var health = 5;

//character
var zombie;
var idleAnimation = [];
var walkAnimation = [];

var idleString = [];
var walkString = [];
var flipX = false;

var attackString =[];

var i = 0;
var j = 0;

var myBean;
var beanArray = [];
var myDBean;
var dBeanArray = [];

var myRock;
var rockArray = [];

var rockCounter = 5;

//timer shenanigans
let timer = 60;
var count = 0;
var randomMove;
var secs;

let paused = false;

//sound
var backgroundSound;
var goodSound;
var badSound;

//particle
const particles = [];

function preload()
{
    //character animation
    //idleString = loadStrings("data/idle.txt");
    idleString = loadAnimation('character/Idle (0).png',
        'character/Idle (1).png',
        'character/Idle (2).png',
        'character/Idle (3).png',
        'character/Idle (4).png',
        'character/Idle (5).png',
        'character/Idle (6).png',
        'character/Idle (7).png',
        'character/Idle (8).png',
        'character/Idle (9).png',
        'character/Idle (10).png',
        'character/Idle (11).png',
        'character/Idle (12).png',
        'character/Idle (13).png',
        'character/Idle (14).png');
    //walkString = loadStrings("data/walk.txt");
    walkString = loadAnimation('character/Walk (0).png',
        'character/Walk (1).png',
        'character/Walk (2).png',
        'character/Walk (3).png',
        'character/Walk (4).png',
        'character/Walk (5).png',
        'character/Walk (6).png',
        'character/Walk (7).png',
        'character/Walk (8).png',
        'character/Walk (9).png');

    attackString = loadAnimation('character/Attack (0).png',
        'character/Attack (1).png',
        'character/Attack (2).png',
        'character/Attack (3).png',
        'character/Attack (4).png',
        'character/Attack (5).png',
        'character/Attack (6).png',
        'character/Attack (7).png',)

    //sound
    backgroundSound = loadSound("sounds/onion.mp3");
    goodSound = loadSound("sounds/collect.mp3");
    badSound = loadSound("sounds/vineboom.mp3");

}

function setup()
{
    createCanvas(500,500);

    //randomMove = random(100,2000);
    //secs = millis();

    //setInterval(idleIndex,50);
    //setInterval(walkIndex,70);

    //setInterval(randomMovement,1000);

    backgroundMusic(); //might take a second to hear it after user input

    zombie = new imageclass(100,100);
    zombie.addAnimation('idle',idleString);
    zombie.addAnimation('walk',walkString);
    zombie.addAnimation('attack',attackString);
    

    for(var k = 0; k < 10; k++)
    {
        myBean = new foodclass(random(450),random(450),100,5);
        beanArray.push(myBean);
    }

    for(var m = 0; m < 5; m++)
    {
        myDBean = new foodclass(random(450),random(450),100,5);
        dBeanArray.push(myDBean);
    }

    for(var i = 0; i < 5; i++)
    {
        myRock = new obstacleclass(random(450),random(450),80,50);
        rockArray.push(myRock);
    }

}

function draw()
{
    background(225,120,106);
    strokeWeight(2);

    makeFood();

    moveZombie();

    makeRocks();

    gameTimer();
    displayCounter();

    //drawSprites();
}

//game functions
function gameTimer()
{
    noStroke();
    fill('white');
    textSize(30);
    text(timer,225,40);

    if(paused == false)
    {
        if(frameCount % 60 == 0 && timer > 0)
        {
            timer--;
        }

        if(timer > 0)
        {
            if(count == 10)
            {
                text("CONGRATULATIONS",110,250);
                paused = true;
                
            }
            else if(health == 0)
            {
                text("YOU DIED",180,250);
                paused = true;
                
            }
            else if(obstacleclass.rockCounter == 0)
            {
                text("YOU WIN",180,250);
                paused = true;
                
            }
        }
        else if(timer == 0)
        {
            text("GAME OVER",150,250);
        } 
    }
    else if(paused == true)
    {
        if(frameCount % 60 == 0 && timer > 0)
            {
                timer = timer;
            }
        if(count == 10)
        {
            text("CONGRATULATIONS",110,250);
            paused = true;                
        }
        else if(health == 0)
        {
            text("YOU DIED",180,250);
            paused = true;                    
        }
        else if(obstacleclass.rockCounter == 0)
        {
            text("YOU WIN",180,250);
            paused = true;        
       }
    }

}

function displayCounter()
{
    noStroke();
    fill("white");
    textSize(20);
    text("Green Beans Consumed: "+ count,248,490);
    text("Health: "+ health,10,25);
    textSize(10);
    text("press (e) to attack rocks",5,495);
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

function moveZombie()
{
    if(kb.pressing('d'))
    {
        zombie.updatePosition('forward');
        zombie.draw('walk');
        
    }
    else if(kb.pressing('a'))
    {
        zombie.updatePosition('reverse');
        zombie.draw('walk');
        
    }
    else if(kb.pressing('w'))
    {
        zombie.updatePosition('up');
        zombie.draw('walk');
        
    }
    else if(kb.pressing('s'))
    {
        zombie.updatePosition('down');
        zombie.draw('walk');
        
    }
    else if(kb.pressing('e'))
    {
        zombie.draw('attack');
        for (let i = 0; i < rockArray.length; i++)
        {
            rockArray[i].intersect(zombie.getCurrentAnimationX(), zombie.getCurrentAnimationY(),rockArray[i].positionX(), rockArray[i].positionY());   
        }
    }   

    else
    {
        zombie.draw('idle');
    }

    for (let k = 0; k < beanArray.length; k++) 
    {
        if(zombie.isColliding(beanArray[k].food))
        {
            beanArray[k].food.remove();
            goodSound.play();
            count++;
        }
    }

    for (let m = 0; m < dBeanArray.length; m++)
    {
        if(zombie.isColliding(dBeanArray[m].food))
        {
            dBeanArray[m].food.remove();
            badSound.play();
            health--;
        }
    }
}

function makeFood()
{
    for(var k = 0; k < beanArray.length; k++)
    {
        beanArray[k].createBean();
    }
    
    for(var m = 0; m < dBeanArray.length; m++)
    {
        dBeanArray[m].createDBean();
    }
}

function makeRocks()
{
    for(var i = 0; i < rockArray.length; i++)
    {
        rockArray[i].createRock();
    }
}
