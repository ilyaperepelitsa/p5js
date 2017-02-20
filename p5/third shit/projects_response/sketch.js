var x = 0;
var easing = 0.7;


function setup(){
  createCanvas(900, 2000);
}


function draw(){
  var targetX = mouseX;
  x += (targetX - x) * easing;
  ellipse(x, 40, 12, 12);
  print(targetX + ":"  + x);
}
