// Particle system using P5.js

// Particle system array
let particles = [];

function setup() {
  createCanvas(600, 400); // Create a 600x400 canvas
}

function draw() {
  background('#204d30'); // Set background to forest green (RGB: 34, 139, 34)

  // Create new particle when mouse is pressed
  if (mouseIsPressed) {
    let p = new Particle(mouseX, mouseY); // Create new particle at mouse position
    particles.push(p); // Add particle to array
  }

  // Update and display each particle
  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update(); // Update particle position
    particles[i].display(); // Display the particle
    
    // Remove particle if it is off the screen or its lifespan is over
    if (particles[i].isOffScreen()) {
      particles.splice(i, 1); // Remove particle from array
    }
  }
}

// Particle class to define properties of each particle
class Particle {
  constructor(x, y) {
    this.position = createVector(x, y); // Set initial position
    this.velocity = createVector(random(-1, 1), random(-1, 1)); // Set random velocity
    this.acceleration = createVector(0, 0.05); // Gravity effect (slight downward force)
    this.lifespan = 255; // Set lifespan of particle
    this.size = random(5, 10); // Random size for variety
    this.color = color(random(255), random(255), random(255)); // Random color (rainbow)
  }

  // Update particle properties
  update() {
    this.velocity.add(this.acceleration); // Apply gravity
    this.position.add(this.velocity); // Add velocity to position
    this.lifespan -= 2; // Decrease lifespan over time
  }

  // Display particle
  display() {
    noStroke();
    fill(this.color.levels[0], this.color.levels[1], this.color.levels[2], this.lifespan); // Use the color with fading transparency
    ellipse(this.position.x, this.position.y, this.size); // Draw particle as ellipse
  }

  // Check if the particle is off-screen
  isOffScreen() {
    return (this.position.y > height || this.position.x < 0 || this.position.x > width);
  }
}

// Reference 1: P5.js Particle System Tutorial (https://p5js.org/tutorials/animating-with-media-objects/)
// Reference 2: MDN JavaScript Array Methods (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)


