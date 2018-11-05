/*
Ethan Henson 
10/4/17
IGME-101: Free time
*/
//FF3562
let enemyNum = prompt("how many enemies would you like to eat?")
let heroX = 24;
let heroY = 24;
let bad = [];
let spacing = [24, 73, 122, 171, 220, 269, 318, 367, 416, 465, 514, 563, 612, 661, 710]

function setup() {
    createCanvas(735, 735);
    background("#693668");
    p1 = new hero(heroX, heroY);
    for (let i = 0; i < enemyNum; i++) {
        bad.push(new enemy(spacing[Math.floor(random(spacing.length))], spacing[Math.floor(random(spacing.length))]))
    }
}


function draw() {

    for (let y = 0; y <= bad.length; y++) {
        if (bad.length === 0) {
            background("#1B1B3A");
            fill("#FF3562");
            textAlign(CENTER, CENTER);
            textSize(30);
            text("Stage clear!", 367, 367)
            textSize(15);
            text("(press space to continue)", 367, 397);
        } else {
            strokeWeight(2)
            background("#693668");
            stroke("#A74482")

            //grid
            var wit = width / 15
            for (var i = 0; i <= 15; i++) {
                line(wit, 0, wit, height);
                wit += width / 15;
            }
            var hit = height / 15
            for (var i = 0; i <= 15; i++) {
                line(0, hit, width, hit);
                hit += height / 15;
            }



            //enemies
            strokeWeight(0);
            for (let i = 0; i < bad.length; i++) {
                bad[i].display();
                fill("#FF3562");
                textAlign(CENTER, CENTER);
                textSize(30);
                text(bad.length, 710, 710);
            }

            for (let i = 0; i < bad.length; i++) {
                if (bad[i].x == heroX && bad[i].y == heroY) {
                    bad.splice(i, 1);
                    break;
                }
            }

            //player
            p1.player(heroX, heroY);

        }
    }
}


function keyPressed() {
    //press to move left
    if (keyCode === LEFT_ARROW) {
        heroX -= 49;
        if (heroX <= 0) {
            heroX = 24;
        }
        //press to move right
    } else if (keyCode === RIGHT_ARROW) {
        heroX += 49;
        if (heroX >= width) {
            heroX = 710;
        }
        //press to move up
    } else if (keyCode === UP_ARROW) {
        heroY -= 49;
        if (heroY <= 0) {
            heroY = 24;
        }
        //press to love down
    } else if (keyCode === DOWN_ARROW) {
        heroY += 49;
        if (heroY >= height) {
            heroY = 710;
        }
        //press to refresh game
    } else if (keyCode === 32) {
        location.reload();
    }
}

