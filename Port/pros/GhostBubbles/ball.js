class ball {
    constructor(x, y) {
        this.x = mouseX;
        this.y = mouseY;
        this.deltaX = x
        this.deltaY = y
        this.size = 50
    }

    move() {
        this.x += this.deltaX;
        this.y += this.deltaY;
    }

    display() {
        fill(255, 105, 180, 50)
        ellipse(this.x, this.y, this.size, this.size)
    }
    bounce() {
        if (Roll == false) {
            if (this.x - 25 <= 0 || this.x + 25 >= width) {
                this.deltaX = this.deltaX * -1
            }
            if (this.y - 25 <= 0 || this.y + 25 >= height) {
                this.deltaY = this.deltaY * -1
            }
        } else {
            if (this.x > width + this.size / 2) { //check right edge
                this.x = -this.size / 2;
            }
            if (this.y > height + this.size / 2) { //check bottom edge
                this.y = -this.size / 2;
            }

            if (this.x < -this.size / 2) { //check left edge
                this.x = width + this.size / 2;
            }

            if (this.y < -this.size / 2) { //check top edge
                this.y = height + this.size / 2;
            }
        }

    }
}
