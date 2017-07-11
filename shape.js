function shape(name, args, fillOrStroke = "fill") {
  this.name = name;
  this.args = args;
  this.fillOrStroke = fillOrStroke;
  switch (this.name) {
    case "circle":
      this.shape = new circleShape(...this.args);
      break;
    case "triangle":
      this.shape = new triangleShape(...this.args);
      break;
    case "square":
      this.shape = new squareShape(...this.args);
      break;
    case "pentagon":
      multigonShape.sides = 5;
      this.shape = new multigonShape(...this.args);
      break;
    case "octogon":
      multigonShape.sides = 6;
      this.shape = new multigonShape(...this.args);
      break;
  }

  this.display = function() {
    var r = map(noise(this.args[0] / 10), 0, 1, 0, 256);
    var g = map(noise(this.args[1] / 10), 0, 1, 0, 256);
    var b = map(noise((this.args[0] + this.args[1]) / 10), 0, 1, 0, 256);
    var a = map(noise(r + g + b), 0, 1, 0, 256);
    if (this.fillOrStroke === "fill") {
      fill(r, g, b, a);
      noStroke();
    } else if (this.fillOrStroke === "stroke") {
      noFill();
      stroke(r, g, b, a);
    }
    this.shape.display();
  }
}

shape.d = 80;
shape.angle = 0;
shape.getPoint = function(x, y, angle) {
  return [x + shape.d * cos(angle), y + shape.d * sin(angle)];
}