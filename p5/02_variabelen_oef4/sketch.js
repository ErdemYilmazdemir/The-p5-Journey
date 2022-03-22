let x = 0

function setup() {
  createCanvas(600, 300)
  frameRate(20)

}

function draw() {
  background(159, 218, 255)
  noStroke()
  fill('white')
  circle(x, 150, 50)
  fill('white')
  circle(x + 40, 140, 75)
  fill('white')
  circle(x + 75, 115, 100)
  fill('white')
  circle(x + 125, 135, 90)
  x++
}