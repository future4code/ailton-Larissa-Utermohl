// O seguinte array traz as pessoas colaboradoras de uma empresa, com seus salários, setores e se trabalham presencialmente ou por home office:

import { isTemplateExpression } from "typescript";

// [
// 	{ nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
// 	{ nome: "Maria" ,salário: 1500, setor: "vendas", presencial: false},
// 	{ nome: "Salete" ,salário: 2200, setor: "financeiro", presencial: true},
// 	{ nome: "João" ,salário: 2800, setor: "marketing", presencial: false},
// 	{ nome: "Josué" ,salário: 5500, setor: "financeiro", presencial: true},
// 	{ nome: "Natalia" ,salário: 4700, setor: "vendas", presencial: true},
// 	{ nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }]

//   Considerando o arrayacima, crie um ENUM para os setores e um type para as pessoas colaboradoras. Em seguida, crie uma função que receba este arraycomo parâmetro e retorne apenas as pessoas do setor de marketing que trabalham presencialmente. 

//   Entradas/Saídas

//   input: type[]
//   output: type[]

//   Esperado
//   [
//     { nome: "Marcos", salário: 2500, setor: "marketing", presencial: true },
//     { nome: "Paola" ,salário: 3500, setor: "marketing", presencial: true }
//   ]

enum SETOR {
  MARKETING = "marketing",
  VENDAS = "vendas",
  FINANCEIRO = "financeiro"
}

type Pessoa = {
  nome: string,
  salario: number,
  setor: SETOR,
  presencial: boolean
}

const equipe: Pessoa[] = [
{ nome: "Marcos", salario: 2500, setor: SETOR.MARKETING, presencial: true },
{ nome: "Maria" ,salario: 1500, setor: SETOR.VENDAS, presencial: false},
{ nome: "Salete" ,salario: 2200, setor: SETOR.FINANCEIRO, presencial: true},
{ nome: "João" ,salario: 2800, setor: SETOR.MARKETING, presencial: false},
{ nome: "Josué" ,salario: 5500, setor: SETOR.FINANCEIRO, presencial: true},
{ nome: "Natalia" ,salario: 4700, setor: SETOR.VENDAS, presencial: true},
{ nome: "Paola" ,salario: 3500, setor: SETOR.MARKETING, presencial: true }
]

function pegaPresencial(lista: Pessoa[]): Pessoa[] {

  const resultado: Pessoa[] = lista.filter((item: Pessoa) => {
      const primeiraCondicao = item.setor === SETOR.MARKETING
      const segundaCondicao = item.presencial === true
      return primeiraCondicao && segundaCondicao
  })

  return resultado
}

console.log(pegaPresencial(equipe))