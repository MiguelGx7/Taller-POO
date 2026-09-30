// Ejercicio 2: Clase Rectangle con área y perímetro
// Conceptos: clase, métodos que usan las propiedades del objeto

class Rectangle {
  constructor(width, height) {
    this.width = width;   // ancho
    this.height = height; // alto
  }

  // Área = ancho * alto
  calculateArea() {
    return this.width * this.height;
  }

  // Perímetro = 2 * (ancho + alto)
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

const rectangle = new Rectangle(5, 3);
console.log(`Ancho: ${rectangle.width}, Alto: ${rectangle.height}`);
console.log(`Área: ${rectangle.calculateArea()}`);
console.log(`Perímetro: ${rectangle.calculatePerimeter()}`);
