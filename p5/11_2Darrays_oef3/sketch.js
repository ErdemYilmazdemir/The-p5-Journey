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
  let aantalToppen = 0
  // maak de tekening
  for (let i = 0; i < hoogte.length; i++) {
    for (let j = 0; j < hoogte[0].length; j++) {
      if (isBergtop(i, j, hoogte)) {
        aantalToppen++
        fill('yellow')
      } else {
        fill('255')
      }
      rect(zijde * (j + 1), zijde * (i + 1), zijde, zijde)
      fill(0)
      text(hoogte[i][j], zijde * (j + 1), zijde * (i + 1))
    }
  }
  fill(255)
  text('Er zijn ' + aantalToppen + ' bergtoppen', 200, 460)
}

function draw () { 
}

function isBergtop (r, k, ar) { // element op rij r en kolom k in array ar
  for (let i = r - 1; i <= r + 1; i++) {
    for (let j = k - 1; j <= k + 1; j++) {
      if (i >= 0 && i < ar.length && j >= 0 && j < ar[0].length) {
        // ar[i][j] bestaat, valt niet buiten veld!
        if (ar[i][j] > ar[r][k]) {
          return false
        }
      }
    }
  }
  return true
}