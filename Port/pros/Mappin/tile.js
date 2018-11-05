//Tile class
class Tile {
	constructor(x, y, size, c, r, background, imList) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.background = background;
		this.imageList = imList;
		this.imgNum = 0;
		this.indexC = c;
		this.indexR = r;
	}

//displays the diffrent tiles
	display() {
		fill(this.background);
		noStroke();
		rect(this.x, this.y, this.size, this.size);
		image(this.imageList[this.imgNum], this.x, this.y, this.size, this.size);
	}
//for level design
	nextImage() {
		this.imgNum++;
		if (this.imgNum == this.imageList.length) {
			this.imgNum = 0;
		}
	}
	checkWithin(x, y) {
		if (x > this.x && x < this.x + this.size && y > this.y && y < this.y + this.size) {
			return true;
		} else {
			return false;
		}
	}
}
