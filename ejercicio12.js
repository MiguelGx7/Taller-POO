// Ejercicio 12: University con departamentos
// Conceptos: clase que administra una colección (arreglo) de datos

class University {
  constructor(name) {
    this.name = name;         // nombre de la universidad
    this.departments = [];    // lista de departamentos
  }

  // Agrega un departamento si no existe ya
  addDepartment(department) {
    if (this.departments.includes(department)) {
      console.log(`El departamento "${department}" ya existe.`);
      return;
    }
    this.departments.push(department);
    console.log(`Departamento "${department}" agregado.`);
  }

  // Elimina un departamento si existe
  removeDepartment(department) {
    const index = this.departments.indexOf(department);
    if (index === -1) {
      console.log(`El departamento "${department}" no existe.`);
      return;
    }
    this.departments.splice(index, 1);
    console.log(`Departamento "${department}" eliminado.`);
  }

  // Muestra todos los departamentos
  displayDepartments() {
    console.log(`Departamentos de ${this.name}:`);
    if (this.departments.length === 0) {
      console.log("  (sin departamentos)");
    } else {
      this.departments.forEach((d) => console.log(`  - ${d}`));
    }
  }
}

const university = new University("Universidad del Cauca");
university.addDepartment("Ingeniería");
university.addDepartment("Medicina");
university.addDepartment("Derecho");
university.displayDepartments();
university.removeDepartment("Medicina");
university.removeDepartment("Artes"); // no existe
university.displayDepartments();
