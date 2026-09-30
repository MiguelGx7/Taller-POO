// Ejercicio 10: Product y PersonalCareProduct
// Conceptos: herencia y sobrescritura del cálculo del total

class Product {
  constructor(id, name, price) {
    this.id = id;       // identificador
    this.name = name;   // nombre
    this.price = price; // precio por unidad
  }

  // Total = precio * cantidad
  calculateTotalPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(id, name, price, warrantyPeriod) {
    super(id, name, price);
    this.warrantyPeriod = warrantyPeriod; // garantía en meses
  }

  // Se suma un costo extra de garantía: 1% del total por cada mes
  calculateTotalPrice(quantity) {
    const baseTotal = super.calculateTotalPrice(quantity);
    const warrantyCost = baseTotal * 0.01 * this.warrantyPeriod;
    return baseTotal + warrantyCost;
  }
}

const shampoo = new PersonalCareProduct(1, "Shampoo", 20, 12);
console.log(`Producto: ${shampoo.name}, garantía: ${shampoo.warrantyPeriod} meses`);
console.log(`Total por 3 unidades: $${shampoo.calculateTotalPrice(3).toFixed(2)}`);
