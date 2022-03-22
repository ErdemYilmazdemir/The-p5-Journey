let persoon1
let persoon2
let teller = 0
let startplaats1
let startplaats2
let kleur1 
let kleur2

function setup() {
	createCanvas(600, 600) 
	background(240)
	strokeWeight(2)
	// dronken wandelaar 1
	startplaats1 = createVector(200, 400)
	kleur1 = color('red')
	persoon1 = new DronkenPersoon(startplaats1, createVector(2, 1), kleur1)
	fill(kleur1)
	circle(startplaats1.x, startplaats1.y, 5) //startpunt duidelijk aanduiden

	//dronken wandelaar 2
	startplaats2 = createVector(400, 200)
	kleur2 = color('green')
	persoon2 = new DronkenPersoon(startplaats2, createVector(1, 3), kleur2)
	fill(kleur2)
	circle(startplaats2.x, startplaats2.y, 5) //startpunt 2
}


function draw() {
	persoon1.teken()
	persoon2.teken()
	persoon1.beweeg()
	persoon2.beweeg()
	teller++
	if (teller > 5) {
		persoon1.verandersnelheid(1)
		persoon2.verandersnelheid(2)
		teller = 0
	}
}

let DronkenPersoon = function(pos, snelh, kleur) {
	this.positie = pos
	this.snelheid = snelh
	this.kleur = kleur
	
	this.teken = function() {
		stroke(this.kleur)
		//circle(this.positie.x, this.positie.y, this.straal)
		point(this.positie.x, this.positie.y)
	}

	this.beweeg = function() {
		this.positie.add(this.snelheid)
	}

	this.verandersnelheid = function(maximum) {
		this.snelheid.x = random(-maximum,maximum)
		this.snelheid.y = random(-maximum,maximum)
	}
}