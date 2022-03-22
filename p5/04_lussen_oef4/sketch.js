const startx = 50
const starty = 50
let x = startx
let y = starty
const diam = 40

function setup() {
  createCanvas(460, 300)
	background(0)
	textSize(diam / 2)
	textAlign(CENTER,CENTER)
}


function draw() {
	let sec = second()
	let min = minute()
	let uur = hour()
	let nummer = 0
	for (let i = 0; i < 6; i ++) {
		for (let j = 0; j <= 9; j++) {
			x = startx + j*diam
			y = starty + i*diam
			nummer = i * 10 + j
			fill(random(255), random(255), random(255))
			if (nummer == uur) {
				fill('red')
			}
			if (nummer == min) {
				fill('green')
			}
			if (nummer == sec) {
				fill('blue')
			} 
			ellipse(x,y,diam,diam)
			if (nummer == uur || nummer == min || nummer == sec) {
				fill(0)
				text(nummer,x,y)
			}
		}
	}
}

