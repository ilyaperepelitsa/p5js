

function setup(){
  createCanvas(900, 2000);
  stroke(0, 102);
}


function draw(){
  var weight = dist(mouseX, mouseY, pmouseX, pmouseY);
  strokeWeight(weight);
  line(mouseX, mouseY, pmouseX, pmouseY);
}
