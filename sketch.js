const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

var box;
var ground;
var box2;


function setup() 
{
  createCanvas(800,400);

  engine = Engine.create(); 
  world = engine.world;

  
  box = new Box(200,200,50,50);
  box2 = new Box(300,100,50,50);

  ground = new Ground(400,390,800,20);
}

function draw()
{
  Engine.update(engine);

  background("lightgreen");  
  rectMode(CENTER);


  box.display();
  box2.display();
  
  ground.display();
}