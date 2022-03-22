const afstand = 10 
const hoogte = 100 
let startx = 30 
const starty = 50 
const rand = 400

function setup() { 
    createCanvas(rand, 200) 
    background(220) 
    noLoop() 
}


function draw() {
    let teller = 1 
    while (startx <= rand) {
        line(startx,starty,startx,starty + hoogte) 
        startx += afstand 
    }
}