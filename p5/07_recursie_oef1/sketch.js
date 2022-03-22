const factor = Math.sqrt(3) / 2

function setup() {
  createCanvas(600, 600)
  background(220)
  tekenDriehoek(20, 530, 560)
}

function draw() {

}

function tekenDriehoek(x, y, d) {
  if (d < 5) {
    return
  }
  else {
    triangle(x, y, x + d, y, x + d / 2, y - factor * d)
    tekenDriehoek(x, y, d / 2)
    tekenDriehoek(x + d / 2, y, d / 2)
    tekenDriehoek(x + d / 4, y - factor * d / 2, d / 2)
  }
}