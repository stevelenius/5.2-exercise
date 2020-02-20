// 5.2-exercise-classes.js
//
// Working with classes in Javascript
// 

// set up variable for rectangle starting position
let startingY = 100;
//initialize rectangles array
let rectangles = [];

function setup() {
	createCanvas (600, 600);
	// build array of three new rectangles from class template, spaced vertically
	for (let addToArray = 0; addToArray < 3; addToArray++) {
		rectangles.push(new Rectangle(startingY));
		startingY += 150;
	}
}

function draw() {
	background(0);
	// draw each of the three rectangles in the array and make them move
	for(let createRect = 0; createRect < rectangles.length; createRect++) {
		rectangles[createRect].show();
		rectangles[createRect].move();
	}
}

// define the Rectangle class template
class Rectangle {
	constructor (y) {
		this.x = 200
		// y needs to be variable so rectangles are spaced vertically
		this.y = startingY;
		this.width = 200;
		this.height = 100;
	}

	// adjust all values randomly
	move() {
		this.x = this.x + random(-2, 2);
		this.y = this.y + random(-2, 2);
		this.width = this.width + random(-3, 3);
		this.height = this.height + random(-3, 3);
	}

	// this is what actually puts the rectangles on the screen
	show() {
		stroke(255, 0, 0);
		strokeWeight(3);
		fill(255, 128, 0);
		rect(this.x, this.y, this.width, this.height);
	}
}