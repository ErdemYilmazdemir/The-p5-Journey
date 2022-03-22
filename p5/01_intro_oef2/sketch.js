function setup() {
createCanvas(500, 500)
fill('black')
rect(0, 0, width, height)
fill('blue')
rect(0, 0, width, height*(2/3))
fill('white')
rect(0, 0, width*(3/4), height*(2/3))
fill('red')
rect(0, 0, width*(2/4), height)
fill('yellow')
rect(0, 0, width*(3/4), height*(1/3))
fill('white')
rect(0, 0, width*(1/4), height*(1/3))
strokeWeight(7)
stroke('black')
line(0, height*(1/3), width*(3/4), height*(1/3))
line(width*(1/4), 0, width*(1/4), height*(1/3))
line(width*(3/4), 0, width*(3/4), height*(2/3))
line(width*(2/4), height*(1/3), width*(2/4), height)
line(width*(2/4), height*(2/3), width, height*(2/3))
}

function draw() {

}