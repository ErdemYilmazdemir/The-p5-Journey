/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-undef */
/* eslint-disable no-tabs */
/* eslint-disable no-unused-vars */
let particles = []
const particleAantal = 150 // mag natuurlijk ook met let of var
const minDist = 120
const vmax = 7
const maxstraal = 4

function setup () {
  createCanvas(750, 1000)
}

function draw () {
  background(8, 90, 215)
  fill(255)
  text(Math.round(frameRate()), 20, 20)
  strokeWeight(2)

  for (let i = particles.length - 1; i >= 0; i--) {
    particles[i].update() // bereken nieuwe positie aan de hand van huidige positie en snelheid
    particles[i].toon() // teken het i-de partikel als een kleine cirkel
    if (particles[i].positie.x > width || particles[i].positie.x < 0 || particles[i].positie.y > height || particles[i].positie.y < 0) {
      particles.splice(i, 1) // verwijder element uit array want partikel is buiten window
    }
  }

  while (particles.length < particleAantal) {
    particles.push(new Particle()) // maak nieuwe partikels aan tot het aantal = particleAantal
  }

  noFill()
  for (let i = particles.length - 1; i >= 0; i--) {
    let p1 = particles[i]
    for (let j = particles.length - 1; j >= 0; j--) {
      if (i !== j) { // enkel twee verschillende partikels vergelijken
        let p2 = particles[j]
        let d = abs(dist(p1.positie.x, p1.positie.y, p2.positie.x, p2.positie.y))
        if (d <= minDist) { // partikel i en j zijn dicht genoeg bij elkaar om lijnstuk te tekenen
          stroke(255, map(d, 0, minDist, 100, 0))
          line(p1.positie.x, p1.positie.y, p2.positie.x, p2.positie.y)
        }
      }
    }
  }
}

// Constructor voor nieuw particle object
function Particle () {
  this.positie = createVector(random(0, width), random(0, height))
  this.snelheid = createVector(random(-vmax, vmax), random(-vmax, vmax))
  this.straal = random(1, maxstraal)
}

// had ook binnen de constructor kunnen staan met this.update()
Particle.prototype.update = function () {
  this.positie.add(this.snelheid)
}

// had ook binnen constructor kunnen staan met this.toon()
Particle.prototype.toon = function () {
  noStroke()
  fill(255)
  circle(this.positie.x, this.positie.y, this.straal)
}