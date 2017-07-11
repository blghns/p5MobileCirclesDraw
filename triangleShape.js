function triangleShape(x0, y0, x1, y1) {
  if (x1 && y1) {
    var h = dist(x0, y0, x1, y1);
    this.x = x0 + (x1 - x0) / 3;
    this.y = y0 + (y1 - y0) / 3;
    shape.d = h * 2 / 3;
    triangleShape.angle = atan2(y1 - y0, x1 - x0);
  } else {
    this.x = x0;
    this.y = y0;
  }
  this.d = shape.d;
  this.angle = triangleShape.angle;
  this.points1 = this.getPoint(this.x, this.y, this.angle);
  this.points2 = this.getPoint(this.x, this.y, this.angle + 2 * PI / 3);
  this.points3 = this.getPoint(this.x, this.y, this.angle + 4 * PI / 3);

  this.display = function() {
    triangle(...this.points1, ...this.points2, ...this.points3);
  }
}

triangleShape.prototype.getPoint = function(x, y, angle) {
  return [x + this.d * cos(angle), y + this.d * sin(angle)];
}

triangleShape.angle = 0;