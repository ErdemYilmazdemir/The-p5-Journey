let kleur

function setup() {
    createCanvas(600,600)
    rectMode(CENTER)
    colorMode(HSL)  
}

function draw() {
    background(210)
    vierkant(mouseX, mouseY, height - 1)
}

function vierkant(x, y, zijde){
    fill((x+y+zijde) % 360, 50, 40)
    rect(zijde/2+(width-zijde)*(x/width), zijde/2+(height-zijde)*(y/height), zijde, zijde)

    if(zijde < 2){
        return
    } else {
        vierkant(x, y, zijde * 0.8)
    }  
}
