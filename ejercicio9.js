// Ejercicio 9: Bank con sucursales
// Conceptos: clase que administra una colección (arreglo) de datos

class Bank {
  constructor(name) {
    this.name = name;   // nombre del banco
    this.branches = []; // lista de sucursales
  }

  // Agrega una sucursal si no existe ya
  addBranch(branch) {
    if (this.branches.includes(branch)) {
      console.log(`La sucursal "${branch}" ya existe.`);
      return;
    }
    this.branches.push(branch);
    console.log(`Sucursal "${branch}" agregada.`);
  }

  // Elimina una sucursal si existe
  removeBranch(branch) {
    const index = this.branches.indexOf(branch);
    if (index === -1) {
      console.log(`La sucursal "${branch}" no existe.`);
      return;
    }
    this.branches.splice(index, 1);
    console.log(`Sucursal "${branch}" eliminada.`);
  }

  // Muestra todas las sucursales
  displayBranches() {
    console.log(`Sucursales de ${this.name}:`);
    if (this.branches.length === 0) {
      console.log("  (sin sucursales)");
    } else {
      this.branches.forEach((b) => console.log(`  - ${b}`));
    }
  }
}

const bank = new Bank("Banco Nacional");
bank.addBranch("Popayán");
bank.addBranch("Cali");
bank.addBranch("Bogotá");
bank.displayBranches();
bank.removeBranch("Cali");
bank.removeBranch("Medellín"); // no existe
bank.displayBranches();
