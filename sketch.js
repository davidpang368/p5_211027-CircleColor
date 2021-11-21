function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100);
}

function draw() {
	background(0)
	let r =100
	for(var i=0;i<50;i++){
		//print(i)
		noFill()
		strokeWeight(5)
		stroke(map(i,0,10,0,255),0,255)
		ellipse(width/2,height/2,500-i*map(mouseX,0,width,0,20))
	}
	
	// ellipse(mouseX-200, mouseY, r, r);
	// ellipse(mouseX-100, mouseY, r, r);
	// ellipse(mouseX, mouseY, r, r);
	// ellipse(mouseX+100, mouseY, r, r);
	// ellipse(mouseX+200, mouseY, r, r);
}