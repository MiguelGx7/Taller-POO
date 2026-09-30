// Ejercicio 3: Vehicle y Car (herencia)
// Conceptos: herencia (extends), super, sobrescritura de métodos

class Vehicle {
  constructor(make, model, year) {
    this.make = make;   // marca
    this.model = model; // modelo
    this.year = year;   // año
  }

  displayDetails() {
    console.log(`Marca: ${this.make}, Modelo: ${this.model}, Año: ${this.year}`);
  }
}

// Car hereda de Vehicle y agrega el número de puertas
class Car extends Vehicle {
  constructor(make, model, year, doors) {
    super(make, model, year); // llama al constructor de Vehicle
    this.doors = doors;
  }

  // Sobrescribe el método del padre para incluir las puertas
  displayDetails() {
    console.log(`Marca: ${this.make}, Modelo: ${this.model}, Año: ${this.year}, Puertas: ${this.doors}`);
  }
}

const vehicle = new Vehicle("Yamaha", "FZ", 2022);
const car = new Car("Toyota", "Corolla", 2021, 4);

vehicle.displayDetails();
car.displayDetails();
