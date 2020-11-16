
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

function preload()
{
	
}

function setup() {
	createCanvas(1280,600);


	engine = Engine.create();
	world = engine.world;

	groundObj = new Ground(1000,450,200,20);

	box1 = new box(950,430,20,20);
	box2 = new box(930,430,20,20);
	box3 = new box(970,430,20,20);
	box4 = new box(990,430,20,20);
	box5 = new box(1010,430,20,20);
	box6 = new box(1030,430,20,20);
	box7 = new box(1050,430,20,20);
	box8 = new box(1070,430,20,20);
	box9 = new box(940,410,20,20);
	box10 = new box(960,410,20,20);
	box11 = new box(980,410,20,20);
	box12 = new box(1000,410,20,20);
	box13 = new box(1020,410,20,20);
	box14 = new box(1040,410,20,20);
	box15 = new box(1060,410,20,20);
	box16 = new box(950,390,20,20);
	box17 = new box(970,390,20,20);
	box18 = new box(990,390,20,20);
	box19 = new box(1010,390,20,20);
	box20 = new box(1030,390,20,20);
	box21 = new box(1050,390,20,20);
	box22 = new box(960,370,20,20);
	box23 = new box(980,370,20,20);
	box24 = new box(1000,370,20,20);
	box25 = new box(1020,370,20,20);
	box26 = new box(1040,370,20,20);
	box27 = new box(970,350,20,20);
	box28 = new box(990,350,20,20);
	box29 = new box(1010,350,20,20);
	box30 = new box(1030,350,20,20);
	box31 = new box(980,330,20,20);
	box32 = new box(1000,330,20,20);
	box33 = new box(1020,330,20,20);
	box34 = new box(990,310,20,20);
	box35 = new box(1010,310,20,20);
	box36 = new box(1000,290,20,20);

   Polygon = new polygon(100,400,50);

 
  sling = new slingshot(polygon.body,{x:100,y:400});

   var render = Render.create({
     element: document.body,
     engine: engine,
     options: {
       width: 1300,
       height: 600,
       wireframes: false
     }
     });
 
   
   
 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(100);
  
  groundObj.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();
  box31.display();
  box32.display();
  box33.display();
  box34.display();
  box35.display();
  box36.display();

  Polygon.display();

  launcherObject.display();

  sling.display();

}

function mouseDragged()
{
	Matter.Body.setPosition(stoneObj.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	launcherObject.fly();
    // distance=int(dist(stoneObj.x,stoneObj.y,mango1.x,mango1.y));
}



