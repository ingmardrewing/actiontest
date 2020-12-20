import Blobb from './blobb'
import Util from './util'

export default function sketch(s) {
  const width = 500
  const height = 500

  let hiddenCanvas, opaqueTexture, stillMask, texture, blobb

  s.preload = () => {
    opaqueTexture = s.loadImage('assets/posterPrizeForIllustration-w390.png')
  }

  s.setup = () => {

    s.createCanvas(width, height, s.WEBGL)
    s.noStroke()
    s.angleMode(s.DEGREES)

    blobb = new Blobb(s)
    blobb.image = opaqueTexture
  }

  s.draw = () => {

    s.background(204, 204, 204, 255)
    s.fill(0,0)
    s.rotateY(s.frameCount)

    const currentTexture = Util.copyImage(opaqueTexture, s)
    const mask = blobb.render()
    currentTexture.mask(mask)

    s.push()
    s.texture(mask)
    s.plane(350)
    s.pop()
  }
}
