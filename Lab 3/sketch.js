let sizeSlider;
let colorPicker;
let nameInput;
let clearButton;

function setup() {
  createCanvas(800, 600);
  background(255);

  // slider
  createP('Brush Size');
  sizeSlider = createSlider(5, 100, 20);
  sizeSlider.style('width', '200px');

  // colour picker
  createP('Pick a color');
  colorPicker = createColorPicker('#ff0000');

  // name input
  createP('Type your name');
  nameInput = createInput('Your Name');

  // clear canvas button
  clearButton = createButton('Clear Canvas');
  clearButton.mousePressed(clearCanvas); // P5.dom callback
}

function draw() {
 
}

function mousePressed() {
  let brushSize = sizeSlider.value();
  let brushColor = colorPicker.value();

  fill(brushColor);
  noStroke();
  ellipse(mouseX, mouseY, brushSize, brushSize);

  fill(0);
  textSize(16);
  text(nameInput.value(), mouseX + 10, mouseY);
}

function clearCanvas() {
  background(255);
}

