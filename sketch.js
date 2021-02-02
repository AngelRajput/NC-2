
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roof;
var rope1,rope2,rope3, rope4,rope5;


function setup() {
	createCanvas(900, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	roof=new Roof(width/2,height/3,width/7,20);

	 
	bobObject1=new Bob(330,400,20);
	bobObject2=new Bob(430,400,20);
	bobObject3=new Bob(490,400,20);
	bobObject4=new Bob(540,400,20);
	bobObject5=new Bob(580,400,20);

	rope1=new Rope(bobObject1.body,roof.body,-90, 0);
	rope2=new Rope(bobObject2.body,roof.body,-50, 0);
	rope3=new Rope(bobObject3.body,roof.body,0, 0);
	rope4=new Rope(bobObject4.body,roof.body,+50, 0);
	rope5=new Rope(bobObject5.body,roof.body,+90, 0);

	Engine.run(engine);
	
}


function draw() {
	rectMode(CENTER);
	background(230);
	roof.display();
	rope1.display()
	rope2.display()
	rope3.display()
	rope4.display()
	rope5.display()	
	bobObject1.display();
	bobObject2.display();
	bobObject3.display();
	bobObject4.display();
	bobObject5.display();

	if (keyDown ("Left")) {
	
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-300,y:-0});

	}

}
   
