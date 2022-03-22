let xafstand = 15
let yafstand = 8 
let zijde = 10 
let startx = 20 
let starty = 20 
const randx = 400
const randy = 200

function setup() { 
    createCanvas(randx, randy) 
    background(220) 
    fill("yellow") 
    noLoop() 
}


function draw() {
    while (startx < randx - zijde && starty < randy - zijde){
        square(startx, starty, zijde)
        startx += xafstand
        starty += yafstand
    }

}