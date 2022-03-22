let x;
let y;
let d = 40;
let r = d / 2
let vx = 0;
let vy = -2;
let balRood = 255;
let balGroen = 255;
let balBlauw = 255;
let score

function setup() {
    createCanvas(400, 400);
    x = width / 2;
    y = height / 2;
    score = 0
}


function draw() {
    background(0);

    textSize(30)
    fill('white')
    text(score, 350, 350)

    fill(balRood, balGroen, balBlauw);
    ellipse(x, y, d, d);
    x += vx;
    y += vy;
    if (x > width - r || x < r) {
        vx = -vx;
    }
    if (y < r && vy < 0) {
        vy = -vy;
    }
    if (dist(mouseX, mouseY, x, y) <= r && vy > 0) {
        vy = -vy;
        vx = random(-4, 4);
        balRood = random(256);
        balGroen = random(256);
        balBlauw = random(256);
        score += 1
    }
}