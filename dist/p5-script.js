let canvasWidth = 400;
let canvasHeight = 400;
let shape;

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
      new Ellipse(50, 100),
      new Rectangle(70, 10) ,
      new Circle(70)
    ]
    this.shapeIndex = 0
  }
  
  
  draw(x,y){
      fill(this.r, this.g, this.b)
      const currentShape = this.shapes[this.shapeIndex]
      currentShape.draw(x, y)
  }
  
  changeShape(){
    if (this.shapeIndex == this.shapes.length - 1) {
      this.shapeIndex = 0
    } 
    else {
      this.shapeIndex++      
    }
    
    // Ternäre Variante:
    // this.shapeIndex = <boolscher Ausdruck> ? <ist wahr> : <ist falsch>
  }
  
  changeColor() {
    // Math.random() -> liefert Fließkommazahl zwischen 0 und 1
    // Math.floor() -> entfernt den Nachkommateil
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
    rect(x - this.w/2, y - this.h/2, this.w, this.h)
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


class Circle extends Ellipse {
  constructor(d) {
    super(d, d)
  }
}
