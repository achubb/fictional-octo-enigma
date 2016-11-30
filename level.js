function Level() {	

	this.obstacles = []

	this.obs1;
	this.obs2;
	this.obs3;
	this.obs4;

	this.obs1 = this.obstacles.push(new Obstacle(100));
	this.obs2 = this.obstacles.push(new Obstacle(300));
	this.obs3 = this.obstacles.push(new Obstacle(600));
	this.obs4 = this.obstacles.push(new Obstacle(1000));

}
