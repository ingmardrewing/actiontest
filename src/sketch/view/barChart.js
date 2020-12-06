export default class BarChart {
  constructor(data,sketch, maxCases, maxHeight, x, y) {
    this._data = data
    this._sketch = sketch
    this._maxCases = maxCases
    this._maxHeight = maxHeight

    this._width = 10
    this._gap = 2

    this._x = x
    this._y = y
  }

  draw() {
    const s = this._sketch

    this._data.forEach((d) => {

      const height = (d.cases / this._maxCases) * this._maxHeight
      const y = this._y + this._maxHeight - height
      s.rect(
        this._x,
        y,
        this._width,
        height
      )

      this._sketch.text(d.dayOfWeek,this._x, 115)

      this._x += this._width + this._gap
    })
  }
}
