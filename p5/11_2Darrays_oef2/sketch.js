let hoogte = [ 
  [30,40,35,38,32,28,40,35],
  [58,60,46,45,50,52,70,51],
  [65,87,60,65,63,80,100,95],
  [40,61,60,60,65,73,80,83],
  [20,23,29,53,70,71,65,60],
  [-10,-1,10,50,80,70,55,48],
  [-15,-9,20,70,110,100,70,50],
  [-10,0,25,75,120,97,80,50]
] // 8 op 8 vierkant, 64 getallen

const zijde = 50

function setup () {
  createCanvas(500, 500)
  background(50)
  rectMode(CENTER)
  textSize(18)
  textAlign(CENTER, CENTER)
  colorMode(HSL)
  let topdal = minmax(hoogte)
  let laagste = topdal[0]
  let hoogste = topdal[1]
  let h // hue waarde van kleur
  // maak de tekening
  for (let i = 0; i < hoogte.length; i++) {
    for (let j = 0; j < hoogte[0].length; j++) {
      h = map(hoogte[i][j], laagste, hoogste, 240, 0)
      fill(h, 100, 50)
      rect(zijde * (j + 1), zijde * (i + 1), zijde, zijde)
      fill(0)
      text(hoogte[i][j], zijde * (j + 1), zijde * (i + 1))
    }
  }
}

function draw () { 
}

function minmax (x) { //zoek grootste en kleinste van matrix
  let gr = x[0][0]
  let kl = x[0][0]
  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[0].length; j++) {
      if (x[i][j] > gr) {
        gr = x[i][j]
      }
      if (x[i][j] < kl) {
        kl = x[i][j]
      }
    }
  }
  return [kl, gr]
}