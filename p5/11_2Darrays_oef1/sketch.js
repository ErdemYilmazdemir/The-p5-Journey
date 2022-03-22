let getallen = [ [2, 6, 12, 9],
                  [3, 5, 8, -2],
                  [-1, 10, 9, 11],
                  [11, 4, 17, 25],
                  [0, -3, 24, 17]]

const zijde = 60

function setup () {
  createCanvas(400, 400)
  background(50)
  rectMode(CENTER)
  textSize(24)
  textAlign(CENTER, CENTER)
  let rij, kol, rijnr, kolnr
  for (let i = 0; i < getallen.length; i++) {
    for (let j = 0; j < getallen[0].length; j++) {
      rij = getallen[i]
      kol = []
      for (let r = 0; r < getallen.length; r++) {
        kol.push(getallen[r][j])
      }
      if (isGrootsteVanArray(getallen[i][j], rij) && isKleinsteVanArray(getallen[i][j], kol)) {
        rijnr = i //hier stond eerst let = fout want beperkt tot omringende accolades
        kolnr = j
      }
    }
  }
  // maak de tekening
  for (let i = 0; i < getallen.length; i++) {
    for (let j = 0; j < getallen[0].length; j++) {
      if (i === rijnr || j === kolnr) {
        fill('yellow')
      } else {
        fill(255)
      }
      rect(zijde * (j + 1), zijde * (i + 1), zijde, zijde)
      if (i === rijnr && j === kolnr) {
        fill('blue')
      } else {
        fill(0)
      }
      text(getallen[i][j], zijde * (j + 1), zijde * (i + 1))
    }
  }
}

function draw () { 
}

function isGrootsteVanArray (getal, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (getal < arr[i]) {
      return false
    }
  }
  return true
}

function isKleinsteVanArray (getal, arr) {
  for (let i = 0; i < arr.length; i++) {
    if (getal > arr[i]) {
      return false
    }
  }
  return true
}