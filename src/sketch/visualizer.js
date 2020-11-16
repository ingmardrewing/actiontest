class Visualizer {
  constructor(dataPoints, amount, sketch) {
    this.maxCases = 0;
    this.sketch = sketch;
    
    const padZeroes = (numberAsString) => {
     return numberAsString.length === 1 ? "0" + numberAsString : numberAsString
    }
    
    this.data = dataPoints.slice(-amount).map((d) => {
      const fields = d.split(",")
      const cases = parseInt(fields[4])
      this.maxCases = cases > this.maxCases ? cases : this.maxCases
      const dateAsString = `${fields[3]}-${padZeroes(fields[2])}-${padZeroes(fields[1])}`
      return new DataPoint(dateAsString, cases, this)
    })
  }

  draw() {
    this.sketch.background(220);
    this.sketch.normalMaterial();
    this.sketch.stroke(255)
    this.sketch.strokeWeight(0)
    this.sketch.rotateX(-50)
    
    this.sketch.translate(-90, 0, 0)
    this.data.forEach(d => {
      d.draw()
      this.sketch.translate(20, 0, 0)
    })
  }
}