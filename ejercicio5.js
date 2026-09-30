// Ejercicio 5: Shape, Circle y Triangle
// Conceptos: herencia y polimorfismo (cada figura calcula su área distinto)

class Shape {
  // Método genérico; las subclases deben sobrescribirlo
  calculateArea() {
    return 0;
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }

  // Área del círculo = π * r²
  calculateArea() {
    return Math.PI * this.radius ** 2;
  }
}

class Triangle extends Shape {
  constructor(base, height) {
    super();
    this.base = base;
    this.height = height;
  }

  // Área del triángulo = (base * altura) / 2
  calculateArea() {
    return (this.base * this.height) / 2;
  }
}

const circle = new Circle(5);
const triangle = new Triangle(4, 6);

console.log(`Área del círculo: ${circle.calculateArea().toFixed(2)}`);
console.log(`Área del triángulo: ${triangle.calculateArea()}`);
