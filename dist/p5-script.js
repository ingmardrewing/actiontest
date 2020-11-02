let canvasWidth = 400, canvasHeight = 400, shape;

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  shape = new Shape();
}

function draw() {
  background(220);
  shape.draw(mouseX, mouseY)
}


function mouseClicked() {
  if(mouseX > canvasWidth / 2) {
    // change shape
    shape.changeShape()
  }
  else {
    // change color
    shape.changeColor()
  }
}

class Shape{
  constructor () {
    this.shapes = [
      new Rectangle(70, 70) ,
      new Ellipse(50, 100)
    ]
    this.shapeIndex = 0
  }
  
  
  draw(x,y){
      fill(this.r, this.g, this.b)
      this.shapes[this.shapeIndex].draw(x, y)
  }
  
  changeShape(){
    this.shapeIndex = this.shapeIndex == this.shapes.length - 1 ?  0 
                    : this.shapeIndex + 1;
  }
  
  changeColor() {
    this.r = Math.floor(255 * Math.random())
    this.g = Math.floor(255 * Math.random())
    this.b = Math.floor(255 * Math.random())
  }

} 


class Rectangle {
  constructor(w, h) {
    this.w = w
    this.h = h
  }
  
  draw(x, y) {
    rect(x - 50, y - 50, 100, 100)
  }
}

class Ellipse {
  constructor (h, w) {
    this.h = h
    this.w = w
  }
  
  draw(x, y) {
    ellipse(x - this.w/2, y - this.h/2, this.w, this.h)
  }
}
