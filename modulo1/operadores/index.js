// Exercicio 1

// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)
//Resposta False - Ele é falso porque todo & precisa ser verdadeiro(true).

// resultado = bool1 && bool2 && bool3
// console.log("b. ", resultado)
//Resposta False - Ele é falso porque todo & precisa ser verdadeiro(true).

// resultado = !resultado && (bool1 || bool2)
// console.log("c. ", resultado)
//Resposta True porque o resultado esta com sinal de diferente e outra é true.

// console.log("d. ", typeof resultado)
//Respostas:
//False False True

//Exercicio 2

// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//Resposta
// Este arquivo não irá rodar com clareza pois falta o Number antes do prompt

// Exercicio 3

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number (prompt("Digite outro numero!"))

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

//Exercícios de escrita de código

// 1. Faça um programa que:

//     a) Pergunte a idade do usuário

//     b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga

//     c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)

//     d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)

// let idUser = Number(prompt('Qual é a sua idade'))
// let idAmigo = Number(prompt('Qual a idade do melhor amigo?'))
// let idMaior = idUser > idAmigo
// let difIdade = idUser - idAmigo

// console.log(
//   `A minha idade é ${idUser} anos, a idade do meu melhor amigo é ${idAmigo} anos, a minha idade é maior do que a do meu amigo? ${idMaior}, a diferença de idade entre nós dois é ${difIdade} anos`
// )

// 2. Faça um programa que:

//     a) Peça ao usuário que insira um número **par**

//     b) Imprima na console **o resto da divisão** desse número por 2.

//     c) Teste o programa com diversos números pares. Você notou um padrão? Escreva em um comentário de código.

//     d) O que acontece se o usuário inserir um número ímpar? Escreva em um comentário de código

// let numeroPar = Number(prompt('Digite um número par'))
// let resultado = numeroPar % 2

// console.log(resultado)

//Resposta Quando é colocado n impar ele retorna um numero diferente de 0.

// 3. Faça um programa que pergunte ao usuário sua idade em anos. Depois, imprima no console

//     a) A idade do usuário em meses

//     b) A idade do usuário em dias

//     c) A idade do usuário em horas

// let idadeUsuario = Number(prompt('Digite sua idade'))
// let idadeMeses = idadeUsuario * 12
// let idadeDias = idadeUsuario * 365
// let idadeHoras = idadeUsuario * 8760

// console.log(idadeUsuario, idadeMeses, idadeDias, idadeHoras)

// 4. Faça um programa que pergunte ao usuário dois números. Em seguida, faça as operações e imprima no console as seguintes mensagens seguidas pelo `true` ou `false`:

/* ```html
    O primeiro numero é maior que segundo? true
    O primeiro numero é igual ao segundo? false
    O primeiro numero é divisível pelo segundo? true
    O segundo numero é divisível pelo primeiro? true
    
    obs: O true ou false vai depender dos números inseridos e do resultado das operações.
    // ```*/

// let numeroUm = Number(prompt('Digite um numero'))
// let numeroDois = Number(prompt('Digite outro numero'))
// let numeroMaior = numeroUm > numeroDois
// let numeroIgual = numeroUm === numeroDois
// let primeiroDiv = numeroUm % numeroDois === 0
// let segundoDiv = numeroDois % numeroUm === 0
// console.log(numeroMaior, numeroIgual, primeiroDiv, segundoDiv)

// Resposta

// false, false, false, true



outrooooooos

const pessoa = {
  nome: 'Ana',
  gênero: 'feminino'
}
function imprimeMensagem(objeto) {
  console.log(`Bem vinda ${objeto.nome}. `)
}
imprimeMensagem(pessoa)

//JavaScript
const pessoa = {
  nome: "Paula",
  genero: "Feminino"
  }
  
  const desejaBoasVindas = (pessoa) => {
  if(pessoa.genero === "Feminino") {
  return "Seja bem-vinda!"
  } else if(pessoa.genero === "Masculino") {
  return "Seja bem-vindo!"
  } else {
  return "Desejamos boas-vindas!".
  }
  }
    console.log(desejaBoasVindas(pessoa))
  
