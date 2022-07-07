// // // //1  Leia o código -

// // // // // const filme = {
// // // // //   nome: 'Auto da Compadecida',
// // // // //   ano: 2000,
// // // // //   elenco: [
// // // // //     'Matheus Nachtergaele',
// // // // //     'Selton Mello',
// // // // //     'Denise Fraga',
// // // // //     'Virginia Cavendish'
// // // // //   ],
// // // // //   transmissoesHoje: [
// // // // //     { canal: 'Telecine', horario: '21h' },
// // // // //     { canal: 'Canal Brasil', horario: '19h' },
// // // // //     { canal: 'Globo', horario: '14h' }
// // // // //   ]
// // // // // }

// // // // // //a -O que será impresso no console?

// // // // // //Resposta: Será impresso a posicao 0 do elenco, Matheus Nachtergaele.
// // // // // // //Resposta: Imprime a ultima posicao do array. Virginia Cavendish
// // // // // //Resposta:Será impresso Globo, 14h. Globo está na posicão 2 porque contamos a partir do 0.

// // // // // //2  Leia o código -

// // // // const cachorro = {
// // // //   nome: 'Juca',
// // // //   idade: 3,
// // // //   raca: 'SRD'
// // // // }

// // // // const gato = { ...cachorro, nome: 'Juba' }

// // // // const tartaruga = { ...gato, nome: gato.nome.replaceAll('a', 'o') }

// // // // console.log(cachorro)
// // // // console.log(gato)
// // // // console.log(tartaruga)

// // // // // //a) O que será impresso no console?

// // // // //Nome, idade e raca do cachorro.
// // // // //Nome do gato: Juba através da cópia do objeto.
// // // // / Informacoes do gato devido a copia do objeto e a alteracao com nome.replaceAll da a para o. 

// // // // // //b) O que faz a sintaxe dos três pontos antes do nome de um objeto?

// // // // //Faz a cópia do objeto.

// // // //3  Leia o código

// // // function minhaFuncao(objeto, propriedade) {
// // //   return objeto[propriedade]
// // // }

// // // const pessoa = {
// // //   nome: 'Caio',
// // //   idade: 23,
// // //   backender: false
// // // }

// // // console.log(minhaFuncao(pessoa, 'backender'))
// // // console.log(minhaFuncao(pessoa, 'altura'))

// // // //a) O que vai ser impresso no console? false e indefinido

// // // //b) Explique o valor impresso no console. Você sabe por que isso aconteceu?
// // //  backender false  e altura não foi declarada para passar informacao.

// // 1. Resolva os passos a seguir:

// //     a) Crie um objeto.

// //     Ele deve conter duas propriedades: nome (string) e apelidos (um array que sempre terá exatamente **três apelidos**).

// // const pessoa = {
// //   nome: 'Ana',
// //   apelidos: ['banana', 'cana', 'tana']
// // }
// // function imprimeMensagem(objeto) {
// //   console.log(
// //     `Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]} , ${objeto.apelidos[1]} , ${objeto.apelidos[2]} `
// //   )
// // }
// // imprimeMensagem(pessoa)
// //     Depois, escreva uma função que recebe como entrada um objeto

// //     e imprime uma mensagem no modelo abaixo**:**

// //     // Exemplo de entrada
// // const pessoa = {
// //   nome: "Amanda",
// //   apelidos: ["Amandinha", "Mandinha", "Mandi"]
// // }

// // // Exemplo de saída
// // "Eu sou Amanda, mas pode me chamar de: Amandinha, Mandinha ou Mandi"

// // ***Não se esqueça de chamar a função passando o objeto que você criou como argumento, senão seu código não será executado!

// // b) Agora, usando o operador spread, crie um novo objeto mantendo o valor da propriedade nome, mas com uma nova lista de três apelidos.

// // const novaPessoa = {
// //   ...pessoa,
// //   apelidos: ['lama', 'lana', 'sana']
// // }

// // imprimeMensagem(novaPessoa)
// // Depois, chame a função feita no item anterior passando como argumento o novo objeto

// // **Não lembra da sintaxe de espalhamento ou spread? Não tem problema!
// // Pode pesquisar a vontade! Nesse link tem vários exemplos - e não se esqueçam que o Google é melhor amigo da pessoa desenvolvedora.

// // 2. Resolva os passos a seguir:

// //     a) Crie dois objetos diferentes com as seguintes propriedades: nome, idade e profissão.

// const pessoa1 = {
//   nome: 'Ana',
//   idade: 30,
//   profissao: 'cabelereira'
// }

// const pessoa2 = {
//   nome: 'Caio',
//   idade: 30,
//   profissao: 'mecanico'
// }

// //     b) Escreva uma função que receba esses objetos e retorne um array com as seguintes informações:

// //     1. O valor de `nome`
// function arrayNomes(nome1, nome2) {
//   const listaNomes = [nome1, nome2]
//   return listaNomes
// }

// arrayNomes(pessoa1.nome, pessoa2.nome)

// //     2. O numero de caracteres do valor `nome`
// function arrayNomes1(nome1, nome2) {
//   const numerodeCaracteres1 = nome1.length
//   const numerodeCaracteres2 = nome2.length
//   return [numerodeCaracteres1, numerodeCaracteres2]
// }

// arrayNomes1(pessoa1.nome, pessoa2.nome)
// //     3. O valor de `idade`

// function arrayIdade(idade) {
//   const valorIdade = idade
//   return valorIdade
// }

// arrayIdade(pessoa1.idade)

// //     4. O valor de `profissão`

// function arrayProfissao(profissao1, profissao2) {
//   const valorProfissao = [profissao1, profissao2]
//   return valorProfissao
// }

// arrayProfissao(pessoa1.profissao, pessoa2.profissao)

// //     5. O numero de caracteres do valor `profissão`

// //     const pessoa = {
// //       nome: "Bruno",
// //       idade: 23,
// //       profissao: "Instrutor"
// //     }

// //     minhaFuncao(pessoa)

// //     // Retorno: ["Bruno", 5, 23, "Instrutor", 9]

// //     3. Resolva os passos a seguir:

// //     a) Crie uma variável de escopo global que guarde um `array` vazio chamada `carrinho`

// let carrinho = []

// //     b) Crie três novos objetos que representem frutas de um sacolão. Eles devem ter as seguintes propriedades: nome (`string`) e disponibilidade (`boolean` - devem começar como `true`)

// const frutas1 = {
//   nome: 'maca',
//   disponibilidade: true
// }

// const frutas2 = {
//   nome: 'laranja',
//   disponibilidade: true
// }

// const frutas3 = {
//   nome: 'morango',
//   disponibilidade: true
// }

// //     c) Crie uma função que **receba** um objeto fruta por **parâmetro** e coloque-a dentro do array de `carrinho`. Invoque essa função passando os três objetos criados.

// function arrayCarrinho(objeto1, objeto2, objeto3) {
//   carrinho.push(objeto1)
//   carrinho.push(objeto2)
//   carrinho.push(objeto3)
//   return carrinho
// }

// arrayCarrinho(frutas1, frutas2, frutas3)

// // ** Aqui você deve usar o método **push()**

// // d) Imprima a variável `carrinho` e garanta que ela agora seja um **array preenchido com três objetos.**

// console.log(carrinho)
