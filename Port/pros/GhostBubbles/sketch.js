/*
Ethan Henson 
10/20/17
IGME-101: ICE 8c
*/
var baller = [];
var Roll = true;

function setup() {
    createCanvas(600, 600);
    background(0);
    noStroke();
}


function draw() {
    //put drawing code here
    background(0);
    gradient(0, 15, height);
    for (let i = 0; i < baller.length; i++) {
        baller[i].display();
        baller[i].move();
        baller[i].bounce();
    }
}


function gradient(x, y, tTar) {
    fill(255, 50)
    var tTar = tTar;
    var x = x;
    var y = y;

    while (x <= y) {
        rect(0, 0, width, tTar);
        tTar -= height / y;
        x++;

    }
}
//press R to remove balls, Left to wrap, right to bounce
function keyPressed() {
    if (keyCode === LEFT_ARROW) {
        Roll = true
    } else if (keyCode === RIGHT_ARROW) {
        Roll = false
    } else if (keyCode === 82) {
    baller.pop();
  }
}

function mouseClicked() {
    baller.push(new ball(random(1, 8), random(1, 8)))
}