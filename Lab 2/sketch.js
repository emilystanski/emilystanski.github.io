class Mover {
  constructor(x, y) {
    this.position = createVector(x, y);
    this.velocity = createVector(random(-6, 6), random(-6, 6)); 
    this.size = 40;
    this.color = color(100, 200, 255);
  }

  update() {
    this.position.add(this.velocity);

    if (this.position.x < 0 || this.position.x > width) {
      this.velocity.x *= -1;
      this.changeColor();
    }

   if  (this.position.y < 0 || this.position.y > height) {
      this.velocity.y *= -1;
      this.changeColor();
    }
  }

  changeColor() {
    this.color = color(random(255), random(255), random(255));
  }

  display() {
    fill(this.color);
    stroke(255);
    strokeWeight(2);
    ellipse(this.position.x, this.position.y, this.size);
  }
}

let mover;

function setup() {
  createCanvas(800, 600);
  mover = new Mover(width / 2, height / 2);
}

function draw() {
  background(30, 50, 40);
  mover.update();
  mover.display();
}

