function setup() {
  createCanvas(1020, 960);
}

function draw() {

  //  1    this creates an ellipse
  // background(204);
  // ellipse(50, 50, 80 ,80);

  // 2 create a bunch of circles
  if(mouseIsPressed){
    fill(0);
  } else {
    fill(255);
  }

  ellipse(mouseX, mouseY, 80, 80);

}
