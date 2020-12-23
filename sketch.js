
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Mouse = Matter.Mouse; 
const MouseConstraint = Matter.MouseConstraint;
const Constraint = Matter.Constraint;
var world;
var roof,bob1,bob2,bob3,bob4,bob5;
var ground, rope1;
function setup() {
	createCanvas(1600, 800);
    canvas = createCanvas(windowWidth / 1.5, windowHeight / 1.5);
	engine = Engine.create();
	world = engine.world;

	let canvasmouse = Mouse.create(canvas.elt);
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
	 mouse: canvasmouse
	}
	mConstraint = MouseConstraint.create(engine, options)
	World.add(world, mConstraint)
	
	
	pendulum1 = new Pendulum(340, 450, "#00b0ff"); 
	pendulum2 = new Pendulum(400, 450, "#e91e63"); 
	pendulum3 = new Pendulum(460, 450, "#ffc107"); 
	pendulum4 = new Pendulum(520, 450, "#e91e63"); 
	pendulum5 = new Pendulum(580, 450, "#00b0ff"); 
	sling1 = new Sling(pendulum1.body, { x: 340, y: 200 }); 
	sling2 = new Sling(pendulum2.body, { x: 400, y: 200 }); 
	sling3 = new Sling(pendulum3.body, { x: 460, y: 200 }); 
	sling4 = new Sling(pendulum4.body, { x: 520, y: 200 }); 
	sling5 = new Sling(pendulum5.body, { x: 580, y: 200 });
	
	
	//Create the Bodies Here.
	roof=new Roof(width/2,200,width,20);
	/*bob1 = new Bob(300,450,60);
	bob2 = new Bob (300,450,60);
	bob3 = new Bob (300,450,60);
	bob4 = new Bob (300,450,60);
	bob5 = new Bob (300,450,60);
    ground=new Ground(width/2,670,width,20);*/
   
   


	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	Engine.run(engine);
    //Render.run(render);
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");
  
  drawSprites();
  roof.display();
  pendulum1.display();
  pendulum2.display();
  pendulum3.display();
  pendulum4.display();
  pendulum5.display();
  sling1.display();
  sling2.display();
  sling3.display();
  sling4.display();
  sling5.display();
  
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(pendulum1.body,pendulum1.body.position,{x:-50,y:-45});
	}
	}

function mouseDragged(){
	Matter.Body.setPosition(pendulum.body, {x: mouseX, y: mouseY})
}






