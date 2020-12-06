export default class Week {
  constructor(weekOfYear) {
    this._weekOfYear = weekOfYear
    this._measurements = []
  }

  get weekOfYear() {
    return this._weekOfYear
  }

  get measurements() {
    return this._measurements
  }

  addMeasurement(measurement) {
    this._measurements.push(measurement)
  }
}
