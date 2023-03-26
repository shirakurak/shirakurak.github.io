function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  background('#222222');
  for (var y = 0; y <= 1000; y = y + 500) {
    for (var x = 0; x <= 1000; x = x + 500) {
      noFill();
      stroke('#FFFFFF');
      rotateX(frameCount * 0.001);
      rotateY(frameCount * 0.001);
      box(200, 200, 200);
    }
  }
}