
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
const Constraint = Matter.Constraint;

var background, backgroundImg;
var tree,treeImg;
var mango, mangoImg;
var pebble;
var boy, boyImg, boyThrowing, boyThrowingImg;
var ground;

var mango_con;
var rope;

function preload() {
  backgroundImg = loadImage("./assets/garden_background.avif");
  boyImg = loadImage("./assets/boy.png");
  boyThrowingImg = loadImage("./assets/boy_throwing.png");
  mangoImg = loadImage("./assets/mango-removebg-preview.png");
  treeImg = loadImage("./assets/tree-removebg-preview.png");
}

function setup() {
  canW = windowWidth;
  canH = windowHeight;
  createCanvas(canW, canH);

  boy = createSprite(width / 2 + 300, height / 2 + 150, 200, 200);
  boy.addImage("boy", boyImg);
  boy.addImage("boyThrowing", boyThrowingImg)


  engine = Engine.create();
  world = engine.world;

  tree = createSprite(width / 2 - 300, height / 2, 400, 500);
  tree.addImage("tree", treeImg);
  tree.scale = 2.01

  mango = createSprite(width / 2 - 265, height / 2 + 15, 10, 10);
  mango.addImage("mango", mangoImg);
  mango.scale = 0.25

  ground = new Ground(width / 2, height / 2 + 300, width, 20);

  

}

function draw() {
  background(backgroundImg);
   Engine.update(engine);

  text("Click the space key to play the game", 750,750)
 
  tree.display();

  showPebble();

  if (mango.y >= height / 2 + 300) {
    mango.velocityY = 0;
  }

  drawSprites()

}


function keyPressed() {

  if (keyCode === 32) {
    pebble = new Pebble(width / 2 + 220, height / 2 + 100, 150, 150);
    pebble.display();

    boy.changeImage("boyThrowing", boyThrowingImg);

    setTimeout(()=>{mango.velocityY = 9;}, 1500)
    
  }
}


function showPebble() {
  if (pebble !== undefined) {
    pebble.display();
    pebble.force()
  }

}
