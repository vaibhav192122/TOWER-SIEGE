const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var stand1,stand2;
var ball;
var box1,box2,box3,box4,box5,box6;
var slingshot;

function preload() {
    ballImage = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    ground = new Ground();
    
    stand1=new Stand(390,300,250,10);
    stand2=new Stand(700,200,200,10);

    box1=new Box(400,250,30,40);
    box2=new Box(430,250,30,40);
    box3=new Box(460,250,30,40);
    box4=new Box(490,250,30,40);
    box5=new Box(400,250,30,40);
    box6=new Box(400,250,30,40);
    
    slingshot=new Slingshot(this.ball,{x:100,y:200});
    ball=Bodies.circle(50,200,20)
    World.add(world,ball)
}

function draw(){
    background("white");
    Engine.update(engine);
     ground.display();   
     stand1.display();
     stand2.display();
     box1.display();
     box2.display();
     box3.display();
     box4.display();
     box5.display();
     box6.display();
     slingshot.display();
     
     imageMode(CENTER);
     image(ballImage,ball.position.x,ball.position.y,40,40);
}

function mouseDragged(){
    Matter.Body.setPosition(ball.Body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

