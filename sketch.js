const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase;



function preload() {
  //load images here
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);

  var options = {
    isStatic: true
  };

  playerBase = Bodies.rectangle(200, 350, 180, 150, options);
  World.add(world, playerBase);

  player = Bodies.rectangle(250, playerBase.position.y - 160, 50, 180, options);
  World.add(world,player)
}

function draw() {
  background(backgroundImg);

  Engine.update(engine);
 //write image functions to display function
  
  
  
  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);
}




