let x
let y
let r
let c

function setup() {
createCanvas(1000,800)

}

function draw() {
  x = random(0, 1000)
  y = random(0, 800)
  r = random(0, 100)
  c = random(0,255)

  fill(c)
  circle( x, y, r)
}