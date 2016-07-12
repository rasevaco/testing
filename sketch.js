
var ellipseWidth = 100

function setup() {
  
  createCanvas(windowWidth, windowHeight) ;
  background(0, 0 , 0) ;
  
}

function draw() {
  
  noStroke() ;
  fill(random (255), random (255),random (255));
  //ellipse(mouseX,mouseY, ellipseWidth, ellipseWidth ) ;
  triangle(mouseX,mouseY, ellipseWidth, ellipseWidth, 0,0 ) ;
}