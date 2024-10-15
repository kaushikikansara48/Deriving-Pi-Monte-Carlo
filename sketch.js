let smaller;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(20);

  if (width <= height) {
    smaller = width;
  } else {
    smaller = height;
  }
  fill(0);
  translate(width / 2, height / 2);
  rectMode(CENTER);
  square(0, 0, smaller);
  radius = smaller / 2;
  fill(100);
  circle(0, 0, radius * 2);

  rectMode(CENTER);
  textAlign(CENTER);
  textSize(30);
}

let inside = 0;
let outside = 0;

function draw() {
  translate(width / 2, height / 2);

  for (let j = 0; j < 100; j++) {
    // I generate a new point each time
    let range = smaller / 2;

    x = random(-range, range);
    y = random(-range, range);

    // we may use dist() here as well
    distance = sqrt(x ** 2 + y ** 2);
    if (distance < radius) {
      strokeWeight(2);
      stroke("blue");
      point(x, y);
      inside++;
    } else {
      strokeWeight(2);
      stroke("red");
      point(x, y);
      outside++;
    }
  }
  // Then we calculate PI
  pi = (4 * inside) / (inside + outside);

  pi = round(pi, 4);

  fill(150);
  noStroke();
  rect(0, 0, 200, 50);

  fill("powderblue");
  text("𝝅 = " + pi, 0, 10);
}
