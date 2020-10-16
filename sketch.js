
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var paper, ground, platform_1, platform_2, platform_3;
var chain1, platform_4;

function setup() {
	
	createCanvas(8000, 7000);
 	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	paper= new Paper(250,100,25.5);
	ground= new Ground(745,800,9990,40,PI/2);
	platform_1= new Platform (750,640,20,110,PI/2);
	platform_3= new Platform (820,640,20,110,PI/2);
	platform_4= new Platform (740,750,110,20,PI/2);
	platform_2= new Platform (728,640,135,135,PI/2);
	

	
}


function draw() {

  rectMode(CENTER);
  background(350);

  Engine.update(engine);
  
  paper.display();
  ground.display();
  platform_1.display();
  platform_3.display();
  platform_4.display();
  platform_2.display();
  

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(paper.body, paper.body.position, {x: 75, y: -75})
	 }
   }