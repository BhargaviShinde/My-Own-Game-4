const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var slingShot;
var score = 0;
var level = 1;
var Mbottle;

function preload() {
    
    backgroundImg=loadImage("Background L1.jpg");
    
}

function setup(){
    canvas = createCanvas(1650,880);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(width/2,height-20,width,20);
    console.log(ground.body.position);

    base1 = new Ground(1050,600,600,20);
    //base2 = new Ground(980,300,400,20);

    level1 = new Level1();

    Mbottle = new Bird(200,250);

    slingshot = new SlingShot(Mbottle.body,{x:200, y:250});

}

function draw(){
    Engine.update(engine);
    background(backgroundImg);
     
    textSize(20);
    strokeWeight(1);
    stroke("lavender");
    fill("white");
    text("Score: " + score,80,50);
    text("Press space to get one more chance.", 80,80);

    strokeWeight(0);
    ground.display();
    base1.display();
    slingshot.display();
   
    if(level === 1){ 
        textSize(32);
        fill("white");
        stroke("blue");
        strokeWeight(4);
        text("Replace platic bottles with a reusable bottle...",300,200);
        level1.display();
        level1.score();
        Mbottle.display();

        if(score>500){
            level++;
            level1.destroy();
            //Mbottle.destroy();
            level1 = new Level2();
        }
    }
        else if(level === 2){   
        noStroke();
        base2 = new Ground(980,250,200,10);
        Bird.image = loadImage("Cloth Bag.png"); 
        backgroundImg = loadImage("BG L2.jpg");
        level1.display();
        Mbottle.display();
        level1.score();
        base2.display();
        textSize(32);
        fill("white");
        stroke(255,228,225);
        strokeWeight(4);
        text("Replace platic bags with a reusable Cloth Bag...",300,200);

        if(score >= 1000){
            level++;
            level1.destroy();
           // Mbottle.destroy();
            level1 = new Level3();
            
        }
    }else if(level === 3){
        noStroke();
        base2 = new Ground(980,250,200,10);
        Mbottle.width = 130;
        Mbottle.height = 125;
        Bird.image = loadImage("apple.png");
        backgroundImg = loadImage("BG L3.jpg");
        level1.display();
        Mbottle.display();
        level1.score();
        base2.display();

        textSize(32);
        fill("white");
        stroke("red");
        strokeWeight(4);
        text("Replace junk food with healthy food...",300,200);

        if(score >= 1500){
            level++;
            level1.destroy();
            //Mbottle.destroy();
            level1 = new Level4();
        }
    }else if(level === 4){
        Bird.image = loadImage("e vehicle.png"); 
        backgroundImg = loadImage("BG L4.jpg");
        level1.display();
        Mbottle.display();
        level1.score();
        textSize(32);
        fill("white");
        stroke("green");
        strokeWeight(4);
        text("Replace polluting vehicles with eco-friendly E-vehicles...",300,200);

        /*if(score >= 1500){
            level++;
            level1.destroy();
            //level = new Level4();
        }
        */
    }

   // Mbottle.display();  

    text(mouseX+","+mouseY,mouseX,mouseY);

}

function mouseDragged(){
    Matter.Body.setPosition(Mbottle.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        Matter.Body.setPosition(Mbottle.body, {x: 200 , y: 250});
        slingshot.attach(Mbottle.body);
    }
}