let input, button, slider, styleSelect;
let poemOutput;
let isFullscreen = false;

function setup() {
  createCanvas(800, 600);
  background('#204d30');

  // Text Input
  input = createInput();
  input.position(20, 20);
  input.size(200);

  // Button
  button = createButton("Generate Poem");
  button.position(input.x + input.width + 10, 20);
  button.mousePressed(generatePoem);

  // Slider (font size)
  slider = createSlider(16, 48, 24);
  slider.position(20, 60);
  slider.style("width", "200px");

  // Dropdown (style)
  styleSelect = createSelect();
  styleSelect.position(20, 100);
  styleSelect.option("Nature");
  styleSelect.option("Sci-Fi");
  styleSelect.option("Abstract");
  styleSelect.option("Love");
  styleSelect.selected("Nature");

  // Fullscreen Button
  let fsButton = createButton("Toggle Fullscreen");
  fsButton.position(20, 140);
  fsButton.mousePressed(toggleFullscreen);

  // Left alignment
  textAlign(LEFT, TOP);
  textWrap(WORD);
  poemOutput = "";
}

function draw() {
  background('#204d30');
  fill(255);
  textSize(slider.value());

  // Draw the poem to the left with a margin
  text(poemOutput, 300, 60, width - 320);
}

function keyPressed() {
  if (keyCode === ESCAPE && isFullscreen) {
    fullscreen(false);
    isFullscreen = false;
  }
}

function generatePoem() {
  let userText = input.value();
  let style = styleSelect.value();
  let words = userText.split(" ");

  if (words.length < 2) {
    poemOutput = "Please enter more words.";
    return;
  }

  poemOutput = "🌿 Generated Poem - " + style + " 🌿\n\n";

  for (let i = 0; i < words.length; i++) {
    let line = "";

    if (style === "Nature") {
      line = "The " + words[i] + " flows like a river breeze.";
    } else if (style === "Sci-Fi") {
      line = "In a galaxy of " + words[i] + ", we drift beyond.";
    } else if (style === "Abstract") {
      line = words[i] + " bends time into mirrors of thought.";
    } else if (style === "Love") {
      line = "My heart whispers your " + words[i] + " at midnight.";
    }

    poemOutput += line + "\n";
  }
}

function toggleFullscreen() {
  let fs = fullscreen();
  fullscreen(!fs);
  isFullscreen = !fs;
}
