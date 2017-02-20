function setup() {
  createCanvas(1020, 960);
}

function draw() {

background(205);

strokeJoin(ROUND);
ellipse(75, 60, 90, 90);
strokeWeight(mouseX / mouseY);

strokeJoin(BEVEL);
ellipse(175, 60, 90, 90);
strokeWeight(mouseX * 2 / mouseY);

strokeCap(SQUARE);
ellipse(279, 60, 90, 90);
strokeWeight(mouseX * 3 / mouseY);

strokeCap(ROUND);
ellipse(389, 60, 90, 90);
strokeWeight(mouseX * 4 / mouseY);
}
