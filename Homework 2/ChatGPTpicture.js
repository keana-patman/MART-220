// A dynamic p5.js sketch representing sushi with added interactivity
let sushiShapes = []; // Store moving sushi shapes

function setup() {
  createCanvas(800, 800);
  background(220, 245, 233); // Cool, light background for a sushi theme
  noLoop();

  // Initialize moving sushi shapes
  for (let i = 0; i < 10; i++) {
    sushiShapes.push({
      x: random(width / 2 - 150, width / 2 + 150),
      y: random(height / 2 - 150, height / 2 + 150),
      dx: random(-2, 2),
      dy: random(-2, 2),
      size: random(20, 40),
    });
  }
}

function draw() {
  background(220, 245, 233); // Clear background each frame

  // Title in upper-left corner
  fill(0);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Dynamic Sushi", 20, 20);

  // Name in lower-right corner
  textSize(16);
  textAlign(RIGHT, BOTTOM);
  text("By ChatGPT", width - 20, height - 20);

  // Draw sushi plate
  fill(255);
  ellipse(width / 2, height / 2, 500, 500);

  // Draw sushi rolls
  for (let sushi of sushiShapes) {
    drawSushiRoll(sushi.x, sushi.y, sushi.size);
  }

  // Draw wasabi and ginger garnish
  drawWasabi(width / 2 - 150, height / 2 + 150);
  drawGinger(width / 2 + 150, height / 2 + 150);

  // Update and draw moving sushi shapes
  updateSushiShapes();
}

function drawSushiRoll(x, y, size) {
  // Outer roll (seaweed)
  fill(30, 60, 30);
  ellipse(x, y, size, size);

  // Inner rice
  fill(255);
  ellipse(x, y, size * 0.7, size * 0.7);

  // Inner filling
  fill(random([200, 100, 50])); // Random filling colors
  ellipse(x, y, size * 0.4, size * 0.4);
}

function drawWasabi(x, y) {
  fill(120, 200, 100);
  noStroke();
  beginShape();
  vertex(x, y);
  vertex(x + 20, y - 10);
  vertex(x + 10, y - 20);
  vertex(x, y - 10);
  endShape(CLOSE);
}

function drawGinger(x, y) {
  fill(250, 200, 200);
  noStroke();
  ellipse(x, y, 30, 20);
  ellipse(x + 10, y - 5, 30, 20);
}

function updateSushiShapes() {
  for (let sushi of sushiShapes) {
    sushi.x += sushi.dx;
    sushi.y += sushi.dy;

    // Bounce off edges
    if (sushi.x < width / 2 - 200 || sushi.x > width / 2 + 200) {
      sushi.dx *= -1;
    }
    if (sushi.y < height / 2 - 200 || sushi.y > height / 2 + 200) {
      sushi.dy *= -1;
    }
  }
}

function mousePressed() {
  // Add a new sushi roll where the mouse is clicked
  sushiShapes.push({
    x: mouseX,
    y: mouseY,
    dx: random(-2, 2),
    dy: random(-2, 2),
    size: random(20, 40),
  });
  redraw();
}

function keyPressed() {
  // Clear all sushi shapes when spacebar is pressed
  if (key === ' ') {
    sushiShapes = [];
    redraw();
  }
}