export default class Controller {
  constructor (model) {
    this.model = model
    this.view = null
  }

  set view (view) {
    this.view = view
  }
}
