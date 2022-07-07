// 1-Leia o código abaixo:

// const respostaDoUsuario = prompt('Digite o número que você quer testar')
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log('Passou no teste.')
// } else {
//   console.log('Não passou no teste.')
// }
// a) Explique o que o código faz. Qual o teste que ele realiza? O código é uma condicional que pede uma info ao usuario.
// O if é executado se a condicao for true, o else é executado se a condicao for false.

// b) Para que tipos de números ele imprime no console "Passou no teste"? Para números pares

// c) Para que tipos de números a mensagem é "Não passou no teste"? para números impares.

// 2-O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:

// let fruta = prompt('Escolha uma fruta')
// let preco
// switch (fruta) {
// case 'Laranja':
//   preco = 3.5
//   break
// case 'Maçã':
//   preco = 2.25
//   break
// case 'Uva':
//   preco = 0.3
//   break
//   case 'Pêra':
//     preco = 5.5
//     break   // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break
// }
// console.log('O preço da fruta ', fruta, ' é ', 'R$ ', preco)

// a) Para que serve o código acima? Serve para passar o preco das frutas.

// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`? O preço da fruta  Maçã  é  R$  2.25

// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")? Caso break seja omitido ou esquecido, o programa continua a execução para a próxima instrução dentro de switch.

// 3- Leia o código abaixo:

// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)

// a) O que a primeira linha está fazendo? Pedidndo uma informacao ao usuario

// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
// A mensagem será que ele passou no teste porque 10 é maior que 0.
// A mensagem é de erro.

// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
// Retorna erro porque ela não existe fora do escopo dessa funcao.

// - **Exercícios de escrita de código**
//     1. Faça um programa que pergunta ao usuário qual a idade dele e imprima no console se ele/ela pode dirigir (apenas maiores de idade).

//         a) Faça um `prompt` para receber a idade do usuário e guarde em uma variável.

// const idadeMaior = Number(prompt('Qual sua idade?'))
// if (idade >= 18) {
//   return 'Você pode dirigir'
// } else {
//   return 'Você não pode dirigir'
// }

// console.log(idadeMaior)

//         b) Garanta que essa variável é do tipo `Number`, você deve usar o cast para number para isso.

//         c) Agora veja se essa idade do usuário corresponde à idade mínima que permite dirigir. Se sim, imprima no console `"Você pode dirigir"`, caso contrário, imprima `"Você não pode dirigir."`

//   2. Agora faça um programa que verifica que turno do dia um aluno estuda. Peça para digitar M (matutino) ou V (Vespertino) ou N (Noturno). Imprima no console a mensagem "Bom Dia!", "Boa Tarde!" ou "Boa Noite!". Utilize o bloco if/else

//   ****DICA Se o usuário digitar "V" no prompt, você deverá imprimir no console a mensagem "Boa Tarde!"
// Nesse caso, temos 3 resultados diferentes (Bom dia/Tarde/Noite)
// "Boa Tarde!"
// let turnoAluno= prompt("Digite M par matutino, V para vespertino ou N para noturno")
// if(turnoAluno === "M") {
//    console.log("Bom dia!")
// } else if(turnoAluno === "V") {
//     console.log("Boa tarde!")
// } else if(turnoAluno === "N") {
//     console.log("Boa noite!")
// } else {
//     console.log("Deu ruim")
// }

// 3. Repita o exercício anterior, mas utilizando a estrutura de switch case agora.

// ****DICA Lembre-se que o switch case é como se fosse um if, mas ele verifica APENAS IGUALDADES ESTRITAS (===)
// let turnoAluno= prompt("Digite M par matutino, V para vespertino ou N para noturno")
// let retornaTurno= (turno) => {
//     switch (turno) {
//         case 'M':
//             return "Bom dia!"
//             break;
//             case 'V':
//                 return "Boa tarde!"
//                 break;
//                 case 'N':
//                     return "Boa noite!"
//                     break;
//     }
// }
// console.log(retornaTurno(turnoAluno))

// 4. Considere a situação: você vai ao cinema com um amigo ou amiga, porém ele/ela só assistirá a um filme com você se ele for do gênero fantasia e se o ingresso está abaixo de 15 reais. Faça um código que pergunta ao usuário qual o gênero de filme que vão assistir e outra pergunta sobre o preço do ingresso, então verifique se seu amigo ou amiga vai topar assistir o filme. Caso positivo, imprima no console a mensagem: "Bom filme!", caso contrário, imprima "Escolha outro filme :("

// let generoFilme= prompt("Qual o genero do filme?")
// let precoIngresso= prompt("Qual o preço do ingresso?")
// if(generoFilme === "fantasia", precoIngresso <= 15) {
//    console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }
