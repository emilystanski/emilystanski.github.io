


function setup() {
   
    let canvas = createCanvas(600, 400);
   
    background(200); // light gray background 
}


function draw() {
    fill(0, 100, 255); // colour for the circle
    ellipse(mouseX, mouseY, 50, 50); // circle that follows the mouse
}

