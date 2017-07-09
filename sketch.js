var circles = [];
var strokes = [];
var fillSize = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  if (touches.length == 1) {
    var args = [touches[0].x, touches[0].y, fillSize]
    circles.push(args);
  }

  if (touches.length == 2) {
    var midX = (touches[0].x + touches[1].x) / 2;
    var midY = (touches[0].y + touches[1].y) / 2;
    var d = dist(touches[0].x, touches[0].y, touches[1].x, touches[1].y);
    var args = [midX, midY, d];
    strokes.push(args);
    fillSize = d;
  }

  circles.forEach(e => {
    var r = map(noise(e[0]), 0, 1, 0, 256);
    var g = map(noise(e[1]), 0, 1, 0, 256);
    var b = map(noise(e[2]), 0, 1, 0, 256);
    var a = map(noise(e[2]), 0, 1, 0, 256);
    fill(r, g, b, a);
    noStroke();
    ellipse(...e);
  });

  strokes.forEach(e => {
    var r = map(noise(e[0]), 0, 1, 0, 256);
    var g = map(noise(e[1]), 0, 1, 0, 256);
    var b = map(noise(e[2]), 0, 1, 0, 256);
    var a = map(noise(e[2]), 0, 1, 0, 256);
    noFill();
    stroke(r, g, b, a);
    ellipse(...e);
  });

}

// this prevents dragging screen around
function touchMoved() {
  return false;
}

function touchEnded() {
  if (touches.length == 2) {
    var fs = fullscreen();
    fullscreen(!fs);
  }
}