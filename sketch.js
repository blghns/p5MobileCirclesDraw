var shapes = [];
var shapeId = 0;
var shapeNames = ["circle", "triangle"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  shapes.forEach(s => s.display());
}

function draw() {
  // desktop
  if (mouseIsPressed && (mouseButton === LEFT) && touches.length === 0) {
    var args = [mouseX, mouseY];
    var s = new shape(shapeNames[shapeId], args);
    shapes.push(s);
  }
  // mobile
  if (touches.length === 1) {
    var args = [touches[0].x, touches[0].y];
    var s = new shape(shapeNames[shapeId], args);
    shapes.push(s);
  } else if (touches.length === 2) {
    var args = [touches[0].x, touches[0].y, touches[1].x, touches[1].y];
    var s = new shape(shapeNames[shapeId], args, "stroke");
    shapes.push(s)
  }

  if (s) {
    s.display();
  }
}

// this prevents dragging screen around
function touchMoved() {
  return false;
}

function touchEnded() {
  if (touches.length === 2) {
    nextShape();
  }
  if (touches.length === 3) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
}

function mouseWheel(event) {
  shape.d += event.delta / 100;
  var args = [mouseX, mouseY];
  var s = new shape(shapeNames[shapeId], args, "stroke");
  shapes.push(s);
  s.display();
}

function nextShape() {
  shapeId = (shapeId + 1) % shapeNames.length;
}

function keyPressed() {
  nextShape();
}