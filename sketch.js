var circles = [];
var circleSize = 80;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
  circles.forEach(c => c.display());
}

function draw() {

  if (mouseIsPressed && (mouseButton == LEFT)) {
    var c = new circle(mouseX, mouseY, circleSize);
    circles.push(c);
    c.display();
  }


  if (touches.length == 1) {
    var c = new circle(touches[0].x, touches[0].y, circleSize);
    circles.push(c);
  } else if (touches.length == 2) {
    var midX = (touches[0].x + touches[1].x) / 2;
    var midY = (touches[0].y + touches[1].y) / 2;
    var d = dist(touches[0].x, touches[0].y, touches[1].x, touches[1].y);
    var c = new circle(midX, midY, d, "stroke");
    circles.push(c);
    circleSize = d;
  }
  if (c) {
    c.display();
  }
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

function mouseWheel(event) {
  circleSize += event.delta/100;
  var c = new circle(mouseX, mouseY, circleSize, "stroke");
  circles.push(c);
  c.display();
}

function circle(x, y, d, fillOrStroke = "fill") {
  this.x = x;
  this.y = y;
  this.d = d;
  this.fillOrStroke = fillOrStroke;
  this.display = function() {
    var r = map(noise(this.x / 10), 0, 1, 0, 256);
    var g = map(noise(this.y / 10), 0, 1, 0, 256);
    var b = map(noise(this.d / 10), 0, 1, 0, 256);
    var a = map(noise(r + g + b), 0, 1, 0, 256);
    if (this.fillOrStroke === "fill") {
      fill(r, g, b, a);
      noStroke();
    } else if (this.fillOrStroke === "stroke") {
      noFill();
      stroke(r, g, b, a);
    }
    ellipse(this.x, this.y, this.d);
  }
}