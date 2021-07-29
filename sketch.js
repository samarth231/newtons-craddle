const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var ball1
var ball2
var ball3
var ball4
var ball5
var string1
var string2
var string3
var string4
var string5
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	btn1 = createImg('right.png');
	btn1.position(220,30);
	btn1.size(50,50);
	btn1.mouseClicked(hForce);

	ball1 = Bodies.circle(450,500,20);
	World.add(world,ball1);
	ball2 = Bodies.circle(460,500,20);
	World.add(world,ball2);
	ball3 = Bodies.circle(470,500,20);
	World.add(world,ball3);
	ball4 = Bodies.circle(480,500,20);
	World.add(world,ball4);
	ball5 = Bodies.circle(490,500,20);
	World.add(world,ball5);

	string1 = Constraint.create({
		pointA:{x:390,y:100},
		bodyB:ball1,
		pointB:{x:0,y:10},
		length:200,
		stiffness:0.1
	  })
	  World.add(world,string1);

	  string2 = Constraint.create({
		pointA:{x:410,y:100},
		bodyB:ball2,
		pointB:{x:0,y:10},
		length:200,
		stiffness:0.1
	  })
	  World.add(world,string2);

	  string3 = Constraint.create({
		pointA:{x:420,y:100},
		bodyB:ball3,
		pointB:{x:0,y:10},
		length:200,
		stiffness:0.1
	  })
	  World.add(world,string3);

	  string4 = Constraint.create({
		pointA:{x:430,y:100},
		bodyB:ball4,
		pointB:{x:0,y:10},
		length:200,
		stiffness:0.1
	  })
	  World.add(world,string4);

	  string5 = Constraint.create({
		pointA:{x:450,y:100},
		bodyB:ball5,
		pointB:{x:0,y:10},
		length:200,
		stiffness:0.1
	  })
	  World.add(world,string5);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  push();
  strokeWeight(2)
  stroke("black")
  line(string1.pointA.x,string1.pointA.y,ball1.position.x,ball1.position.y)
  pop();

  push();
  strokeWeight(2)
  stroke("black")
  line(string2.pointA.x,string2.pointA.y,ball2.position.x,ball2.position.y)
  pop();

  push();
  strokeWeight(2)
  stroke("black")
  line(string3.pointA.x,string3.pointA.y,ball3.position.x,ball3.position.y)
  pop();

  push();
  strokeWeight(2)
  stroke("black")
  line(string4.pointA.x,string4.pointA.y,ball4.position.x,ball4.position.y)
  pop();

  push();
  strokeWeight(2)
  stroke("black")
  line(string5.pointA.x,string5.pointA.y,ball5.position.x,ball5.position.y)
  pop();

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here
  ellipse(ball1.position.x, ball1.position.y, 20);
  ellipse(ball2.position.x, ball2.position.y, 20);
  ellipse(ball3.position.x, ball3.position.y, 20);
  ellipse(ball4.position.x, ball4.position.y, 20);
  ellipse(ball5.position.x, ball5.position.y, 20);
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function hForce()
{
  Matter.Body.applyForce(ball1,{x:390,y:0},{x:0.08,y:0});
}