//button stuff, pretty self explanatory
class Button {
    constructor(x, y, buttonWidth, buttonHeight, buttonEdge, colorNormal, colorHover, colorDown, buttonText) {
        this.x = x;
        this.y = y;
        this.buttonWidth = buttonWidth;
        this.buttonHeight = buttonHeight;
        this.colorNormal = colorNormal;
        this.colorHover = colorHover;
        this.colorDown = colorDown;
        this.buttonText = buttonText;
        this.buttonEdge = buttonEdge;
        this.colorCurrent = this.colorNormal;
    }
    checkWithin(a, b) {
        if (a >= this.x - (this.buttonWidth /2) && a <= this.x + (this.buttonWidth / 2) && b >= this.y - (this.buttonHeight / 2) && b <= this.y + (this.buttonHeight / 2)) {
            return true;
        } else {
            return false;
        }
    }
    drawButton (a, b) {
        noStroke();
        rectMode(CENTER);
		fill("#a09ebb");
        rect(this.x, this.y, this.buttonWidth, this.buttonHeight, this.buttonEdge);
        if (this.checkWithin(a,b) == true && mouseIsPressed == true) {
            fill(this.colorDown);
        } else if (this.checkWithin(a,b) == true) {
            fill(this.colorHover);
        } else {
            fill(this.colorNormal);
        }
        textAlign(CENTER, CENTER);
        textSize (height/19.2);
        text(this.buttonText, this.x, this.y);
    }

}
