function squareShape(x0, y0, x1, y1) {
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
  this.points1 = shape.getPoint(this.x, this.y, this.angle);
  this.points2 = shape.getPoint(this.x, this.y, this.angle + PI / 2);
  this.points3 = shape.getPoint(this.x, this.y, this.angle + PI);
  this.points4 = shape.getPoint(this.x, this.y, this.angle + 3 * PI / 2);

  this.display = function() {
    quad(...this.points1, ...this.points2, ...this.points3, ...this.points4);
  }
}