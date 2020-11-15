export class DataPoint {
  constructor(date, cases, visualizer) {
    this._date = date
    this._cases = cases
    this._maxCases = 10
    this._maxHeight = 80
    this._visualizer = visualizer
    this.sketch = visualizer.sketch
  }

  get cases() {
    return this._cases
  }

  get date() {
    return this._date
  }

  get height() {
    return Math.floor((this._cases / this._visualizer.maxCases) * this._maxHeight)
  }

  draw() {
    this.sketch.push()
    this.sketch.translate(0, this.height / 2, 0)
    this.sketch.rotateY(20);
    this.sketch.box(10, this.height, 10);
    this.sketch.pop()
    
    /*
    push()
    translate(-5, 0, 0)
    text('p5.js', 0, 0);
    pop()
    */
  }
}