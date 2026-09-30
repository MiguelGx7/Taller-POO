// Ejercicio 8: Animal y Dog
// Conceptos: herencia y sobrescritura del método makeSound

class Animal {
  constructor(species, sound) {
    this.species = species; // especie
    this.sound = sound;     // sonido que hace
  }

  makeSound() {
    console.log(`El ${this.species} hace: ${this.sound}`);
  }
}

class Dog extends Animal {
  constructor(color) {
    super("perro", "guau"); // especie y sonido ya definidos para Dog
    this.color = color;
  }

  // Sobrescribe para incluir el color
  makeSound() {
    console.log(`El ${this.species} de color ${this.color} hace: ${this.sound}`);
  }
}

const dog = new Dog("café");
dog.makeSound();
