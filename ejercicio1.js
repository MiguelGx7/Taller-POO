// Ejercicio 1: Clase Person con detalles
// Conceptos: clase, constructor, método de instancia

class Person {
  constructor(name, age, country) {
    this.name = name;       // nombre de la persona
    this.age = age;         // edad
    this.country = country; // país
  }

  // Muestra los datos de la persona
  displayDetails() {
    console.log(`Nombre: ${this.name}, Edad: ${this.age}, País: ${this.country}`);
  }
}

// Dos instancias de Person
const person1 = new Person("Miguel", 20, "Colombia");
const person2 = new Person("Laura", 25, "México");

person1.displayDetails();
person2.displayDetails();
