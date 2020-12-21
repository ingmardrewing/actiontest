export default class Week {
  constructor(weekOfYear) {
    this._weekOfYear = weekOfYear
    this._days = []
  }

  get weekOfYear() {
    return this._weekOfYear
  }

  get days() {
    return this._days
  }

  addDay(dataPoint) {
    this._days.push(dataPoint)
  }
}
