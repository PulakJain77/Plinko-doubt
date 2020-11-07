const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

Engine.update(engine);


function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  //createSprite(400, 200, 50, 50);

  var ground = new Ground(240,865,10,480);

}

function draw() {
  background(255,255,255);  
  










  drawSprites();

ground.display();
 


}