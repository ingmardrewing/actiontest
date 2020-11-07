class MinifyMe {
  constructor(miniMe) {
    this.name = miniMe;
  }
  
  greet() {
    alert(`Hello, I am ${this.name}!!`);
  }
}

let a = new MinifyMe("one");
let b = new MinifyMe("two");

a.greet();
b.greet();
