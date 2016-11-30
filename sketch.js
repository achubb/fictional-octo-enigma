// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var person;

// var obs1;
// var obs2;
// var obs3;

//var obstacles = [];

var score = []

function setup() {
	createCanvas(640, 360);
	person = new Person();
	level = new Level();
	// obs1 = obstacles.push(new Obstacle());
	// obs2 = obstacles.push(new Obstacle());
	// obs3 = obstacles.push(new Obstacle());
	// console.log(obstacles);

	// for (i = 0; i < level.obstacles.length; i++) {
	// 	score.push("hello" + i);
	// }

	console.log(score);
}

function keyPressed() {
	if (key == ' ') {
		var jump = createVector(0, -10);
		person.applyForce(jump);
	}
}


function draw() {
	background(51);

  	var gravity = createVector(0, 0.5);
	person.applyForce(gravity);

	for (var i = level.obstacles.length-1; i >= 0; i--) {
  		level.obstacles[i].show();
  		level.obstacles[i].update();

  		if (level.obstacles[i].hits(person)) {
  			//console.log("HIT");
  		}

  		if (level.obstacles[i].passed(person)) {
  			console.log("passed!");
  			score.push("hello" + i);
  			console.log(score);
  		}

  		if (level.obstacles[i].offscreen()) {
  			level.obstacles.splice(i, 1);
  		}
	}

	person.update();
	person.edges();
	person.display();

	// if (frameCount % 100 == 0) {
	// 	obstacles.push(new Obstacle());
	// }

  // console.log(frameCount);
  //fill(255, 0, 100);
  //rect(400, height-50, 50, 50);
}
