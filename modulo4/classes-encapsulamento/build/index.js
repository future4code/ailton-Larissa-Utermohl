"use strict";
class UserAccount {
    constructor(cpf, name, age) {
        this.balance = 0;
        this.transactions = [];
        this.newClient = new UserAccount("cpf", "maria", 20);
        console.log("Chamando o construtor da classe UserAccount");
        this.cpf = cpf;
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(`Cliente ${this.name}, ${this.age}anos, CPF é ${this.cpf}`);
        console.log(this.balance);
        console.table(this.transactions);
    }
    setTransaction(data) {
        this.transactions.push(data);
    }
}
class Transaction {
    constructor(date, value, description) {
        this.date = date;
        this.value = value;
        this.description = description;
    }
}
class Transaction {
    constructor(date, value, description) {
        this.date = date;
        this.value = value;
        this.description = description;
    }
}
//# sourceMappingURL=index.js.map