export default class Measurement {
  constructor(date, cases, weekOfYear) {
    this._date = date
    this._cases = cases
    this._weekOfYear = weekOfYear

    this._days = ["S","M","D","M","D","F","S"];
  }

  get cases() {
    return this._cases
  }

  get date() {
    return this._date
  }

  get dayOfWeek() {
    return this._days[this._date.getDay()]
  }

  get weekOfYear() {
    return this._weekOfYear
  }
}
