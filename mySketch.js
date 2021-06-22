function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
	frameRate(20);
	textSize(50);
	text("Xiaonan Li",0,windowHeight);
	textAlign(RIGHT,TOP);
}

function draw() {
	fill(255,120,0);//fill the rectangle
	stroke(200,15,30);
	strokeWeight(10);
	rect(400,300,300,300);
	fill(random(int(256)),random(int(256)),random(int(256)));//fill the circle
	stroke(230,195,30);
	strokeWeight(3);
	ellipse(mouseX, mouseY, 20, 20);
	if(mouseIsPressed) {
		background(random(int(256)),random(int(256)),random(int(256)));
	}
}
