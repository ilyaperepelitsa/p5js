function setup() {
  createCanvas(480, 120);
  // fill(255);
  // stroke(102);
}

function draw() {

  background(0);
  // for (var y = 20; y <= height - 20; y += 10){
  //   for (var x = 20; x <= width - 20; x += 10){
  //   ellipse(x, y, 4, 4);
  //   line(x, y, mouseX, mouseY);
  //     }
  //   }

for (var y = 32; y <= mouseX; y += 10){
  for (var x = 12; x <= mouseY; x += 15){
    ellipse(x + y, y, 16 - y/10.0, 16 - y/10.0);
  }
}

}
