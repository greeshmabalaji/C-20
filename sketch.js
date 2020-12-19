var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect = createSprite(400,200,80,30);
  fixedRect.shapeColor="purple";
  movingRect.shapeColor="lightblue";

  fixedRect.debug = true;
  movingRect.debug = true;

  fixedRect.velocityX=2;
  movingRect.velocityX=-2;
}

function draw() {
  background(255,190,145);  
  
  //movingRect.x=mouseX;
  //movingRect.y=mouseY;

  // IsTouching function Logic
  /*    
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2  &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2  &&
    movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2  &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2
    ){
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
  }
  else{
    fixedRect.shapeColor="purple";
    movingRect.shapeColor="lightblue";
  }
  */

  //bounceOff function Logic
  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2  &&
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2){
      movingRect.velocityX = movingRect.velocityX * (-1);
      fixedRect.velocityX = fixedRect.velocityX * (-1);
    }
  if(movingRect.y - fixedRect.y <= movingRect.height/2 + fixedRect.height/2  &&
    fixedRect.y - movingRect.y <= movingRect.height/2 + fixedRect.height/2
    ){
      movingRect.velocityY = movingRect.velocityY * (-1);
      fixedRect.velocityY = fixedRect.velocityY * (-1);
    
  }

  drawSprites();
}