let positie = []
let maxlengte = 40
var kleur

function setup() {
  createCanvas(600, 600)
  strokeWeight(3)
  kleur = color(0)
}

function draw() {
  background(230)
  stroke(kleur)

  if (positie.length > maxlengte) {
    positie.shift()
  }

  for (let i = 0; i < positie.length - 1; i++) {
    line(positie[i].x, positie[i].y, positie[i + 1].x, positie[i + 1].y)
  }

  for (i = 0; i < positie.length; i++) {
    positie[i].y++
  }
}

function mouseDragged() {
  positie.push(createVector(mouseX, mouseY))
}

function mousePressed() {
  positie = []
  kleur = color(random(255), random(255), random(255))
}