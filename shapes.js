// function displayShapes(x, y) {
//   this.x = x;
//   this.y = y;
//   let randomlight = random(lightMcolor);
//   let randomdark = random(darkMcolor);

//   // this.display = function() {
//   //   circle(this.x, this.y, random(0,100));
//   // }

//   this.intersects = function(other) {
//     var d = dist(this.x, this.y, other.x, other, y);
//     if (d < this.r + other.r) return true;
//     else return false;
//   }

// }

function shapes(x, y) {
  this.x = x;
  this.y = y;
  this.size = random(20, 95);
  this.stroke = random(0.5, 3);
  this.offset = random(-15, 15);
  let randomlight = random(lightMcolor);
  let randomdark = random(darkMcolor);

  this.linecircle = function() {
    strokeWeight(this.stroke);
    noFill();
    circle(this.x + mouseX / 2, this.y + mouseY / 2, this.size);
  }

  this.fillcircle = function() {
    if (mouseX < width / 2) {
      fill(randomlight);
    } else fill(randomdark);
    strokeWeight(this.stroke);
    circle(this.x + mouseX / 3, this.y + mouseY * 1.5, this.size);
  }

  this.shadowcircle = function() {
    fill(0);
    circle(this.x + mouseX / 2 + this.offset, this.y + mouseY * 1.5 + this.offset, this.size);
    if (mouseX < width / 2) {
      fill(randomlight);
    } else fill(randomdark);
    strokeWeight(this.stroke);
    circle(this.x + mouseX / 2, this.y + mouseY * 1.5, this.size);
  }

  this.linesquare = function() {
    strokeWeight(this.stroke);
    noFill();
    square(this.x + mouseX / 3, this.y + mouseY, this.size);
  }

  this.fillsquare = function() {
    if (mouseX < width / 2) {
      fill(randomlight);
    } else fill(randomdark);
    strokeWeight(this.stroke);
    square(this.x + mouseX / 4, this.y + mouseY * 2, this.size);
  }

  this.shadowsquare = function() {
    fill(0);
    square(this.x + mouseX / 3 + this.offset, this.y + mouseY * 1.5 + this.offset, this.size);
    if (mouseX < width / 2) {
      fill(randomlight);
    } else fill(randomdark);
    strokeWeight(this.stroke);
    square(this.x + mouseX / 3, this.y + mouseY * 1.5, this.size);
  }

  this.linetriangle = function() {
    strokeWeight(this.stroke);
    triangle(this.x + mouseX / 4, this.y + mouseY * 2, this.x + 0.8 * (this.size) + mouseX / 4, this.y + 1.4 * (this.size) + mouseY * 2, this.x + 1.6 * (this.size) + mouseX / 4, this.y + mouseY * 2);
  }

  this.filltriangle = function() {
    if (mouseX < width / 2) {
      fill(randomlight);
    } else fill(randomdark);
    strokeWeight(this.stroke);

    triangle(this.x + mouseX / 3, this.y + mouseY * 2, this.x + 0.8 * (this.size) + mouseX / 3, this.y - 1.4 * (this.size) + mouseY * 2, this.x + 1.6 * (this.size) + mouseX / 3, this.y + mouseY * 2);
  }

  this.shadowtriangle = function() {
    fill(0);
    triangle(this.x + this.offset + mouseX / 2, this.y + this.offset + mouseY * 2, this.x + this.offset + 0.8 * (this.size) + mouseX / 2, this.y + this.offset - 1.4 * (this.size) + mouseY * 2, this.x + this.offset + 1.6 * (this.size) + mouseX / 2, this.y + this.offset + mouseY * 2);
    if (mouseX < width / 2) {
      fill(randomlight);
    } else fill(randomdark);
    strokeWeight(this.stroke);
    triangle(this.x + mouseX / 2, this.y + mouseY * 2, this.x + 0.8 * (this.size) + mouseX / 2, this.y - 1.4 * (this.size) + mouseY * 2, this.x + 1.6 * (this.size) + mouseX / 2, this.y + mouseY * 2);
  }

  this.plainline = function() {
    strokeWeight(this.stroke+1);
    line(this.x + (mouseX), this.y + mouseY * 1.5, this.x * 300 * (this.offset) + (mouseX), this.y * 600 * (this.offset) + mouseY * 1.5);
  }
}