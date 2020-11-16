//import Visualizer from './visualizer'
class DataPoint {
  constructor(date, cases, visualizer) {
    this._date = date
    this._cases = cases
    this._maxCases = 10
    this._maxHeight = 80
    this._visualizer = visualizer
    this.sketch = visualizer.sketch
  }

  get cases() {
    return this._cases
  }

  get date() {
    return this._date
  }

  get height() {
    return Math.floor((this._cases / this._visualizer.maxCases) * this._maxHeight)
  }

  draw() {
    this.sketch.push()
    this.sketch.translate(0, this.height / 2, 0)
    this.sketch.rotateY(20);
    this.sketch.box(10, this.height, 10);
    this.sketch.pop()
    
    /*
    push()
    translate(-5, 0, 0)
    text('p5.js', 0, 0);
    pop()
    */
  }
}

class Visualizer {
  constructor(dataPoints, amount, sketch) {
    this.maxCases = 0;
    this.sketch = sketch;
    
    const padZeroes = (numberAsString) => {
     return numberAsString.length === 1 ? "0" + numberAsString : numberAsString
    }
    
    this.data = dataPoints.slice(-amount).map((d) => {
      const fields = d.split(",")
      const cases = parseInt(fields[4])
      this.maxCases = cases > this.maxCases ? cases : this.maxCases
      const dateAsString = `${fields[3]}-${padZeroes(fields[2])}-${padZeroes(fields[1])}`
      return new DataPoint(dateAsString, cases, this)
    })
  }

  draw() {
    this.sketch.background(220);
    this.sketch.normalMaterial();
    this.sketch.stroke(255)
    this.sketch.strokeWeight(0)
    this.sketch.rotateX(-50)
    
    this.sketch.translate(-90, 0, 0)
    this.data.forEach(d => {
      d.draw()
      this.sketch.translate(20, 0, 0)
    })
  }
}


