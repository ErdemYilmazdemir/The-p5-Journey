let vorm = 1


function setup() {
  createCanvas(300, 200)
  noStroke()
  rectMode(CENTER)

}

function draw() {
  background(200)
  fill('yellow')

  if (vorm == 1) {
    ellipse(width / 2, height / 2, 100);
  } else if (vorm == 2) {
    fill(0, 100, 100);
    rect(width / 2, height / 2, 100, 100);
  } else {
    fill(130, 0, 130);
    triangle(width / 2, height / 4, width / 4, height * 0.75, width * 0.75, height * 0.75);
  }
}

function mousePressed() {
  vorm++;
  if (vorm > 3) {
    vorm = 1;
  }
}