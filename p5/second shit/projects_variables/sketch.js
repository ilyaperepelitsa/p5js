var y = 100;
var d = 130;

function setup() {
  createCanvas(480, 120);
}

function draw() {
  background(204);
  // ellipse(75, y, d, d);
  // ellipse(175, y, d, d);
  // ellipse(275, y, d, d);

  line(0, 0, width, height);
  line(width, 0, 0, height);
  ellipse(width/2, height/2, 60, 60);
}
