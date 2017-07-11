function multigonShape(x0, y0, x1, y1) {
  if (x1 && y1) {
    this.x = (x0 + x1) / 2;
    this.y = (y0 + y1) / 2;
    shape.d = dist(x0, y0, x1, y1) / 2;
    shape.angle = atan2(y1 - y0, x1 - x0);
  } else {
    this.x = x0;
    this.y = y0;
  }
  this.d = shape.d;
  this.angle = shape.angle;
  this.points = [];
  for (let i = 0; i < multigonShape.sides; i++) {
    this.points.push(shape.getPoint(this.x, this.y, this.angle + 2 * PI * i / multigonShape.sides))
  }
  this.display = function() {
    beginShape();
    this.points.forEach(p => vertex(...p));
    endShape(CLOSE);
  }
}

multigonShape.sides = 5;