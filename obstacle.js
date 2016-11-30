function Obstacle(distance) {
	// Random amount between bottom and middle of screen
	this.bottom = random(height/2);

	// Obstacles start from the edge of the screen
	//this.x = width + random(50, 100);
	this.x = width + distance;

	// Obstatcle width
	this.w = 20;

	// Obstacle speed
	this.speed = 2.5;

	this.highlight = false;

	this.hits = function(person) {
		if (person.pos.y > height - this.bottom) {
			if (person.pos.x > this.x && person.pos.x < this.x + this.w) {
				this.highlight = true;
				return true;
			}
		}
		return false;
	}

	this.passed = function(person) {
		if ((this.x + this.w) < person.pos.x) {
			return true		
		}
	}

	this.show = function() {
		fill(255, 150);
		if (this.highlight) {
			fill(255, 0, 0);
		}
		noStroke();
		rect(this.x, height-this.bottom, this.w, this.bottom);
	}

	this.update = function() {
		this.x -= this.speed;
	}

	this.offscreen = function() {
		if (this.x < -this.w) {
			return true;
		} else {
			return false;
		}
	}
}