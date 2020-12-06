export default class Model {
  constructor () {
    this._data
    this._dataByWeek
    this._maxCases
  }

  set data (data) {
    this._data = data
  }

  get data () {
    return this._data
  }

  set dataByWeek(dataByWeek) {
    this._dataByWeek = dataByWeek
  }

  get dataByWeek() {
    return this._dataByWeek
  }

  set maxCases(maxCases) {
    this._maxCases = maxCases
  }

  get maxCases() {
    return this._maxCases
  }
}
