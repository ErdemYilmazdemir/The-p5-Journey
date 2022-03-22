const factor = Math.sqrt(3) / 2

function setup() {
  createCanvas(600, 600)
  background(220)
  tekenDriehoek(20, 530, 560, color('hsl(100, 100%, 50%)'))
  colorMode(HSL)
}

function draw() {

}

function tekenDriehoek(x, y, d, kleur) {
  fill(kleur)

  if (d < 5) {
    return
  }
  else {
    triangle(x, y, x + d, y, x + d / 2, y - factor * d)
    let nieuweHue = hue(kleur) + 60
    kleur = color(nieuweHue, saturation(kleur), lightness(kleur))
    tekenDriehoek(x, y, d / 2, kleur)
    tekenDriehoek(x + d / 2, y, d / 2, kleur)
    tekenDriehoek(x + d / 4, y - factor * d / 2, d / 2, kleur)
  }
}