// A simple p5.js sketch representing spaghetti carbonara
function setup() {
    createCanvas(800, 800);
    background(245, 233, 220); // Warm, rustic table background
    noLoop();
  }
  
  function draw() {
    // Draw plate
    fill(255);
    ellipse(width / 2, height / 2, 500, 500);
  
    // Draw spaghetti
    stroke(240, 220, 170);
    strokeWeight(4);
    noFill();
    for (let i = 0; i < 50; i++) {
      let startX = random(width / 2 - 200, width / 2 + 200);
      let startY = random(height / 2 - 200, height / 2 + 200);
      let endX = startX + random(-50, 50);
      let endY = startY + random(-50, 50);
      bezier(startX, startY, startX + 30, startY - 30, endX - 30, endY + 30, endX, endY);
    }
  
    // Draw pancetta bits
    noStroke();
    fill(180, 80, 60);
    for (let i = 0; i < 15; i++) {
      let x = random(width / 2 - 150, width / 2 + 150);
      let y = random(height / 2 - 150, height / 2 + 150);
      ellipse(x, y, 20, 15);
    }
  
    // Draw Parmesan sprinkles
    stroke(255, 255, 200);
    strokeWeight(2);
    for (let i = 0; i < 30; i++) {
      point(random(width / 2 - 200, width / 2 + 200), random(height / 2 - 200, height / 2 + 200));
    }
  
    // Draw parsley garnish
    fill(34, 139, 34);
    for (let i = 0; i < 10; i++) {
      let x = random(width / 2 - 150, width / 2 + 150);
      let y = random(height / 2 - 150, height / 2 + 150);
      drawLeaf(x, y);
    }
  }
  
  function drawLeaf(x, y) {
    beginShape();
    vertex(x, y);
    vertex(x + 5, y - 10);
    vertex(x + 10, y);
    vertex(x + 5, y + 10);
    endShape(CLOSE);
  } 
  