export default class Controller {
  constructor (model) {
    this._model = model
    this._view = null
  }

  set view (view) {
    this._view = view
  }

  dt () {
    return 2
  }
}
