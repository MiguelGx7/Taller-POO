// Ejercicio 11: BankAccount con transferencias
// Conceptos: objetos que interactúan entre sí (una cuenta usa a otra)

class BankAccount {
  constructor(accountNumber, holderName, balance = 0) {
    this.accountNumber = accountNumber; // número de cuenta
    this.holderName = holderName;       // titular
    this.balance = balance;             // saldo
  }

  deposit(amount) {
    if (amount <= 0) {
      console.log("El monto a depositar debe ser mayor que 0.");
      return;
    }
    this.balance += amount;
    console.log(`${this.holderName} depositó $${amount}. Saldo: $${this.balance}`);
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      console.log(`${this.holderName}: retiro de $${amount} no permitido. Saldo: $${this.balance}`);
      return false;
    }
    this.balance -= amount;
    console.log(`${this.holderName} retiró $${amount}. Saldo: $${this.balance}`);
    return true;
  }

  // Transfiere dinero a otra cuenta: retira de esta y deposita en la otra
  transfer(amount, targetAccount) {
    if (this.withdraw(amount)) {
      targetAccount.deposit(amount);
      console.log(`Transferencia de $${amount}: ${this.holderName} -> ${targetAccount.holderName}`);
    } else {
      console.log("Transferencia cancelada.");
    }
  }
}

const acc1 = new BankAccount("001", "Miguel", 1000);
const acc2 = new BankAccount("002", "Laura", 500);
const acc3 = new BankAccount("003", "Carlos", 0);

acc1.deposit(200);
acc2.withdraw(100);
acc1.transfer(400, acc2);
acc3.transfer(50, acc1); // debe fallar: no tiene saldo
