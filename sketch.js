var bullet,wall,thickness;
var speed,weight;
SERVE=0;
PLAY=1
var gameState=SERVE;
function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50, 50);
  wall=createSprite(1500,200,thickness,width/2)
  speed=Math.round(random(223,321));
  weight=Math.round(random(30,52));
  thickness=Math.round(random(22,83))
  deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
}

function draw() {
  background(0);  
  if(gameState===SERVE){
    wall.shapeColor="blue";
    bullet.velocityX=0;
    bullet.x=800;
    textSize(20)
    text("press 'space' to test",780,250)
    text("if wall color changes to red deformation is more than 180",730,330)
    text("speed:"+speed,800,80)
    text("thickness :"+thickness,800,130);
    text("weight:"+weight,800,170)
    if(keyDown("space")){
      gameState=PLAY;
      bullet.x=50;
    }
  }
  bullet.velocityX=speed;
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    textSize(20)
   text("press 't' to test  again",730,200) 
   if(keyDown("t")){
     gameState=SERVE;
     speed=Math.round(random(223,321));
     weight=Math.round(random(30,52));
     thickness=Math.round(random(22,83))
     wall.width=thickness;
   }
   deformation=(0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(deformation<10){
      wall.shapeColor="red";
      text("wall color changes to green deformation is more than 10",730,290);
    }
  else{
    wall.shapeColor="green";
    text("wall color not changed deformation is less than 10",730,290);
  }
}
  drawSprites();
}

function hasCollided(bullet,wall){
 bulletRightEdge=bullet.x+bullet.width;
 lwall=wall.x
 if(bulletRightEdge>=lwall){
   return true;
 }else{
   return false;
 }
}
