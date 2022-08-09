// Exercicio 1

// a) Responda como comentário no seu código: como fazemos para acessar os parâmetros passados na linha de comando para o Node?
//Resposta:  utilizando o process.argv a partir do índice 2

//b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima no console uma mensagem que siga a seguinte estrutura:
//"Olá, (Nome)! Você tem (sua idade) anos."

// console.log("Olá", process.argv[2], "Você tem", process.argv[3], "anos"  )

//OU

// function apresentacao() {
//      const nome = process.argv[2]
//      const idade = process.argv[3]
//    console.log(`Olá, ${nome}! Você tem ${idade} anos!`)
//    }

//c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.

// function apresentacao() {
//   const nome = process.argv[2]
//   const idade = Number(process.argv[3])
//   console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idade + 7}.`)
// }

// apresentacao()

// PARA RODAR NO TERMINAL USAMOS: node index.js Maria 20 27

// - **Exercício 2**

//   2-  Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.

// const operacao = process.argv[2]
// switch (operacao){
// case "soma":
//   const add =  Number(process.argv[3]) + Number(process.argv[4])
//   console.log(`O resultado da soma é ${add}`)
// break;
// case"sub":
// const sub =  Number(process.argv[3]) - Number(process.argv[4])
//   console.log(`O resultado da soma é ${sub}`)
//   case "multi":
//   const multi =  Number(process.argv[3]) * Number(process.argv[4])
//   console.log(`O resultado da soma é ${multi}`)
// break;
// case "div":
//   const div =  Number(process.argv[3]) / Number(process.argv[4])
//   console.log(`O resultado da soma é ${div}`)
// break;
// }

//3-Crie uma aplicação Node que receba uma string representando uma tarefa. O programa deve adicionar a nova tarefa em uma variável que represente uma lista de tarefas. A lista de tarefas pode estar criada antes da execução do código. Após adicionar o item à lista, exiba a lista atualizada.

// const tasks = [ "Limpar", "Varrer", "Lavar"];
// let newTask = process.argv[2];
// let tasksList = [...tasks, newTask];
// let testeString = "Testando"

// console.log("Tarefa add com sucesso", tasksList )

const tasks = ['lavar', 'passar', 'limpar']

const newTask = process.argv[2]
tasks.push(newTask)

console.log('Tarefa add com sucesso', tasks)
