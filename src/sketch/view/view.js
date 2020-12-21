import BarChart from './barchart'

export default class View {
  constructor(model,controller,sketch){
    this._model = model
    this._controller = controller
    this._sketch = sketch
  }

  init() {
    const height = 500;
    const width = 1000;

    const yGap = 10
    const xGap = 20
    const maxHeight = 80
    let currentY = 20
    let currentX = 20
    let openSans
    const view = this

    this._sketch.preload = () => {
      openSans = this._sketch.loadFont('assets/open-sans-v15-latin-ext_latin-300.ttf')
    }

    this._sketch.setup = () => {
      this._sketch.createCanvas(width, height);
      this._sketch.background(204)
      this._sketch.strokeWeight(0)

      this._sketch.textFont(openSans)
      this._sketch.textSize(10)

      this._model.dataByWeek.forEach((w) => {
        //console.log(w)
        const b = new BarChart(
          w.days,
          this._sketch,
          this._model.maxCases,
          maxHeight,
          currentX,
          currentY
        )
        b.draw()

        // currentY += maxHeight + yGap
        currentX = b._x + xGap
      })
    }
  }
}
