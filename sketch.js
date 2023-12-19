let lightMcolor = [],
  darkMcolor = [];
let myfont;
let blob1, blob2, blob3, blob4, blob5; //blob object variables
let circles = [],
  squares = [],
  triangles = [],
  lines = [];

function preload() {
  myfont = loadFont('fonts/CircularStd-Black.otf');
}
function windowResized(){
  resizeCanvas(windowWidth,windowHeight);
}
function setup() {
  // createCanvas(1600, 1000);
  canvas=createCanvas(windowWidth,windowHeight);
  canvas.position(0,0);
  canvas.style('z-index','-1');
  //color arrays
  lightMcolor = ['#08f7febc', '#09fbd3bc', '#fe53bbbc', '#f5d300bc', '#01ffc3bc', '#01ffffbc', '#ffb3fdbc', '#9d72ffbc', '#6678febc', '#fe6666bc', '#6678febc', '#fdfe67bc', '#6cff66bc', '#ff2975bc', '#1f48c2bc'];
  darkMcolor = [color('#e92efbbc'), color('#ff2079bc'), color('#440bd4ad'), color('#04005ebc'), color('#fdd400bc'), color('#fdb232bc'), color('#02b8a2bc'), color('#01535fbc'), color('#9600ffbc'), color('#00fff9bc'), color('#00b8ffbc'), color('#73c2d0bc'), color('#32c18bbc'), color('#d1f7ffbc'), color('#5932e6bc'), color('#ffb3fdbc'), color('#ffb3fdbc'), '#fdfe67bc'];
  //creates blob objects & shapes
  blobSketch();
  frameRate(20);

}

function draw() {

  let bgalpha = map(mouseX, 0, windowWidth-200, 0, 255);
  background(255, 235, 242);
  background(3, 13, 46, bgalpha);
  //draws blobs
  blob1.show();
  blob2.show();
  blob3.show();
  blob4.show();
  blob5.show();
  for (var i = 0; i < circles.length; i++) {
    if (i % 2 == 0) circles[i].fillcircle();
    else if (i % 3 == 0) circles[i].shadowcircle();
    else circles[i].linecircle();
  }
  for (i = 0; i < squares.length; i++) {
    if (i % 2 == 0) squares[i].fillsquare();
    else if (i % 3 == 0) squares[i].shadowsquare();
    else squares[i].linesquare();
  }
  for (i = 0; i < triangles.length; i++) {
    if (i % 2 == 0) triangles[i].linetriangle();
    else if (i % 3 == 0) triangles[i].shadowtriangle();
    else triangles[i].filltriangle();
  }
  for (i = 0; i < lines.length; i++) {
    lines[i].plainline();
  }
  showText();
}




function showText() {
  textFont(myfont);
  textSize(100);
  textAlign(CENTER, CENTER);
  // position:absolute;
  if (mouseX < width/2) {
    fill(61, 5, 89);
    text('H  E  L  L  O', windowWidth/2, windowHeight/2);
  }
  else if (mouseX >= width/2) {
    fill(255);
    text('T  H  E  R  E', windowWidth/2, windowHeight/2);
  }
}


function blob(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r; //radius
  this.z = random(250);
  let randomlight = random(lightMcolor);
  let randomdark = random(darkMcolor);

  this.show = function() {
    if (mouseX < windowWidth / 2) {
      fill(randomlight); //fills colors from lightmcolor array
    } else fill(randomdark);  //fills colors from darkmcolor array
    push();
    translate(this.pos.x, this.pos.y); //CHANGES ORIGIN POINT
    beginShape(); //creates circle with vertices
    for (var i = 0; i < TWO_PI; i += PI / 200) {
      noStroke();
      var cos_i = cos(i) + 0.07,
        sin_i = sin(i) + 0.09,
        nois = noise(cos_i + 1, sin_i + 0.1, this.z), //3 dimensional to make it flow better
        d = this.r + map(nois, 0, 1, (-1.3 * mouseX) + 300, (mouseY) - 100); // nois value mapped to mousex and mousey (이걸 소리변수로 하면 될 듯?)
      vertex(d * cos_i, d * sin_i); //vertex position changes every time
      // ellipse(d * cos_i, d * sin_i, 4, 4);
    }
    endShape();
    pop(); //restores original drawing settings
    this.z += 0.01; //makes blobs move
  }
}


function blobSketch() {
  //creates new blob shapes
  blob1 = new blob(-10, 200, width / 8);
  blob2 = new blob(width - 200, height + 200, width / 10);
  blob3 = new blob(50, height-20, width / 70);
  blob4 = new blob(width/2, 0, width / 20);
  blob5 = new blob(width, -50, width / 40);
  for (var i = 0; i < 20; i++) {
    circles[i] = new shapes(random(-width, width), random(-height, height));
  }
  for (i = 0; i < 25; i++) {
    squares[i] = new shapes(random(-width, width), random(-height, height));
  }
  for (i = 0; i < 20; i++) {
    triangles[i] = new shapes(random(-width, width), random(-height, height));
  }
  for (i = 0; i < 12; i++) {
    lines[i] = new shapes(random(-width, width), random(-height, height));
  }
  // circle1 = new shapes(50, 100);
  // circle2 = new shapes(200, 300);

}