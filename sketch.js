
var trex ,trex_running;
var ground,ground_image;
function preload(){
 trex_running=loadAnimation("trex1.png","trex3.png","trex4.png")
ground_image=loadImage("ground2.png")
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex=createSprite(50,170,20,50)
 trex.addAnimation("running",trex_running)
 trex.scale=0.5
 ground=createSprite(300,180,1200,20)
 ground.addImage("ground",ground_image)
 ground.velocityX=-3;
}

function draw(){
  background("white")
  
if(ground.x<0){
  ground.x=ground.width/2;
}


drawSprites();
}
