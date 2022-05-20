//* EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
let computador1 = comprarCarta()
let computador2 = comprarCarta()
let usuario1 = comprarCarta()
let usuario2 = comprarCarta()
console.log(computador1)
const texto = 'Bem vindo ao jogo de Blackjack!'
console.log(texto)

let querJogar = confirm('Quer iniciar uma nova rodada?')

const simOuNao = querJogar => {
  if (querJogar) {
    const somaDasCartasComputador = computador1.valor + computador2.valor
    const somaDasCartasUsuario = usuario1.valor + usuario2.valor

    if (somaDasCartasComputador > somaDasCartasUsuario) {
      console.log(`Usuário - cartas: ${usuario1.texto} ${usuario2.texto} - pontuação ${somaDasCartasUsuario}
      Computador - cartas: ${computador1.texto} ${computador2.texto}  - pontuação ${somaDasCartasComputador}`)
      console.log('O computador ganhou')
    } else if (somaDasCartasUsuario > somaDasCartasComputador) {
      console.log(`Usuário - cartas: ${usuario1.texto} ${usuario2.texto} - pontuação ${somaDasCartasUsuario}
      Computador - cartas: ${computador1.texto} ${computador2.texto}  - pontuação ${somaDasCartasComputador}`)
      console.log('O usuario ganhou')
    } else {
      console.log(`Usuário - cartas: ${usuario1.texto} ${usuario2.texto} - pontuação ${somaDasCartasUsuario}
     Computador - cartas: ${computador1.texto} ${computador2.texto}  - pontuação ${somaDasCartasComputador}`)
      console.log('empate')
    }
  } else {
    console.log('O jogo acabou')
  }
}
simOuNao(querJogar)

// const carta = comprarCarta()

// //Sorteia uma carta. Por exemplo, o rei de ouros

// console.log(carta.texto)

// //imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)

// console.log(carta.valor)

//imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
