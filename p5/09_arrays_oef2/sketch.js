let getal = []
let aantal = 100
let max = 100
let startx = 20
let afstandStrepen = 6


function setup() {
  createCanvas(700, 150)
  strokeWeight(3)
  stroke(0)
  for (let i = 0; i < aantal; i++) {
    getal.push(Math.floor(random(0, max)))
  }
  frameRate(5)
}

function draw() {
  background(230)
  aantal--
  let indexGrootste = 0
  for (let i = 1; i <= aantal; i++) {
    if (getal[i] > getal[indexGrootste]) {
      indexGrootste = i
    }
  }
  for (let i = 0; i < getal.length; i++) {
    if (i == indexGrootste) {
      stroke('red')
    } else if (i == aantal) {
      stroke('yellow')
    } else {
      stroke(0)
    }
    line(startx + i * afstandStrepen, 120, startx + i * afstandStrepen, 120 - getal[i])
  }

  let hulp = getal[aantal]
  getal[aantal] = getal[indexGrootste]
  getal[indexGrootste] = hulp
}


