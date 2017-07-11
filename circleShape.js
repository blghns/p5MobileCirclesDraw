function circleShape(x0, y0, x1, y1) {
  if (x1 && y1) {
    this.x = (x0 + x1) / 2;
    this.y = (y0 + y1) / 2;
    shape.d = dist(x0, y0, x1, y1);
  } else {
    this.x = x0;
    this.y = y0;
  }
  this.d = shape.d;
  this.display = function() {
    ellipse(this.x, this.y, this.d);
  }
}