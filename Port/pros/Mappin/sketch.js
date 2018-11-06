/*
Ethan Henson 
9/27/17
IGME-101: ICE 4b
*/

//tile and character memory
var tiles = [];
var dude;

//image groups 
var images = [];
var kiddo = [];
var grey = [];

//rows and colms
var rows = 15;
var colms = 10;

//tile size
var tileSize = 50;

//level memory
var Level;
let lever = [];

//battle transition
var battling = false;
let battleScene;

//buttons
var pokeball, runAway, throwRock, pokeBlock;

//number of pokeballs
var pokeBalls = 20;
var pkmnBall = true;

//pokemons life
var lifePoints = 5;

function preload() {
	/*0*/
	images.push(loadImage("images/blank.png"));
	/*1*/
	images.push(loadImage("images/RockWall.png"));
	/*2*/
	images.push(loadImage("images/RockRight.png"));
	/*3*/
	images.push(loadImage("images/RockLeft.png"));
	/*4*/
	images.push(loadImage("images/RockTopRight.png"));
	/*5*/
	images.push(loadImage("images/RockTopLeft.png"))
	/*6*/
	images.push(loadImage("images/RoofBottomLeft.png"));
	/*7*/
	images.push(loadImage("images/RoofBottomMid.png"));
	/*8*/
	images.push(loadImage("images/RoofBottomRight.png"));
	/*9*/
	images.push(loadImage("images/RoofLeft.png"));
	/*10*/
	images.push(loadImage("images/RoofMid.png"));
	/*11*/
	images.push(loadImage("images/RoofRight.png"));
	/*12*/
	images.push(loadImage("images/RoofTopLeft.png"));
	/*13*/
	images.push(loadImage("images/RoofTopMid.png"));
	/*14*/
	images.push(loadImage("images/RoofTopRight.png"));
	/*15*/
	images.push(loadImage("images/Ladder.png"));
	/*16*/
	images.push(loadImage("images/Rug.png"));
	/*17*/
	images.push(loadImage("images/Void.png"));
	/*18*/
	images.push(loadImage("images/Void2.png"));
	/*19*/
	images.push(loadImage("images/Grad.png"));
	/*20*/
	images.push(loadImage("images/GradBottom.png"));
	/*0*/
	kiddo.push(loadImage("images/StoneKid.png"));
	/*1*/
	kiddo.push(loadImage("images/StoneLeft.png"));
	/*2*/
	kiddo.push(loadImage("images/StoneRight.png"));
	/*3*/
	kiddo.push(loadImage("images/StoneBack.png"));
	/*0*/
	grey.push(loadImage("images/Grey0.png"));
	/*1*/
	grey.push(loadImage("images/Grey1.png"));
	/*2*/
	grey.push(loadImage("images/Grey2.png"));
	/*3*/
	grey.push(loadImage("images/Grey3.png"));
	/*4*/
	grey.push(loadImage("images/Grey4.png"));
	/*5*/
	grey.push(loadImage("images/Delta Jumpluff GreyScale.png"));


}

function setup() {
	//setting up tiles
	createCanvas(colms * tileSize, rows * tileSize);
	tileSize = width / colms;
	for (let r = 0; r < rows; r++) {

		let tempArray = [];
		for (let c = 0; c < colms; c++) {
			tempArray.push(new Tile(c * tileSize, r * tileSize, tileSize, r, c, "#A8AEC1", images));
		}
		tiles.push(tempArray);
	}

	//set up stuff
	dude = (new Stone(1, 13, tileSize, kiddo));
	Level = (new Levels());
	battleScene = (new battle(0, 5, tileSize, grey));

	//these are buttons
	//params: x, y, w, h, r,  nColor, oColor, dColor, label
	pokeBlock = (new Button(width / 1.36, height / 1.31, width / 2.66, height / 16, 0, "#41404d", "#7f7d98", "#a09ebb", "PokeBlock"))
	throwRock = (new Button(width / 3.5, height / 1.15, width / 2.2, height / 16, 0, "#41404d", "#7f7d98", "#a09ebb", "Throw Rock"))
	runAway = (new Button(width / 1.36, height / 1.15, width / 2.66, height / 16, 0, "#41404d", "#7f7d98", "#a09ebb", "Run Away"))
}

