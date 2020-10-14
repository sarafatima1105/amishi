
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var papers;
var bin1,bin2,bin3;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  papers=new paperclass(200,680,5);
  bin1=new dustbin(520,670,200,20);
	bin2=new dustbin(610,630,20,100);
  bin3=new dustbin(420,630,20,100);
  ground=new Ground(400,690,800,30);
}


function draw() {
  rectMode(CENTER);
  background(0);
  

  papers.display();
  bin1.display();
  bin2.display();
  bin3.display();
  ground.display();

  drawSprites();
 keyPressed();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
  }
}



