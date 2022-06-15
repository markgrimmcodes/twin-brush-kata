function setup() {
  createCanvas(400, 400);
  background(220);
}
function mousePressed() {
  let colors = ["hotpink", "aliceblue", "salmon"];
  let color = random(colors);
  fill(color);
}
function keyPressed() {
  if (key === "+") {
    diameter++;
  } else if (key === "-") {
    diameter--;
  }
}
function draw() {
  if (mouseIsPressed) {
    createCircles();
  }
}
let diameter = 10;
function createCircles(x1, x2, y) {
  x1 = mouseX - 40;
  x2 = mouseX + 40;
  y = mouseY;

  circle(x1, y, diameter);
  circle(x2, y, diameter);
}
