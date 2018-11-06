//  demo
// igme-101 


 
let img;

function preload() {

    img = loadImage("images/Green-Skull.png");
}

function setup() {
    createCanvas(img.width, img.height);
    background(0);
    image(img, 0, 0);
    filter(INVERT);
}

function draw() {
    let i = img.get(mouseX, mouseY);
    copy (img, 280, 90, 300, 300, 0, 0, 50, 50);
    let r = i[0];
    let g = i[1];
    let b = i[2];
    let a = 255;
    
    car = color(r, g, b, a);
    truck = color(r - 20, g - 20 ,b - 20, a);
    fill(car);
    stroke(truck);
    //noStroke();
    
    rectMode(CENTER);
    rect(mouseX, mouseY, 15, 15);

}
