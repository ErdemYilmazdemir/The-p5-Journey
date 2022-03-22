function setup() {
  createCanvas(1000, 1000)
  noStroke()
  frameRate(20)
  background(220)
}

function draw() {
  let rood = random(0, 255)
  let groen = random(0, 255)
  let blauw = random(0, 255)
  let kleur = color(rood, groen, blauw)
  let x = random(0, width)
  let y = random(0, height)
  let diameter = random(30, 50)

  bloem(kleur, x, y, diameter)
}

function bloem(kleur, x, y, diameter) {
  fill(kleur)
  circle(x - diameter / 2, y - diameter / 2, diameter)
  circle(x + diameter / 2, y + diameter / 2, diameter)
  circle(x + diameter / 2, y - diameter / 2, diameter)
  circle(x - diameter / 2, y + diameter / 2, diameter)

  fill(donker(kleur, 0.5))
  circle(x, y, diameter)
}

function donker(kl, factor) {
  let r = red(kl)
  let g = green(kl)
  let b = blue(kl)
  return color(r * factor, g * factor, b * factor)
}