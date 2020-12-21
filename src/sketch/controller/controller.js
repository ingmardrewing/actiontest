import CsvReader from './csvReader'

export default class Controller {
  constructor (model) {
    this._model = model
    this._view = null
  }

  init(csvData, amountOfDaysToInclude) {
    const r = new CsvReader(csvData,amountOfDaysToInclude)
    this._model.data = r.data
    this._model.dataByWeek = r.dataByWeek
    this._model.maxCases = r.maxCases
  }

  set view (view) {
    this._view = view
  }
}
