function setup() {
  createCanvas(590, 400);
  strokeWeight(2);
}

function draw() {
background(204);
for(var i = mouseX; i < 400; i += 4){
  line(i, 0, i + i/2, 80);
  line(i + i/2, 80, i * 1.2, 120);
}
}
