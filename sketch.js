var fixedRect, movingRect, gameObject1, gameObject2;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="yellow";

  movingRect = createSprite(400, 200, 50, 50);
  movingRect.shapeColor="red";

  gameObject1 = createSprite(300, 100, 50, 50);
  gameObject1.shapeColor="blue";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor="brown";

  gameObject2.velocityX=2;
}

function draw() {
  background(200,200,200);  
  drawSprites();
  textSize(20); 
  text("fixedRect.x " + fixedRect.x, 200,40)
  text("MovingRect.x " + movingRect.x, 200,20) 
  text("Distance " + (movingRect.x - fixedRect.x), 200,60);

  movingRect.y = World.mouseY;
  movingRect.x = World.mouseX;

  bounceOff(gameObject2,gameObject1)
   if(isTouching(movingRect,fixedRect))
   {
    fixedRect.shapeColor="green";
    movingRect.shapeColor="green";
   }
   else
   {
    fixedRect.shapeColor="red";
    movingRect.shapeColor="red";
   }
   if(isTouching(gameObject1,gameObject2))
   {
    gameObject1.shapeColor="green";
    gameObject2.shapeColor="yellow";
   }

}