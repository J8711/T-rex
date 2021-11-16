var block;
function setup() {
  createCanvas(400,400);
  block = createSprite(50,50,50,50);
  //block.shapeColor = "red";
}
function draw() 
{
  background(30);
  if(keyIsDown(RIGHT_ARROW)) {
    block.position.x += 5;
  }
  if(keyIsDown(LEFT_ARROW)) {
    block.position.x -= 5;
  }
  if(keyIsDown(UP_ARROW)) {
    block.position.y -= 5;
  }  
  if(keyIsDown(DOWN_ARROW)) {
    block.position.y += 5;
  }
  drawSprites();
}