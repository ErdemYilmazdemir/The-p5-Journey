function setup() {
  createCanvas(600, 300)

}

function draw() {
  background(200)
  fill('white')
  circle( mouseX, height/4, height/5)

  fill('black')
  circle( width - mouseX, height * (3/4), height/5)

}