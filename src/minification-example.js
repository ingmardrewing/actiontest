class MinifyMe {
  constructor(miniMe) {
    this.name = miniMe;
  }
  
  greet() {
    alert(`Hello, I am ${this.name}!!`);
  }
}

let mm = new Minify("minfied");
mm.greet();
mm.greet();