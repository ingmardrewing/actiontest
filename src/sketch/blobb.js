export default class Blobb {
  constructor (s) {
    this._s = s;
    this.height = s.height
    this.width = s.width
  }

  set image(img) {
    this._image = img
  }

  render () {
    const hc = this._s.createGraphics(this._s.width,this._s.height)
    hc.angleMode(hc.DEGREES)
    //hc.noStroke()
    hc.background(255,0);
    hc.fill(255, 0, 0);

    this.drawAmorphForm(hc, this._s.frameCount)

    const img = hc.createImage(hc.width, hc.height)
    img.copy(
      hc,
      0,0,hc.width,hc.height,
      0,0,hc.width,hc.height)
    return img
  }

  drawAmorphForm(s, frameCount) {
    const centerX = this.width / 2
    const centerY = this.height / 2
    const numPoints = 30
    const radius = 200
    const noiseAmount = 100

    let points = []

    for (let i = 0; i < numPoints ; i++) {
      let angle = (360 / numPoints) * i;
      const xnoise =  (s.noise(frameCount * 0.02 + i) - 0.5) * noiseAmount;
      const ynoise =  (s.noise(frameCount * 0.02 + i) - 0.5) * noiseAmount;
      const x = s.cos(angle) * radius + centerX + xnoise;
      const y = s.sin(angle) * radius + centerY + ynoise;
      points.push({x: x, y: y})
    }

    // https://github.com/processing/p5.js/issues/3352
    s.beginShape();
    points.forEach((p) => {
      s.curveVertex(p.x , p.y);
    })
    s.endShape();

    /*
    points.forEach((p) => {
      s.ellipse(p.x,p.y,10,10)
    })
    */
  }
}
