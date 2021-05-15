const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  slingShot;
var box = []
var box1 = []

function preload() {
    //backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    
    for(var i = 0 ; i < 6 ; i++){
        box[i] = new Box(900,100);
    }
      
    for(var i = 0 ; i < 7 ; i++){
        box1[i] = new Box(700,100);
    }

    ball = new Ball(500,200)

    slingshot = new Slingshot(ball.body,{x:500,y:10});
}

function draw(){
    background("blue");
    Engine.update(engine);
    strokeWeight(4);
    
    ground.display();
    for(var i = 0 ; i < 6 ; i++){
        box[i].display(); 
    }
    for(var i = 0 ; i < 7 ; i++){
        box1[i].display(); 
    }

    ball.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x:mouseX,y:mouseY})
}


