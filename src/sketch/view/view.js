export default class View {
  constructor(model,controller,sketch){
    this.model = model
    this.controller = controller
    this.sketch = sketch
  }

  init() {
    const width = 500;
    const height = 500;

    sketch.createCanvas(width, height, sketch.WEBGL);
    sketch.ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
    
    let dataWidth = 20
    let gap = 30
    let amountOfPoints = 15
    let maxHeight = 200
    let visualizer = new Visualizer(data, amountOfPoints, dataWidth,  maxHeight, gap,  sketch)

    this.sketch.draw = () => {
      visualizer.draw()
    }
  }
}
