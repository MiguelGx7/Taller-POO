// Ejercicio 4: BankAccount con depósito y retiro
// Conceptos: clase, validaciones dentro de los métodos

class BankAccount {
  constructor(accountNumber, balance = 0) {
    this.accountNumber = accountNumber; // número de cuenta
    this.balance = balance;             // saldo
  }

  // Suma dinero al saldo si el monto es válido
  deposit(amount) {
    if (amount <= 0) {
      console.log("El monto a depositar debe ser mayor que 0.");
      return;
    }
    this.balance += amount;
    console.log(`Depósito de $${amount} en la cuenta ${this.accountNumber}. Saldo: $${this.balance}`);
  }

  // Resta dinero solo si hay saldo suficiente
  withdraw(amount) {
    if (amount <= 0) {
      console.log("El monto a retirar debe ser mayor que 0.");
    } else if (amount > this.balance) {
      console.log(`Fondos insuficientes en la cuenta ${this.accountNumber}.`);
    } else {
      this.balance -= amount;
      console.log(`Retiro de $${amount} en la cuenta ${this.accountNumber}. Saldo: $${this.balance}`);
    }
  }
}

const account1 = new BankAccount("001", 1000);
const account2 = new BankAccount("002", 500);

account1.deposit(500);
account1.withdraw(300);
account2.deposit(200);
account2.withdraw(1000); // debe mostrar fondos insuficientes
