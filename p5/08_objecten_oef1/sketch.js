function setup() {
  createCanvas(500, 500)
  background(220)

  strokeWeight(2)
  fill('green')
  ellipse(395, 95, 10)
  fill('red')
  ellipse(120, 330, 10)

  persoon1 = new Persoon(395, 95, 2, color('green'))
  persoon2 = new Persoon(120, 330, 2, color('red'))
}

function draw() {
  persoon1.beweeg()
  persoon1.lijn()

  persoon2.beweeg()
  persoon2.lijn()
}

class Persoon {
  constructor(TempX, TempY, TempR, TempC){
    this.x = TempX
    this.y = TempY
    this.r = TempR
    this.c = TempC
  }

  beweeg(){
    this.x += random(-2, 2)
    this.y += random(-2, 2)
  }

  lijn(){
    noStroke()
    fill(this.c)
    ellipse(this.x, this.y, this.r)
  }
}