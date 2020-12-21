import Week from '../model/week'
import DataPoint from '../model/dataPoint'

export default class CsvReader {
  constructor(
      csvData = [],
      amountOfMeasurementsToInclude = 0
  ) {
    this._csvData = csvData
    this._amountOfMeasurementsToInclude = amountOfMeasurementsToInclude

    this._data = this.createDataPointsFromCSV()
    this._dataByWeek = this.createDataByWeek()
    this._maxCases = this.findMaxCases()
  }

  get data() {
    return this._data
  }

  get dataByWeek() {
    return this._dataByWeek
  }

  get maxCases() {
    return this._maxCases
  }

  createDataByWeek () {
    const weeks = []
    let currentWeek = undefined
    this._data.forEach( (l) => {
      if(!currentWeek) {
        currentWeek = new Week(l.weekOfYear)
      }
      if (currentWeek.weekOfYear !== l.weekOfYear) {
        weeks.push(currentWeek)
        currentWeek = new Week(l.weekOfYear)
      }
      currentWeek.addDay(l)
    })

    return weeks
  }

  createDataPointsFromCSV () {
    return this._csvData
      .slice(-this._amountOfMeasurementsToInclude)
      .reverse()
      .map( (l) => {
        const fields = l.split(",")
        const cases = parseInt(fields[4])
        const date = this.createDate(fields)
        const weekOfYear = this.ISO8601_week_no(date)

        return new DataPoint(
          date,
          cases,
          weekOfYear)
    })
  }

  findMaxCases () {
    let tempMaxCases = 0
    this.data.forEach((d) => {
      tempMaxCases = d.cases > tempMaxCases ? d.cases
                   :                          tempMaxCases
    })
    return tempMaxCases
  }

  createDate (fields) {
    const day = parseInt(fields[1])
    const month = parseInt(fields[2])
    const year = parseInt(fields[3])
    return new Date(year, month - 1, day, 0,0,0,0)
  }

  ISO8601_week_no(dt) {
    var tdt = new Date(dt.valueOf());
    var dayn = (dt.getDay() + 6) % 7;
    tdt.setDate(tdt.getDate() - dayn + 3);
    var firstThursday = tdt.valueOf();
    tdt.setMonth(0, 1);
    if (tdt.getDay() !== 4) {
      tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
    }
    return 1 + Math.ceil((firstThursday - tdt) / 604800000);
  }
}
