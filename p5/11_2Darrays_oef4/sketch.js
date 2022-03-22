let bin = [
  [1,0,0,1,0,1,0,1],
  [0,1,1,0,1,0,1,0],
  [1,0,0,1,1,0,0,1],
  [0,1,1,0,0,1,1,0],
  [1,1,0,0,1,1,0,0],
  [0,0,1,1,0,0,1,1],
  [1,0,0,1,0,1,1,0],
  [0,1,1,0,1,0,0,1]
]

const zijde = 30
const startx = 20
const starty = 60
const padding = 10

let arij = bin.length
let akol = bin[0].length 

function setup () {
  createCanvas(500, 370)
  background(50)
  rectMode(CENTER)
  textSize(20)
  textAlign(CENTER, CENTER)
  let correct = true
  for (let i = 0; i < arij; i++) {
    for (let j = 0; j < akol; j++) {
      if (bin[i][j] !== 0 && bin[i][j] !== 1) {
        correct = false
        MeldingFoutGetalOpRij(i)
        fill('yellow')
      } else {
        fill(255)
      }
      let x = startx + zijde * j + zijde / 2
      let y = starty + zijde * i + zijde / 2
      rect(x, y, zijde, zijde)
      fill(0)
      text(bin[i][j], x, y)
    }
  }
  textAlign(LEFT)
  if (correct) { // alle getallen zijn dus 0 of 1
    // evenveel 0 als 1 op elke rij?
    for (let i = 0; i < arij; i++) {
      if (!evenveel01Rij(i)) {
        correct = false
        MeldingFoutAantalOpRij(i)
      }
    }
    for (let j = 0; j < akol; j++) {
      if (!evenveel01Kol(j)) {
        correct = false
        MeldingFoutAantalOpKol(j)
      }
    }
    if (!correct) {
      fill('red')
      text('Niet evenveel 0 en 1 op aangeduide rij / kolom', startx, starty + (arij + 1) * zijde)
    }
  }
  if (correct) {
    // geen drie dezelfde naast elkaar?
    for (let i = 0; i < arij; i++) {
      for (let j = 0; j < akol - 2; j++) {
        if (bin[i][j] === bin[i][j + 1] && bin[i][j] === bin[i][j + 2]) {
          correct = false
          MeldingDrieNaastElkaar(i, j)
        }
      }
    }
    for (let i = 0; i < arij - 2; i++) {
      for (let j = 0; j < akol; j++) {
        if (bin[i][j] === bin[i + 1][j] && bin[i][j] === bin[i + 2][j]) {
          correct = false
          MeldingDrieOnderElkaar(i, j)
        }
      }
    }
    if (!correct) {
      fill('red')
      text('Drie dezelfde naast / onder elkaar', startx, starty + (arij + 1) * zijde)
    }
  }

  if (correct) {
    // twee dezelfde rijen of kolommen
    for (let i1 = 0; i1 < arij - 1; i1++) {
      for (let i2 = i1 + 1; i2 < arij; i2++) {
        if (gelijkeRijen(i1, i2)) {
          correct = false
          MeldingGelijkeRijen(i1, i2)
        }
      }
    }
    for (let j1 = 0; j1 < akol - 1; j1++) {
      for (let j2 = j1 + 1; j2 < akol; j2++) {
        if (gelijkeKolommen(j1, j2)) {
          console.log(j1,j2)
          correct = false
          MeldingGelijkeKolommen(j1, j2)
        }
      }
    }
    if (!correct) {
      fill('red')
      text('Gelijke kolommen of rijen', startx, starty + (arij + 1) * zijde)
    }
  }
  if (correct) {
    fill(255)
    text('Dit is een geldige binaire puzzel oplossing', 20, 30)
  } else {
    fill('red')
    text('Dit is GEEN geldige binaire puzzel oplossing', 20, 30)
  }
}

function draw () { 
}

function tekenOplossing() {
  let x, y
  for (let i = 0; i < arij; i++) {
    for (let j = 0; j < akol; j++) {
      x = startx + zijde * j + zijde / 2
      y = starty + zijde * i + zijde / 2
      fill(255)
      rect(x, y, zijde, zijde)
      fill(0)
      text(bin[i][j], x, y)
    }
  }
}

function MeldingGelijkeRijen(r1, r2) {
  push()
  noFill()
  strokeWeight(3)
  stroke('red')
  rectMode(CORNER)
  rect(startx, starty + zijde * r1, zijde * akol, zijde)
  rect(startx, starty + zijde * r2, zijde * akol, zijde)
  pop()
}

function MeldingGelijkeKolommen(k1, k2) {
  push()
  noFill()
  strokeWeight(3)
  stroke('red')
  rectMode(CORNER)
  rect(startx + zijde * k1, starty, zijde, zijde * arij)
  rect(startx + zijde * k2, starty, zijde, zijde * arij)
  pop()
}

function MeldingFoutGetalOpRij(r) {
  push()
  fill('red')
  textAlign(LEFT, CENTER)
  text('Getal â‰  van 0 en 1', startx + arij * zijde + padding, starty + zijde * r + zijde / 2)
  pop()
}

function MeldingFoutAantalOpRij(r) {
  push()
  noFill()
  strokeWeight(3)
  stroke('red')
  rectMode(CORNER)
  rect(startx, starty + zijde * r, zijde * akol, zijde)
  pop()
}

function MeldingFoutAantalOpKol(k) {
  push()
  noFill()
  strokeWeight(3)
  stroke('red')
  rectMode(CORNER)
  rect(startx + zijde * k, starty, zijde, zijde * arij)
  pop()
}

function MeldingDrieNaastElkaar(r, k) {
  push()
  noFill()
  strokeWeight(3)
  stroke('red')
  rectMode(CORNER)
  rect(startx + k * zijde, starty + r * zijde, zijde * 3, zijde)
  pop()
}

function MeldingDrieOnderElkaar(r, k) {
  push()
  noFill()
  strokeWeight(3)
  stroke('red')
  rectMode(CORNER)
  rect(startx + k * zijde, starty + r * zijde, zijde, zijde * 3)
  pop()
}

function evenveel01Rij(r) {
  let aantal0 = 0
  let aantal1 = 0
  for (let j = 0; j < akol; j++) {
    if (bin[r][j] === 0) {
      aantal0++
    } else { // we weten zeker dat er enkel 0 en 1 voorkomt
      aantal1++
    }
  }
  return aantal0 === aantal1
}

function evenveel01Kol(k) {
  let aantal0 = 0
  let aantal1 = 0
  for (let i = 0; i < arij; i++) {
    if (bin[i][k] === 0) {
      aantal0++
    } else { // we weten zeker dat er enkel 0 en 1 voorkomt
      aantal1++
    }
  }
  return aantal0 === aantal1
}

function gelijkeRijen(r1, r2) {
  for (let j = 0; j < akol; j++) {
    if (bin[r1][j] !== bin[r2][j]) {
      return false
    }
  }
  return true
}

function gelijkeKolommen(k1, k2) {
  for (let i = 0; i < arij; i++) {
    if (bin[i][k1] !== bin[i][k2]) {
      return false
    }
  }
  return true
}