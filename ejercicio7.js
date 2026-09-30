// Ejercicio 7: Book y Ebook
// Conceptos: herencia y sobrescritura del método de mostrar

class Book {
  constructor(title, author, year) {
    this.title = title;   // título
    this.author = author; // autor
    this.year = year;     // año de publicación
  }

  displayDetails() {
    console.log(`Título: ${this.title}, Autor: ${this.author}, Año: ${this.year}`);
  }
}

class Ebook extends Book {
  constructor(title, author, year, price) {
    super(title, author, year);
    this.price = price; // precio del libro digital
  }

  // Sobrescribe para incluir el precio
  displayDetails() {
    console.log(`Título: ${this.title}, Autor: ${this.author}, Año: ${this.year}, Precio: $${this.price}`);
  }
}

const ebook = new Ebook("Cien años de soledad", "Gabriel García Márquez", 1967, 15.99);
ebook.displayDetails();
