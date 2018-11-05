class enemy {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 36
    }

    display() {
        fill("#F84AA7")
        ellipse(this.x, this.y, this.size, this.size)
    }
}

class hero {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 36;
    }
    player(x, y) {
        fill("#1B1B3A");
        rectMode(CENTER);
        rect(x, y, this.size, this.size);
    }
}
