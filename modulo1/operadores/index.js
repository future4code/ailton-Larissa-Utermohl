//Exercicio 1

/*const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log('a. ', resultado)

resultado = bool1 && bool2 && bool3
console.log('b. ', resultado)

resultado = !resultado && (bool1 || bool2)
console.log('c. ', resultado)

console.log('d. ', typeof resultado)*/

//Resultado
//false - false - true -boolean

//Exercicio 2 e 3

/*let primeiroNumero = Number(prompt('Digite um numero!'))
let segundoNumero = Number(prompt('Digite outro numero!'))

const soma = primeiroNumero + segundoNumero

console.log(soma)

É necessário colocar o number prompt para fazer a soma caso contrario os número se juntam no console. */

//-------Exercícios de escrita de código---------

/*Exercicio 1
a) Pergunte a idade do usuário
b) Pergunte a idade do seu melhor amigo ou da sua melhor amiga
c) **Imprima na console** a seguinte mensagem: "Sua idade é maior do que a do seu melhor amigo?", seguido pela resposta (`true` ou `false`)
d) **Imprima na console** a diferença de idade (não tem problema se sair um número negativo)*/

const minhaIdade = Number(prompt('Qual sua idade?'))
const idadeDoSeuMelhorAmigo = Number(prompt('Qual idade melhor amigo?'))
const diferencaDeIdade = minhaIdade > idadeDoSeuMelhorAmigo
const difIdade = minhaIdade - idadeDoSeuMelhorAmigo

console.log(
  `Sua idade é ${minhaIdade} anos, a idade do seu amigo é ${idadeDoSeuMelhorAmigo} anos, eu sou mais velho? (${diferencaDeIdade}) a diferença é ${difIdade} anos`
)


















//#1 SOMA

// const valor1 = 20
// const valor2 = Number(prompt("Informe um número qualquer"))

// // const resultado = valor1 + valor2

// console.log(valor1 + valor2)

//#SUBTRAÇÃO

// const primeiroValor = 10
// const segundoValor = 5

// const resultado = primeiroValor - segundoValor

// console.log(resultado)

//#MULTIPLICAÇÃO

// const primeiroValor = 50
// const valorMultiplicador = 5

// const resultado = primeiroValor * valorMultiplicador

// console.log(resultado)

//#DIVISAO

// const primeiroValor = 50
// const valorDivisor = 5

// const resultado = primeiroValor / valorDivisor

// console.log(resultado)

//#SOMA E MULTIPLICA

// const valor1 = 10
// const valor2 = 15
// const valor3 = 3

// const resultado = valor1 + valor2 * valor3

// console.log(resultado)

//#DIVISAO E MULTIPLICACAO

// const valor1 = 10
// const valor2 = 15
// const valor3 = 3

// const resultado = valor1 / (valor2 * valor3)

// console.log(resultado)

//#MODULO

//PAR OU IMPAR

// const valor1 = 11
// const valor2 = 2

// const resultado = valor1 % valor2

// console.log(resultado)

// const valor1 = 25
// const valor2 = 2

// const resultado = valor1 % valor2

// console.log(resultado)

// let minhaIdade = 27

// minhaIdade = minhaIdade + 1
// minhaIdade += 1

// console.log(minhaIdade)

//#SIMPLIFICAÇÃO

// let valor1 = 20
// let valor2 = 30
// let valor3 = 50

// // let resultado1 = valor1 *= 2

// let resultado1 = valor1 * 2
// let resultado2 = valor2 /= 2
// let resultado3 = valor3 -= 30
// let resultado4 = valor3 += 50
// console.log( resultado4)

//EXERCICIO1

// let primeiroValor = 3
// let segundoValor = 4

// const resultado = primeiroValor + segundoValor

// console.log(resultado)

//#exercicio2

// let valor1 = 3
// let valor2 = 5
// let valor3 = 2

// const resultado = (valor1 * valor2) / valor3
// console.log((3 * 5) / 2)

//#exercicio3
// let valor1 = 4
// let valor2 = 5
// let valorMultiplicador = -1

// const resultado = (valor1 - valor2) * valorMultiplicador
// console.log(resultado)

//#RESTO DA DIVISAO

// let valor1 = 234

// let valor2 = 5

// const resultado = valor1 % valor2

// console.log(resultado)

//---------------------- COMPARADORES -----------------
//#IGUALDADE
// const condicao = 1 === 2

// const condicao2 = "1" === "1"

// console.log(condicao2)

//#DIFERENTE

// const condicao = 1 !== 2

// console.log(condicao)

//#>=

// const condicao = 1 > 1
// const condicao = 1 >= 1
// const idade = 18
// const maiorDeIdade = idade >= 18

// const ateCinquentaAnos = idade <= 50

// console.log(ateCinquentaAnos)

//#EXERCICIOS COMPARADORES

//#1

// const primeiroValor = "5"
// const segundoValor = 5

// const resultado = primeiroValor == segundoValor

// console.log(resultado)

// const primeiroValor = 5
// const segundoValor = 5

// const resultado = primeiroValor === segundoValor

// console.log(resultado)

//#2 DIFERENTE

// const valor1 = 4
// const valor2 = 4

// const resultado = valor1 !== valor2

// console.log(resultado)

//#maior que

// const valor1 = 10
// const valor2 = 15

// // const resultado = valor2 > valor1
// const resultado = valor1 > valor2

// console.log(resultado)

//#menor que

// const valor1 = 50
// const valor2 = 20

// // const resultado = valor2 < valor1
// const resultado = valor1 < valor2
// console.log(resultado)

// const idade = 55

// const maiorDeIdade = idade >= 18
// const ateCinquentaAnos = idade <= 50
//                 //true       //false
// console.log(maiorDeIdade && ateCinquentaAnos)

//#EXERCICIO &&

// const a = true
// const b = false
// const c = true

// console.log("a && b:", a && b)

// console.log("b && c:", b && c)

// console.log("a && c:", a && c)

// console.log("a && b && c:", a && b && c)

// const idade = 31

// const maiorQue18 = idade > 31
// const menorQue30 = idade < 30

// console.log(maiorQue18, menorQue30)
// console.log("resultado:", maiorQue18 || menorQue30)
//#exercicio ||

// const a = true
// const b = false
// const c = true

// // console.log("a || b:", a || b)

// // console.log("b || c:", b || c)

// // console.log("a || c", a || c)

// // console.log("a || b || c:", a || b || c)

// // console.log(b || b)

// console.log(!a)

//#exercicio

/*const nome = 'Julia'
const idade = 24
const eMaiorDeIdade = idade >= 18
const idade2050 = 2050 - 2022 + idade

console.log(
  `A ${nome} tem ${idade} anos, é maior de idade (${eMaiorDeIdade}) e em 2050 ela terá ${idade2050} anos em 2050`
)*/
