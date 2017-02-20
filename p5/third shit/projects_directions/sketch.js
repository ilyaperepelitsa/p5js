var x;
var offset = 10;
var speed = 5;

function setup(){
  createCanvas(240, 120);
  x = width / 2;
}

function draw(){
  background(204);
  if (mouseX > x){
    x += speed;
    offset = -10;
  }
  if (mouseX < x){
    x -= speed;
    offset = 10;
  }

  line(x, 0, x, height);
  line(mouseX, mouseY, mouseX + offset, mouseY - 10);
  line(mouseX, mouseY, mouseX + offset, mouseY + 10);
  line(mouseX, mouseY, mouseX + offset * 3, mouseY);
}
