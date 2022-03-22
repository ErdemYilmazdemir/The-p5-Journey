let xafstand = 30
let yafstand = 30
let straal = 15
let diameter = straal * 2 
let startx = 15
let starty = 15
let rood = 0
let groen = 0
let blauw = 0

function setup() { 
    createCanvas(600, 600)
    background(0) 
    noLoop()
    noStroke()

}


function draw() {
    while (starty + straal <= height){
        startx = straal
        while(startx + straal <= width){
            fill(rood, groen, blauw)
            ellipse(startx, starty, straal*2, straal*2)
            startx += diameter
            groen += 2.4
        }
    
    groen = 0
    starty += diameter
    rood += 2.4
    }

}