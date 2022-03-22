let rood = 0
let groen = 0
let blauw = 0
let muisNuInRechthoek = false
let muisDaarnetInRechthoek = false

function setup() {
  createCanvas(700, 300)
  background(220)
  frameRate(2)

}

function draw() {

  muisNuInRechthoek = mouseX > width / 4 && mouseX < width * (3 / 4) && mouseY > height / 4 && mouseY < height * (3 / 4)

  if (muisNuInRechthoek && !muisDaarnetInRechthoek) {
    rood = random(0, 255)
    groen = random(0, 255)
    blauw = random(0, 255)
    muisDaarnetInRechthoek = true
  }

  rectMode(CENTER)
  noStroke()
  fill(rood, groen, blauw)
  rect(width / 2, height / 2, width / 2, height / 2)
  muisDaarnetInRechthoek = muisNuInRechthoek
}