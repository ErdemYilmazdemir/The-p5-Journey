let x
let y 
let xspeed = 2
let yspeed = -1
const straal = 10
const xrect = 60
const yrect = 50
const rectWidth = 250
const rectHeight = 80
let rood = 255 
let groen = 0
let blauw = 0
let balDaarnetInRechthoek = false
let balNuInRechthoek
let rechthoekKleur = 150


function setup() {
    noStroke()
    createCanvas(400, 200) 
    x = random(straal, width - straal)
	y = random(straal, height - straal)
}

function draw() {

    x += xspeed 
    y += yspeed 

    if (x >= width - straal && xspeed > 0 || x <= straal && xspeed < 0) {
        xspeed = -xspeed
    } 
    if (y >= height - straal && yspeed > 0 || y <= straal && yspeed < 0) {
        yspeed = -yspeed
    }

    balNuInRechthoek = x + straal > xrect && x - straal < xrect + rectWidth
        && y + straal > yrect && y - straal < yrect + rectHeight
        
    background(200)

    if (balNuInRechthoek && !balDaarnetInRechthoek) {
		rood = random(0, 255)
		groen = random(0, 255)
		blauw = random(0,255)
		balDaarnetInRechthoek = true
		rechthoekKleur = 230
	} 
	if (!balNuInRechthoek && balDaarnetInRechthoek) {
		rood = 255
		groen = 0
		blauw = 0
		rechthoekKleur = 150
    }
    
    fill(rechthoekKleur)
	rect(xrect, yrect, rectWidth, rectHeight)
	fill(rood, groen, blauw)
    ellipse(x, y, straal*2, straal*2)
	balDaarnetInRechthoek = balNuInRechthoek
}
