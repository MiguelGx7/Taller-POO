// Ejercicio 6: Employee y Manager
// Conceptos: herencia, sobrescritura y uso de super.método()

class Employee {
  constructor(name, salary) {
    this.name = name;     // nombre
    this.salary = salary; // salario mensual
  }

  // Salario anual = salario mensual * 12
  calculateAnnualSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department, bonus) {
    super(name, salary);
    this.department = department; // departamento que dirige
    this.bonus = bonus;           // bono anual del gerente
  }

  // Reutiliza el cálculo del padre y le suma el bono
  calculateAnnualSalary() {
    return super.calculateAnnualSalary() + this.bonus;
  }
}

const manager1 = new Manager("Carlos", 5000, "Ventas", 10000);
const manager2 = new Manager("Ana", 6000, "Tecnología", 15000);

console.log(`${manager1.name} (${manager1.department}): $${manager1.calculateAnnualSalary()}`);
console.log(`${manager2.name} (${manager2.department}): $${manager2.calculateAnnualSalary()}`);
