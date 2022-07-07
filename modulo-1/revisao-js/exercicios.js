// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!!
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()

// EXERCÍCIO 01
function retornaTamanhoArray(array) {
  return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
  return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
  function sortfunction(a, b) {
    return a - b
  }
  return array.sort(sortfunction)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
  return array.filter(numero => numero % 2 === 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
  const novoArray = array.filter(item => item % 2 === 0)
  const outroArray = novoArray.map(item => item ** 2)
  return outroArray
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
  let maiorNumero = 0
  for (let i = 0; i < array.length; i++) {
    let elemento = array[i]
    if (elemento > maiorNumero) {
      maiorNumero = elemento
    }
  }
  return maiorNumero
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
  if (ladoA === ladoB && ladoA === ladoC) return 'Equilatero'
  else if (
    (ladoA === ladoB && ladoA !== ladoC) ||
    ladoA !== ladoB ||
    (ladoB === ladoC && ladoB !== ladoA)
  )
    return 'Isoceles'
  else if (ladoA !== ladoB && ladoA !== ladoC) {
    return 'Escaleno'
  }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  let priMaior = -Infinity
  let segMaior = -Infinity
  let priMenor = +Infinity
  let segMenor = +Infinity
  for (let number of array) {
    if (number > priMaior) priMaior - number
    if (number < priMenor) priMenor - number
  }
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {}
