// // Exercícios de interpretação de código

// //     Tente responder os exercícios dessa seção sem executar o código. S

// //     // 1.  Indique todas as mensagens impressas no console, **SEM EXECUTAR o programa**.

// // let array
// // console.log('a. ', array)
// // //Resposta: Não tem nenhum valor atribuição. Undefined.

// // array = null
// // console.log('b. ', array)
// //Resposta: null , foi declarado sem valor.

// //array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// //console.log('c. ', array.length)
// //Resposta: 11 porque é a quantidade de ítens do array

// //let i = 0
// //console.log('d. ', array[i])
// //Resposta: 3

// //array[i + 1] = 19
// //console.log('e. ', array)
// //Resposta: [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// //const valor = array[i + 6]
// //console.log('f. ', valor)
// //Resposta: 9

// //2- Leia o código abaixo com atenção

// //const frase = prompt('Digite uma frase')

// //console.log(frase.toUpperCase().replaceAll('A', 'I'), frase.length)

// //Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?

// //Resposta SUBI NUM ONIBUS EM MIRROCOS - 27

// //3-Exercícios de escrita de código**
//
// 1. Faça um programa que pergunte ao usuário seu nome e seu e-mail.

//  const  NomeDoUsuario= prompt ("Qual seu nome?")
//  const  emailDoUsuario= prompt ("Qual seu email"?)

//  console.log (`O e-mail $(emailDoUsuario) foi cadastrado com sucesso. Seja bem vindo, ${NomeDoUsuario}!`)

// const comidasPreferidas= [ "coxinha","churrasco", "comida japonesa", "lasanha",  "bolo salgado"]
// // console.log(comidasPreferidas)
// console.log(Essas são minhas comidas preferidas: 
// ${comidasPreferidas [0]}
// ${comidasPreferidas [1]}
// ${comidasPreferidas [2]}
// ${comidasPreferidas [3]}
// ${comidasPreferidas [4]} )
// console.log(comidasPreferidas)
// const qualComida= prompt( "Qual sua comida preferida?")
// // comidasPreferidas.splice(1, 1)
// comidasPreferidas[0]= qualComida
// // comidasPreferidas.push(qualComida)
// console.log(comidasPreferidas)

// 3 - 
// const listaDeTarefas= []
// listaDeTarefas.push(prompt("Liste as tarefas"))

// listaDeTarefas.push(prompt("Liste as tarefas"))
// listaDeTarefas.push(prompt("Liste as tarefas"))
// console.log(listaDeTarefas)
// const digiteIndice= Number(prompt("Digite 0,1 ou 2"))
// listaDeTarefas.splice(digiteIndice, 1)
// console.log(listaDeTarefas)