import DataPoint from './dataPoint.js'

export default class Visualizer {
  constructor(dataPoints, amount, dataWidth, maxHeight, gap, sketch) {
    this.maxCases = 0;
    this.sketch = sketch;
    this.dataWidth = dataWidth
    this.maxHeight = maxHeight 
    this.gap = gap
    this.amount = amount
    
    this.data = createDataPoints(dataPoints)
    this.maxCases = findMaxCases()
  }
  
  createDataPoints (dataPoints) {
    return dataPoints.slice(-this.amount).map((d) => {
      const fields = d.split(",")
      const cases = parseInt(fields[4])
      const dateAsString = this.formatDate(fields)
      return new DataPoint(dateAsString, cases, this.dataWidth, this.maxHeight, this)
    })
  }
  
  findMaxCases () {
    let tempMaxCases = 0
    this.data.forEach((d) => {
        tempMaxCases = d.cases > tempMaxCases ? d.cases : tempMaxCases
    }
    return tempMaxCases
  }
  
  formatDate (fields) {
    const dayOfMonth = this.padZeroes(fields[1])
    const month = this.padZeroes(fields[2])
    const year = fields[3]
    return year + "-" + month + "-" + dayOfMonth
  }
  
  padZeroes = (numberAsString) => {
     return numberAsString.length === 1 ? "0" + numberAsString : numberAsString
  }

  draw() {
    this.sketch.background(220);
    

    this.sketch.normalMaterial();
    this.sketch.stroke(255)
    this.sketch.strokeWeight(0)

    this.sketch.translate(0, -this.maxHeight/2, 0)

    this.sketch.rotateX(-50)
    this.sketch.translate(-(this.gap * this.amount - this.gap)/2, 0, 0)

    this.data.forEach(d => {
      d.draw()
      this.sketch.translate(this.gap, 0, 0)
    })
  }
}