function draw() {
	//button that has changing values, and changes if that value = 0
	if (pkmnBall == true) {
		pokeball = (new Button(width / 3.5, height / 1.31, width / 2.2, height / 16, 0, "#41404d", "#7f7d98", "#a09ebb", "Pokeball x" + pokeBalls))
	} else {
		pokeball = (new Button(width / 3.5, height / 1.31, width / 2.2, height / 16, 0, "#41404d", "#7f7d98", "#a09ebb", "No Pokeballs"))
	}
	//display tiles
	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < colms; c++) {
			tiles[r][c].display();

		}
	}
	//makeing sure everything is where it belongs
	rectMode(CORNER);
	//displaying player
	dude.display();
	//displaying the level's tiles
	Level.level2();
	//apperas for battling
	if (battling == true) {
		battleScene.update();
	}

}

function mousePressed() {
	//diffrent button actions
	if (battling == true) {
		if (runAway.checkWithin(mouseX, mouseY) == true) {
			battling = false;
		}
		if (throwRock.checkWithin(mouseX, mouseY) == true) {
			lifePoints--;
			if (lifePoints == 0) {
				battling = false;
			}
		}
		if (pokeball.checkWithin(mouseX, mouseY) == true) {

			if (pokeBalls == 1) {
				pkmnBall = false;
			} else {
				pokeBalls--;
				console.log("throwing pokeball, Pokeballs left " + pokeBalls);
				if (lifePoints == 1) {
					pokeBalls--;
					battling = false;
				}
			}
		}
		if (pokeBlock.checkWithin(mouseX, mouseY) == true) {}
	}
	/*	for (let r = 0; r < rows; r++) {
			for (let c = 0; c < colms; c++) {
				if (tiles[r][c].checkWithin(mouseX, mouseY)) {
					tiles[r][c].nextImage();
				}
			}
		}
	*/
}

