//player stuff
class Stone {
	constructor(c, r, size, imList) {
		this.c = c;
		this.r = r;
		this.size = size;
		this.imageList = imList;
		this.imgNum = 0;
	}

	display() {
		image(this.imageList[this.imgNum], this.c * this.size, this.r * this.size, this.size, this.size);
	}
//movements
	moveDown() {
		this.r++;
		this.imgNum = 0;
		console.log("Down");
	}
	moveLeft() {
		this.c--;
		this.imgNum = 1;
		console.log("Left");
	}
	moveRight() {
		this.c++;
		this.imgNum = 2;
		console.log("Right");
	}
	moveUp() {
		this.r--;
		this.imgNum = 3;
		console.log("Up");
	}
	//when you move into a wall you look in that direction but dont move.
	TeleportDown() {
		this.r--;
		this.imgNum = 0;
	}
	TeleportLeft() {
		this.c++;
		this.imgNum = 1;
	}
	TeleportRight() {
		this.c--;
		this.imgNum = 2;
	}
	TeleportUp() {
		this.r++;
		this.imgNum = 3;
	}
	//looking at an edge
	lookDown() {
		this.imgNum = 0;
		console.log("Down");
	}
	lookLeft() {
		this.imgNum = 1;
		console.log("Left");
	}
	lookRight() {
		this.imgNum = 2;
		console.log("Right");
	}
	lookUp() {
		this.imgNum = 3;
		console.log("Up");
	}
}
//battle stuff
class battle {
	constructor(c, r, size, imList) {
		this.c = c;
		this.r = r;
		this.size = size;
		this.imSize = 5 * size;
		this.imageList = imList;
		this.imgNum = 0;
	}

	//player animation that I ran out of time to finish
	imPic() {
		image(this.imageList[this.imgNum], this.c * this.size, this.r * this.size, this.imSize, this.imSize);
	}
	update() {
		//background
		rectMode(CORNER);
		fill("#c0c0d8");
		noStroke();
		rect(0, 0, width, height);

		//bottom and top squares
		fill("#a09ebb");
		stroke("#41404d");
		strokeWeight(5);
		rect(width / 40, height / 25 * 17, width / 40 * 38, height / 25 * 6.5);
		rect(width / 40, height / 40, width / 40 * 38, height / 40 * 6);
		noStroke();
		fill("#41404d");
		textSize(height/16);
		text("What Will You Do?", width/2, height/9.6);
		

		//character images
		this.imPic();
		image(this.imageList[5], 5 * this.size, 3 * this.size, this.imSize, this.imSize);

		//life bar
		noStroke();
		fill("#a09ebb");
		rect(width/12.8, height/4.8, lifePoints * height/16, height/32);

		fill(0, 0);
		stroke("#41404d");
		strokeWeight(4);
		rect(width/12.8, height/4.8, 5 * height/16, height/32, 20);
		noStroke();
		fill("#41404d");
		textSize(height/24);
		text("Delta Jumpluff", width/3.5, height/3.7);

		//draws buttons
		runAway.drawButton(mouseX, mouseY);
		pokeball.drawButton(mouseX, mouseY);
		throwRock.drawButton(mouseX, mouseY);
		pokeBlock.drawButton(mouseX, mouseY);
	}
}
