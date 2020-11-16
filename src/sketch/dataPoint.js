export default class DataPoint {
  constructor(date, cases, width, maxHeight, visualizer) {
    this._maxCases = 10
    this._date = date
    this._cases = cases
    this._maxHeight = maxHeight
    this._width = width
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
	    this.sketch.rotateY(this.sketch.frameCount * 0.01);
	    this.sketch.box(this._width, this.height, this._width);
    this.sketch.pop()
  }
}
