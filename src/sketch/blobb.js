export default class Blobb {
  constructor (sketch) {
    this._s = sketch;
    this.centerX = sketch.width / 2
    this.centerY = sketch.height / 2
  }

  set image(img) {
    this._image = img
  }

  render () {
    const hc = this._s.createGraphics(this._s.width,this._s.height)
    hc.background(255,0);
    hc.fill(255, 0, 0);
    hc.rotate(hc.frameCount/120)

    this.drawAmorphForm(hc)

    const img = this._s.createImage(this._s.width, this._s.height)
    img.copy(hc,0,0,this._s.width,this._s.height,0,0,this._s.width,this._s.height)
    return img
  }

  drawAmorphForm(s) {
    const numPoints = 20
    const radius = 200
    const noiseAmount = 100

    s.beginShape();
    for (let i = 0; i < numPoints ; i++) {
      let angle = (360 / numPoints) * i;
      let x = s.cos(angle) * radius + this.centerX;
      let y = s.sin(angle) * radius + this.centerY;
      const xnoise = (s.noise(this._s.frameCount * 0.02 + i) - 0.5) * noiseAmount;
      const ynoise = (s.noise(this._s.frameCount * 0.02 + i) - 0.5) * noiseAmount;
      s.curveVertex(x + xnoise, y + ynoise);
    }

    s.endShape(s.CLOSE);
  }
}
