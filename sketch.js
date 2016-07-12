
var ellipseWidth = 100

function setup() {
  
  createCanvas(windowWidth, windowHeight) ;
  background(255, 0 , 0) ;
  
}

function draw() {
  
  noStroke() ;
  fill(random (255), random (255),random (255));
  ellipse(mouseX,mouseY, ellipseWidth, ellipseWidth ) ;
  
}