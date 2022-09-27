class User {
  private id: string;
  private email: string;
  private name: string;
  private password: string;

  constructor(
		id: string,
		email: string,
		name: string,
		password: string
	){
		console.log("Chamando o construtor da classe User")
		this.id = id
		this.email = email
		this.name = name 
		this.password = password
	}

	public getId(): string {
		return this.id
	}

	public getEmail(): string {
		return this.email
	}

	public getName(): string {
		return this.name
	}
}

//**a)** Seria necessário criar um *getter* dentro da classe User que retornasse a senha, uma vez que essa é uma informação privada.

//**b)** Foi impressa uma vez, quando o novo usuário é criado.

//*a)** Foi impressa uma vez, quando o novo cliente é criado.

//**b)** Foi impressa uma vez, quando o novo cliente é criado, pois Customer é uma classe filha de User, e seu construtor referencia o construtor da classe mãe. Assim, quando se chama o construtor de Customer, o de User também é chamado.

//### Exercício 3
//**a)** Não seria possível imprimir o *password*, pois é uma informação privada da classe mãe e não há nenhum método que a retorne.

// Exercicio 2
class Customer extends User {
  public purchaseTotal: number = 0;
  private creditCard: string;

  constructor(
      id: string,
      email: string,
      name: string,
      password: string,
      creditCard: string
  ) {
      super(id, email, name, password);
      console.log("Chamando o construtor da classe Customer");
      this.creditCard = creditCard;
  }

  public getCreditCard(): string {
      return this.creditCard;
  }
}

const newCustomer: Customer = new Customer("002", "aaabbb@mail.com", "Fulano", "1234567", "12345678901088")

// Exercicio 3
console.log(`Nome: ${newCustomer.getName()}
Email: ${newCustomer.getEmail()}
Id: ${newCustomer.getId()}
Cartão: ${newCustomer.getCreditCard()}
Compras: ${newCustomer.purchaseTotal}`)

// Exercicio 4 e 5
console.log(newCustomer.introduceYourself(),
newUser.introduceYourself())