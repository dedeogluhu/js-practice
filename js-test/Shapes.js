class Shape {
  constructor(name, sides, sideLength) {
    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength;
  }

  calc() {
    console.log(`Length of ${this.name} is ${this.sides * this.sideLength}`);
  }
}

class Triangle extends Shape {
  constructor(sideLength) {
    super("triangle", 3, sideLength);
  }
}

let shape1 = new Triangle(5);
shape1.calc();
