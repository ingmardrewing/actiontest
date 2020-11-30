import Visualizer from './visualizer'

export default class View {
  constructor(model,controller,sketch, data){
    this._model = model
    this._controller = controller
    this._sketch = sketch
    this._data = data
  }


  init() {
    const width = 500;
    const height = 500;

    this._sketch.createCanvas(width, height, this._sketch.WEBGL);
    this._sketch.ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
    
    let dataWidth = 20
    let gap = 30
    let amountOfPoints = 15
    let maxHeight = 200
    let visualizer = new Visualizer(this._data, amountOfPoints, dataWidth,  maxHeight, gap,  this._sketch)

    this._sketch.draw = () => {
      visualizer.draw()
    }
  }
}
