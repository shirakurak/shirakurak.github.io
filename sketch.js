function setup() {
  createCanvas(200, 200, WEBGL);
}

function draw() {
  background('#222222');
  for (var y = 0; y <= 100; y = y + 50) {
    for (var x = 0; x <= 100; x = x + 50) {
      noFill();
      stroke('#FFFFFF');
      rotateX(frameCount * 0.001);
      rotateY(frameCount * 0.001);
      box(200, 200, 200);
    }
  }
}