export default function sketch(s) {

  // Data Source: https://data.europa.eu/euodp/de/data/dataset/covid-19-coronavirus-data
  // dateRep, day, month, year, cases, deaths, countriesAndTerritories, geoId,countryterritoryCode,
  // popData2019, continentExp, Cumulative_number_for_14_days_of_COVID-19_cases_per_100000

const data = [
  "14/11/2020,14,11,2020,22461,178,Germany,DE,DEU,83019213,Europe,306.92051971",
  "13/11/2020,13,11,2020,23542,218,Germany,DE,DEU,83019213,Europe,302.82267311",
  "12/11/2020,12,11,2020,21866,215,Germany,DE,DEU,83019213,Europe,296.96740199",
  "11/11/2020,11,11,2020,18487,261,Germany,DE,DEU,83019213,Europe,290.83388203",
  "10/11/2020,10,11,2020,15332,154,Germany,DE,DEU,83019213,Europe,286.59028603",
  "09/11/2020,9,11,2020,13363,63,Germany,DE,DEU,83019213,Europe,281.86487386",
  "08/11/2020,8,11,2020,16017,63,Germany,DE,DEU,83019213,Europe,276.23003364",
  "07/11/2020,7,11,2020,23399,130,Germany,DE,DEU,83019213,Europe,270.39885334",
  "06/11/2020,6,11,2020,21506,166,Germany,DE,DEU,83019213,Europe,259.93741955",
  "05/11/2020,5,11,2020,19990,118,Germany,DE,DEU,83019213,Europe,247.57401639",
  "04/11/2020,4,11,2020,17214,151,Germany,DE,DEU,83019213,Europe,237.09090087",
  "03/11/2020,3,11,2020,15352,131,Germany,DE,DEU,83019213,Europe,225.50442631",
  "02/11/2020,2,11,2020,12097,49,Germany,DE,DEU,83019213,Europe,215.28510515",
  "01/11/2020,1,11,2020,14177,29,Germany,DE,DEU,83019213,Europe,205.92341679",
  "31/10/2020,31,10,2020,19059,103,Germany,DE,DEU,83019213,Europe,195.57641434",
  "30/10/2020,30,10,2020,18681,77,Germany,DE,DEU,83019213,Europe,182.05062965",
  "29/10/2020,29,10,2020,16774,89,Germany,DE,DEU,83019213,Europe,168.38270919",
  "28/10/2020,28,10,2020,14964,85,Germany,DE,DEU,83019213,Europe,156.17348721",
  "27/10/2020,27,10,2020,11409,42,Germany,DE,DEU,83019213,Europe,144.33044553",
  "26/10/2020,26,10,2020,8685,24,Germany,DE,DEU,83019213,Europe,135.55295929",
  "25/10/2020,25,10,2020,11176,29,Germany,DE,DEU,83019213,Europe,128.06312678",
  "24/10/2020,24,10,2020,14714,49,Germany,DE,DEU,83019213,Europe,118.79659712",
  "23/10/2020,23,10,2020,11242,49,Germany,DE,DEU,83019213,Europe,106.75962443",
  "22/10/2020,22,10,2020,11287,30,Germany,DE,DEU,83019213,Europe,98.65788537",
  "21/10/2020,21,10,2020,7595,39,Germany,DE,DEU,83019213,Europe,89.95026248",
  "20/10/2020,20,10,2020,6868,47,Germany,DE,DEU,83019213,Europe,84.20821816",
  "19/10/2020,19,10,2020,4325,12,Germany,DE,DEU,83019213,Europe,79.11421661",
  "18/10/2020,18,10,2020,5587,10,Germany,DE,DEU,83019213,Europe,75.56925407",
  "17/10/2020,17,10,2020,7830,33,Germany,DE,DEU,83019213,Europe,71.58463427",
  "16/10/2020,16,10,2020,7334,24,Germany,DE,DEU,83019213,Europe,65.24031973",
  "15/10/2020,15,10,2020,6638,33,Germany,DE,DEU,83019213,Europe,59.6259567",
  "14/10/2020,14,10,2020,5132,43,Germany,DE,DEU,83019213,Europe,54.64518195",
  "13/10/2020,13,10,2020,4122,13,Germany,DE,DEU,83019213,Europe,50.6292441",
  "12/10/2020,12,10,2020,2467,6,Germany,DE,DEU,83019213,Europe,48.18041337",
  "11/10/2020,11,10,2020,3483,11,Germany,DE,DEU,83019213,Europe,46.6446243",
  "10/10/2020,10,10,2020,4721,15,Germany,DE,DEU,83019213,Europe,44.14761195",
  "09/10/2020,9,10,2020,4516,11,Germany,DE,DEU,83019213,Europe,41.4807594",
  "08/10/2020,8,10,2020,4058,16,Germany,DE,DEU,83019213,Europe,38.63443032",
  "07/10/2020,7,10,2020,2828,16,Germany,DE,DEU,83019213,Europe,36.32773536",
  "06/10/2020,6,10,2020,2639,12,Germany,DE,DEU,83019213,Europe,35.05212703",
  "05/10/2020,5,10,2020,1382,5,Germany,DE,DEU,83019213,Europe,34.06681294",
  "04/10/2020,4,10,2020,2279,2,Germany,DE,DEU,83019213,Europe,33.51272434",
  "03/10/2020,3,10,2020,2563,19,Germany,DE,DEU,83019213,Europe,32.38768356",
  "02/10/2020,2,10,2020,2673,8,Germany,DE,DEU,83019213,Europe,32.0672758",
  "01/10/2020,1,10,2020,2503,12,Germany,DE,DEU,83019213,Europe,31.15543868"
  ];
  
  let visualizer, fnt;
  const width = 500;
  const height = 500;
  
  s.preload = () => {
    fnt = s.loadFont("assets/open-sans-v15-latin-ext_latin-300.ttf")
  }

  s.setup = () => {
    s.createCanvas(width, height, s.WEBGL);
    s.ortho(-width / 2, width / 2, height / 2, -height / 2, 0, 500);
    s.textFont(fnt)
    
    visualizer = new Visualizer(data, 10, s)
  };

  s.draw = () => {
    visualizer.draw()
  };
}
