

var mar=0;

let bugs = []; // array of Jitter objects

function setup() {
  createCanvas(500,500);
    background(196, 45, 0);
  // Create objects
  for (let i = 0; i < 50; i++) {
    bugs.push(new Jitter());
  }



}

function draw() {

  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
  stroke(180,7, 26 ); // an RGB color for the circle's border
  strokeWeight(2);
    fill(241,9,35)
  rect(mar,100,mar,mar);
    fill(254,251,251)
  textFont('Helvetica');
  textSize(40);
  text('Apple',250,250);
  text('Metal',90,90);
  text('Wall',159,300);
fill(255,255,127,75);
ellipse(mouseX,mouseY,50,50);
fill(92,17,17);



}

// Jitter class
class Jitter {
  constructor() {
    this.x = random(width);
    this.y = random(height);
    this.diameter = random(10, 30);
    this.speed = 1;
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  }

  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
function mousePressed(){
    if (mar>=100){
        mar=0;
}else{
    mar=mar+5;
}
}