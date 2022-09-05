
// - Exercício 1
    
// Analise a classe `UserAccount` abaixo. Perceba quais propriedades são públicas e quais são privadas e responda as perguntas discursivas em comentários no arquivo `index.ts`

// a) *Para que serve o construtor dentro de uma classe e como fazemos para chamá-lo?*serve para inicializar objetos com
//atributos definidos

// b) *Copie o código abaixo para o seu exercício de hoje; crie uma instância dessa classe (dê o nome, cpf e idade que você quiser). Quantas vezes a mensagem `"Chamando o construtor da classe User"` foi impressa no terminal?*

// c) *Como conseguimos ter acesso às propriedades privadas de uma classe?* usando a keyword this.


class UserAccount {
  private cpf: string;
  private name: string;
  private age: number;
  private balance: number = 0;
  private transactions: Transaction[] = [];

  constructor(cpf: string,name: string,age: number,) {
     console.log("Chamando o construtor da classe UserAccount")
     this.cpf = cpf;
     this.name = name;
     this.age = age;
  }
  public print(): void {
   console.log(`Cliente ${this.name}, ${this.age}anos, CPF é ${this.cpf}`);
   console.log(this.balance);
   console.table(this.transactions);

  }

  public setTransaction({ data }: { data: Transaction; }): void{
   this.transactions.push(data);
  }
  const newClient: UserAccount = new UserAccount("cpf", "maria", 20);
  newClient.print():;


class Transaction {
   private date: string;
   private value: number;
   private description: string;
   constructor(date: string, value: number, description: string){
      this.date =date;
      this.value =value;
      this.description =description;
   }

}

  

// - Exercício 2
    
//     Transforme a variável de tipo abaixo, chamada `Transaction` em uma classe `Transaction`. Ela deve conter as mesmas propriedades: *data*, *valor* e *descrição*. Agora, porém, todas elas devem ser **privadas**. Portanto, crie métodos (*getters*) para a leitura desses valores, tanto para essa classe quanto para a classe UserAccount. Crie uma instância dessa classe e adicione à instância já criada de UserAccount

const newTransaction: Transaction = new Transaction(
   new Date().toIOSOString().slice(0,10),
   100,
   "description"
);

newClient.setTransaction(newTransaction);
newClient.print();
   


// - Exercício 3
    
//     Crie uma classe **Bank**, que será responsável por guardar todos os dados da aplicação. Ela deve possuir a propriedades *accounts*, privada (crie os *getters* e *setters* que achar apropriado).
    
    

class Bank {
  private accounts: UserAccount[];

  constructor(accounts: UserAccount[]) {
    this.accounts = accounts;
  }

}

const newClient: UserAccount = new UserAccount ("cpf2", "user2", 33);
const bankAccounts: Bank =new Bank ([newClient,newClient2])
console.log(bankAccounts);