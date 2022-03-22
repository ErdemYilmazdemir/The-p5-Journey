let aantalMuiskliks = 0

function setup() {
	createCanvas(1000, 100)
	textSize(20)
}


function draw() {
	background(220)
	strokeWeight(2)
	if (isVijfvoud(aantalMuiskliks)) {
		fill('blue')
	} else {
		fill(0)
	}
	tekenStreepjes(aantalMuiskliks, 30, 10, 30)
}

function tekenStreepjes(aantal, L, afstand, blokAfstand) {
	let x = 20
	let y = 20
	for (let i = 1; i <= aantal; i++) {
		if (isVijfvoud(i)) {
			line(x, y + L / 4, x - 5 * afstand, y + 3 * L / 4)
			x += blokAfstand
		} else {
			line(x, y, x, y + L)
			x += afstand
		}
	}
	text(aantal, x - 10, y + L + 20)
}

function isVijfvoud(x) {
	return x % 5 === 0
}

function mousePressed() {
	aantalMuiskliks++
}