function setup() {
  createCanvas(1000, 1000)
  background(100)
  // noLoop()
  // frameRate(60)
}

function draw() {
// wordt 60 keer per seconde uitgevoerd
  fill('pink')
  strokeWeight(6)
  stroke('purple')
  ellipse(mouseX, mouseY, 100, 100)
  // fill(200)
  // rect(mouseX, mouseY, 50, 200)
}