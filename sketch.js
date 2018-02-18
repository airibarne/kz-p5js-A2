// Falta un for, una shape function, un color con alpha (fill())
function setup() {
	/* Make the jitter stoppable pressing spacebar */
	/* Here we use jQuery so we need to src it in the html*/
	jit = 1; // Jitter when we first see the page
	$(window).keypress(function (e) {
		if (e.keyCode === 0 || e.keyCode === 32) {
			e.preventDefault()
    		if(jit == 0) jit = 1;
    		else jit = 0;
		}
	})
	createCanvas(windowWidth, windowHeight);
	/*ang=0;*/
}

function draw() {
	background(255);
	/* Centre the pattern at the middle of the screen */
	startX = windowWidth/2;
	startY = windowHeight/2;
	/* Set the size of the pattern and the step between circles */
	var maxRadius = 300;
	var step = 25;
	/*ang+=.01
	if(ang>2*PI) ang=0;*/
	k = 0;
	size = 15;
	var caca = [];
	for(radius = step; radius <= maxRadius; radius+=step) {
		k += 1;
		size -= 1;
		for (angle = 0; angle < 2*PI; angle += PI/(3*k)) {
			ellipseX = startX + radius*Math.cos(angle)
			ellipseY = startY + radius*Math.sin(angle)
			caca.push([ellipseX,ellipseY]);
			fill(0);
			noStroke();
			bug = new Jitter(ellipseX, ellipseY, size, jit);
			if(jit!=0){
				bug.move();
			}
			bug.display();
		}	
	}
	/* Need another shape function, another for and the use of alpha */
	/* lmao */
	stroke(0,150);
	if(jit!=0)
		for(i = 0; i<50; i++) {
			indexA = Math.floor(Math.random(1)*caca.length)
			indexB = Math.floor(Math.random(1)*caca.length)
			line(caca[indexA][0],caca[indexA][1],caca[indexB][0],caca[indexB][1])
		}
}

// Jitter class
function Jitter(width, height, diameter, jit) {
  this.x = width;
  this.y = height;
  this.diameter = diameter;
  this.speed = 1;

  this.move = function() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed);
  };

  this.display = function() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
};