function keyPressed() {

	if (battling == false) {

		//press to move left
		if (keyCode === LEFT_ARROW) {
			//cant move off of certain tiles in some directions
			if (tiles[dude.r][dude.c].imgNum == 6 ||
				tiles[dude.r][dude.c].imgNum == 9 ||
				tiles[dude.r][dude.c].imgNum == 12) {
				dude.lookLeft();
			} else {
				dude.moveLeft();
			}
			//keeps from going off screen
			if (dude.c < 0) {
				dude.TeleportLeft();
			}
			//keeps from moving onto a tile in certain directions
			if (tiles[dude.r][dude.c].imgNum == 2 ||
				tiles[dude.r][dude.c].imgNum == 3 ||
				tiles[dude.r][dude.c].imgNum == 1 ||
				tiles[dude.r][dude.c].imgNum == 4 ||
				tiles[dude.r][dude.c].imgNum == 5) {
				dude.TeleportLeft();
			}
			if (tiles[dude.r][dude.c].imgNum == 8 ||
				tiles[dude.r][dude.c].imgNum == 11 ||
				tiles[dude.r][dude.c].imgNum == 14) {
				dude.TeleportLeft();
			}
			//starts battle
			if (tiles[dude.r][dude.c].imgNum == 10) {
				lifePoints = 5;
				battling = true;
			}

			//press to move right
		} else if (keyCode === RIGHT_ARROW) {

			//cant move off of certain tiles in some directions
			if (tiles[dude.r][dude.c].imgNum == 8 ||
				tiles[dude.r][dude.c].imgNum == 11 ||
				tiles[dude.r][dude.c].imgNum == 14) {
				dude.lookRight();
			} else {
				dude.moveRight();
			}
			//keeps from going off screen
			if (dude.c >= colms) {
				dude.TeleportRight();
			}
			//keeps from moving onto a tile in certain directions
			if (tiles[dude.r][dude.c].imgNum == 2 ||
				tiles[dude.r][dude.c].imgNum == 3 ||
				tiles[dude.r][dude.c].imgNum == 1 ||
				tiles[dude.r][dude.c].imgNum == 4 ||
				tiles[dude.r][dude.c].imgNum == 5 ||
				tiles[dude.r][dude.c].imgNum == 19 ||
				tiles[dude.r][dude.c].imgNum == 18) {
				dude.TeleportRight();
			}
			if (tiles[dude.r][dude.c].imgNum == 6 ||
				tiles[dude.r][dude.c].imgNum == 9 ||
				tiles[dude.r][dude.c].imgNum == 12) {
				dude.TeleportRight();
			}
			//starts battle
			if (tiles[dude.r][dude.c].imgNum == 10) {
				lifePoints = 5;
				battling = true;
			}
			//press to move up
		} else if (keyCode === UP_ARROW) {
			//cant move off of certain tiles in some directions
			if (tiles[dude.r][dude.c].imgNum == 12 ||
				tiles[dude.r][dude.c].imgNum == 13 ||
				tiles[dude.r][dude.c].imgNum == 14) {
				dude.lookUp();
			} else {
				dude.moveUp();
			}
			//keeps from going off screen
			if (dude.r < 0) {
				dude.TeleportUp();
			}
			//keeps from moving onto a tile in certain directions
			if (tiles[dude.r][dude.c].imgNum == 2 ||
				tiles[dude.r][dude.c].imgNum == 3 ||
				tiles[dude.r][dude.c].imgNum == 1 ||
				tiles[dude.r][dude.c].imgNum == 4 ||
				tiles[dude.r][dude.c].imgNum == 5 ||
				tiles[dude.r][dude.c].imgNum == 19 ||
				tiles[dude.r][dude.c].imgNum == 18) {
				dude.TeleportUp();
			}
			if (tiles[dude.r][dude.c].imgNum == 6 ||
				tiles[dude.r][dude.c].imgNum == 7 ||
				tiles[dude.r][dude.c].imgNum == 8) {
				dude.TeleportRight();
			}
			//starts battle
			if (tiles[dude.r][dude.c].imgNum == 10) {
				lifePoints = 5;
				battling = true;
			}
			//press to love down
		} else if (keyCode === DOWN_ARROW) {
			//cant move off of certain tiles in some directions
			if (tiles[dude.r][dude.c].imgNum == 6 ||
				tiles[dude.r][dude.c].imgNum == 7 ||
				tiles[dude.r][dude.c].imgNum == 8) {
				dude.lookDown();
			} else {
				dude.moveDown();
			}
			//keeps from going off screen
			if (dude.r >= rows) {
				dude.TeleportDown();
			}
			//keeps from moving onto a tile in certain directions
			if (tiles[dude.r][dude.c].imgNum == 2 ||
				tiles[dude.r][dude.c].imgNum == 3 ||
				tiles[dude.r][dude.c].imgNum == 1 ||
				tiles[dude.r][dude.c].imgNum == 4 ||
				tiles[dude.r][dude.c].imgNum == 5 ||
				tiles[dude.r][dude.c].imgNum == 19 ||
				tiles[dude.r][dude.c].imgNum == 18) {
				dude.TeleportDown();
			}
			if (tiles[dude.r][dude.c].imgNum == 12 ||
				tiles[dude.r][dude.c].imgNum == 13 ||
				tiles[dude.r][dude.c].imgNum == 14) {
				dude.TeleportDown();
			}
			//starts battle
			if (tiles[dude.r][dude.c].imgNum == 10) {
				lifePoints = 5;
				battling = true;
			}
		}
	}
}
