
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper, ground;
var trashR, trashL, trashB;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 600);
	engine = Engine.create();
	world = engine.world;

	paper = new Paper(50, 50, 20);

	ground = new Ground(700, 580, 1400, 20);

	trashB = new Trash(1000, 560, 200, 20);
	trashL = new Trash(910, 500, 20, 100);
	trashR = new Trash(1090, 500, 20, 100);
	
	Engine.run(engine);  
}


function draw() {
  rectMode(CENTER);
  background("black");

  fill("white");
  text("PRESS AND HOLD THE UP ARROW TO MAKE THE BALL IN", 530, 100);

  paper.display();

  ground.display();

  trashB.display();
  trashL.display();
  trashR.display();

  keyPressed()
  
  drawSprites();
 
}


function keyPressed(){
	if(keyDown("UP_ARROW")){
		Matter.Body.applyForce(paper.body, paper.body.position, {x:10, y:-12})
	}
}


