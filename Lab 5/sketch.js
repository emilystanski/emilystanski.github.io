let data;

function setup() {
  createCanvas(800, 800);  // Increased canvas size
  
  if (localStorage.getItem('circleData')) {
    data = JSON.parse(localStorage.getItem('circleData'));
  } else {
    data = {
      x: width / 2,
      y: height / 2,
      radius: 100,  // Increased circle size
      color: [random(255), random(255), random(255)]
    };
    localStorage.setItem('circleData', JSON.stringify(data));
  }
}

function draw() {
  background(220);
  fill(data.color);
  noStroke();
  ellipse(data.x, data.y, data.radius * 2);
}

function mousePressed() {
  data.x = mouseX;
  data.y = mouseY;
  data.color = [random(255), random(255), random(255)];
  localStorage.setItem('circleData', JSON.stringify(data));
}
 


