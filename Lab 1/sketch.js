function setup() {
  createCanvas(800, 600);
  noStroke();
  background(30, 60, 40); 
  let spacing = 50; 
  for (let x = spacing / 2; x < width; x += spacing) {
    for (let y = spacing / 2; y < height; y += spacing) {
      fill(random(100, 255), random(100, 255), random(100, 255));
      ellipse(x, y, 30, 30); // draw circle at (x, y)
    }
  }
}

