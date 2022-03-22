let crn
let cr

let cgn
let cg

let cbn
let cb

let c

function setup() {
  createCanvas(700, 300)
  frameRate(1)
  textSize(40)
  textAlign(LEFT, CENTER)

}

function draw() {

  crn = int(random(0, 255))
  cr = color(crn, 0, 0)

  cgn = int(random(0, 255))
  cg = color(0, cgn, 0)

  cbn = int(random(0, 255))
  cb = color(0, 0, cbn)

  c = color(cr, cg, cb)

  background(200)

  noStroke()
  fill(225)
  rect(100, height - 120, 255, 40)
  rect(100, height - 180, 255, 40)
  rect(100, height - 240, 255, 40)

  fill(cr)
  rect(100, height - 240, crn, 40)
  text(crn, 25, height - 220)
  fill(cg)
  rect(100, height - 180, cgn, 40)
  text(cgn, 25, height - 160)
  fill(cb)
  rect(100, height - 120, cbn, 40)
  text(cbn, 25, height - 100)


  noStroke()
  fill(c)
  circle(width * (4 / 5), height / 2, 250)

}