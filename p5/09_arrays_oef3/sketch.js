const letterkeuze = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm']
const aantal = 1000
let letter = []
let huidigeLetterIndex = 0
const w = 2 //max wiggel
let index
let kleur

function setup() {
	createCanvas(600, 600)
	for (let i = 0; i < aantal; i++) {
		letter.push(new Letter())
		// alternatief (even goed): letter[i] = new Letter()
	}
	frameRate(20)
}

function draw() {
	if (huidigeLetterIndex >= letterkeuze.length) {
		huidigeLetterIndex = 0
	}
	// we willen dat de huidige gele letter een tijdje zichtbaar blijft, terwijl
	// alle letters bewegen, daarom huidigeLetterIndex in kleine stapjes laten toenemen (0.02)
	// en een nieuwe index maken die floor(huidigeLetterIndex) is (want index moet geheel zijn)
	index = floor(huidigeLetterIndex)
	background(0)

	let teller = 0
	for (let i = 0; i < letter.length; i++) {
		if (letter[i].l === letterkeuze[index]) {
			teller++
			kleur = color('yellow')
		} else {
			kleur = color('rgb(80, 80, 80)')
		}
		fill(kleur)
		textSize(20)
		letter[i].wiggel()
		text(letter[i].l, letter[i].pos.x, letter[i].pos.y)
	}
	textSize(50)
	fill(255)
	text('Aantal ' + letterkeuze[index] + ' = ' + teller, 100, 100)
	huidigeLetterIndex += 0.02

}

function Letter() {
	this.l = random(letterkeuze)
	this.pos = createVector(random(0, width), random(0, height))
}

Letter.prototype.wiggel = function () {
	this.pos.add(createVector(random(-w, w), random(-w, w)))
}