// Background animation
 let sunHeight = 600
 // sun begins below horizon 
 let redVal = 0;
 let greenVal = 0;

//Variables for the caterpillar and raceline.
 let startLine = 30;
 let finishLine = 700;
 let spacing = 20;
 let segmentSize = 30;
 let eyeSize = 15;
 let numCaterpillars = 5;
 let caterpillarEnds = [];

let isRacing = false;


//=MY CODE=
let caterpillarX = 50;

// before the race begins.
function setup() {
  createCanvas(800, 500);
//Make frame rate faster 
frameRate(10);
  
//=MY CODE ENDS HERE=
   
for (let i=0;i<numCaterpillars;i++) {
caterpillarEnds.push(startLine)
  }
}

//=MY CODE=
function draw() {
  // Background sunrise
background(redVal,greenVal, 0);

// sun
fill("pink");
circle(width/ 2, sunHeight, 180);
fill("yellow");
circle(width/ 2, sunHeight, 140);


// Mountin
fill(1, 64, 18);
triangle(200, height, 520, 253, width + 200, height)
fill(1, 64, 18);
triangle(200, height, 520, 253, 350, height);

// Mountin 2
fill(8, 51, 19);
triangle(-100, height, 150, 200, 400, height);
fill(8, 51, 19);
triangle(-100, height, 150, 200, 0, height);

//Mountin 3
fill(10, 97, 33);
triangle(200, height, 450, 250, width, height);
fill(10, 97, 33);
triangle(200, height, 450, 250, 300, height);
//=MY CODE ENDS HERE (changed measurements accordingly=
  
//sunrise starts as race begins
if(isRacing === true){
  if(sunHeight > 130){
  sunHeight -= 2;
  }
if(sunHeight < 480){
redVal = min(redVal +4, 255);
greenVal = min(greenVal + 1, 255);
 }
}
  
// Caterpillars move
if (isRacing === true) {
moveCaterpillars();
  } else {    
// if the race hasn't started
// instructions on start screen
writeStart();
  }
  
// Caterpillars at the starting line.
drawCaterpillars();

// Check if there is a winner
checkWinner();
}

// Draw a message at the
// start of the race.
function writeStart() {
// Style the text.
textSize(24);
textAlign(CENTER);
//=MY CODE=
fill(247,247,247);
noStroke();
//=MY CODE ENDS HERE
  
  // Display the message.
  text("🏁 Click to start!", width / 2, height / 2);
}

// Draw caterpillarS.
function drawCaterpillar(x, y, segments) {
  // Create a loop of circles
  // to form the body.
  for (let i = 0; i < segments; i += 1) {
fill(67, 162, 163);
stroke(0);
strokeWeight(1);
circle(x, y, 50);
x += spacing;
 }

// Draw the caterpillar's eyes.
  
//=MY CODE=
  fill(45, 48, 97);
  stroke(200);
//=MY CODE ENDS HERE=
  
strokeWeight(3);
circle(x, y - eyeSize, eyeSize);
circle(x - eyeSize, y - eyeSize, eyeSize);
}

// Draw all the caterpillars.
function drawCaterpillars() {
 let padding = height / numCaterpillars;
  for (let i = 0; i < numCaterpillars; i += 1) {
// Update each caterpillar x-coordinate   
 let y = (i + 0.5) * padding;

// length of caterpillar.   
let crawl = random(3, 6);

 // Draw caterpillars.
 drawCaterpillar(caterpillarEnds[i], y, crawl);
  }
}

// Start the race when the
// user presses the mouse.
function mousePressed() {
  isRacing = true;
  console.log("Race started");
}

// Move the caterpillars.
function moveCaterpillars() {
  for (let i = 0; i < numCaterpillars; i += 1) {
// Give each caterpillar a random
// speed once the race has started.
let move = round(random(1, 5));
   
 // Update caterpillars' x-coordinates
 caterpillarEnds[i] += move;
  }
}

// Display a message and stop the
// sketch if there's a winner.
function checkWinner() {
for (let i = 0; i < caterpillarEnds.length; i += 1) {
if (caterpillarEnds[i] >= finishLine) {
 // Style the text.
textSize(24);
textAlign(CENTER);
fill(255);
noStroke();

// Display the message.
text(`Caterpillar ${i + 1} wins!`,width/2,height/2);

 // end race by stopping draw() from running
 noLoop();
  }
 }
}