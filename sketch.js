
function setup() {
  createCanvas(400,400);
  var square = createSprite(200,200,25,25);
  square.shapeColor = "black"
  createEdgeSprites();
  var BACKGROUND = "initialBackground"
}

function draw() 
{
  background("grey");
  if(keyDown("LEFT_ARROW")){
    background("blue");
    BACKGROUND = "inputBackground";

  }
  if(keyDown("RIGHT_ARROW")){
    background("RED");
    BACKGROUND = "inputBackground";
  }
  if(keyDown("UP_ARROW")){
    background("green");
    BACKGROUND = "inputBackground";
  }
  if(keyDown("DOWN_ARROW")){
    background("yellow");
    BACKGROUND = "inputBackground";
  }
  drawSprites();
}




