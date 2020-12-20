export default class Util {
  static copyImage(img, s) {
    const copiedImage = s.createImage(img.width, img.height)
    copiedImage.copy(img,0,0,img.width,img.height,0,0,img.width,img.height)
    return copiedImage
  }
}
