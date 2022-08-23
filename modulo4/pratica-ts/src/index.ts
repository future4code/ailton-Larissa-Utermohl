// // // // // - Exercício 1
    
// // // // //     A seguinte função em JavaScript recebe como parâmetro os tamanhos dos três lados do triângulo: `ladoA, ladoB, ladoC` e retorna se ele é equilátero, isósceles ou escaleno. Refatore a função para o Typescript.
    
// // // // //     **Código em JavaScript:** 
    
// // // //     // function checaTriangulo(a: number, b:number, c: number) {
// // // //     //   if (a !== b && b !== c) {
// // // //     //     return "Escaleno";
// // // //     //   } else if (a === b && b === c) {
// // // //     //     return "Equilátero";
// // // //     //   } else {
// // // //     //     return "Isósceles";
// // // //     //   }
// // // //     // }
    
// // // // //console.log(checaTriangulo(12,13,14))

// // // //     // - Exercício 2
    
// // // //     // A seguinte função em JavaScript pergunta ao usuário suas três cores favoritas e imprime no console um array que contenha essas três cores. Refatore a função para o Typescript.
    
// // // //     // **Código em JavaScript:**

// // // //     function imprimeTresCoresFavoritas() {
// // // //       const cor1 = prompt("Insira sua primeira cor favorita")
// // // //       const cor2 = prompt("Insira sua segunda cor favorita")
// // // //       const cor3 = prompt("Insira sua terceira cor favorita")
// // // //       console.log([cor1, cor2, cor3])
// // // //    }
// // // // ***REFATORADA

// // // //     function imprimeTresCoresFavoritas(cor1: string, cor2: string, cor3: string): string [] {
// // // //       const arrayDeCores =[]
// // // //       arrayDeCores.push(cor1,cor2,cor3)
// // // //       return arrayDeCores
      
// // // //    }
// // // //    console.log(imprimeTresCoresFavoritas("vermelho","azul","preto"))
   
// // // //    A função recebe um ano e retorna um booleano (true ou false) que indica se o ano é bissexto. Um ano é bissexto de acordo com as seguintes condições:

// // // // - **São bissextos** todos os anos múltiplos de 400**.**
// // // // - **São bissextos** todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400**.**
// // // // - **Não são bissextos** todos os demais anos.

// // // // Com isso em mente, refatore a função para o Typescript.

// // // //**Código em JavaScript:**

// // // // function checaAnoBissexto(ano: number): boolean {
// // // //   const cond1 = ano % 400 === 0
// // // //   const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
// // // //   return cond1 || cond2
// // // // }
// // // // console.log(checaAnoBissexto(2008))


// // // // - Exercício 4
    
// // // //     A seguinte função recebe dois números como parâmetro e retorna a diferença entre o maior número e o menor. Dessa forma, refatore a função para o Typescript.

// // //     // function comparaDoisNumeros(num1: number, num2: number): number {
// // //     //   let maiorNumero;
// // //     //   let menorNumero;
    
// // //     //   if (num1 > num2) {
// // //     //     maiorNumero = num1;
// // //     //     menorNumero = num2;
// // //     //   } else {
// // //     //     maiorNumero = num2;
// // //     //     menorNumero = num1;
// // //     //   }
    
// // //     //   const diferenca = maiorNumero - menorNumero;
    
// // //     //   return diferenca 
// // //     // }
// // //     // console.log(comparaDoisNumeros(4,7))

// // // //     - Exercício 5
    
// // // //     A função abaixo recebo por parâmetro  o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). A função retorna  uma string que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:
    
// // // //     - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// // // //     - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// // // //     - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos
    
// // // //     Dito isso, refatore a função para o Typescript.

// // //     // function checaRenovacaoRG(anoAtual: number, anoNascimento: number, anoEmissao: number ): boolean | string {
// // //     //   let idade: number = anoAtual - anoNascimento
// // //     //   let tempoCarteira: number = anoAtual - anoEmissao
     
// // //     //    if(idade <= 20 ) {
// // //     //        return tempoCarteira >= 5 ? "passou dos 5 anos precisa renovar" : "ainda não passou os 5 anos"
         
// // //     //     }else if(idade >= 20 || idade <= 50) {
// // //     //        return tempoCarteira >= 10 ? "passou dos 10 anos precisa renovar" : "ainda não passou os 10 anos"
         
// // //     //     }else if(idade > 50) {
// // //     //        return tempoCarteira >=15 ? "passou dos 15 anos precisa renovar" : "ainda não passou os 15 anos"
         
// // //     //      }else {
// // //     //          return "error"
// // //     //      }
// // //     //  }
// // //     //  console.log(checaRenovacaoRG(2022,1996,2010))


// // //     //  - Exercício 6
    
// // //     // Faça uma função que receba dois números como parâmetros e imprima no terminal, as seguintes informações:
    
// // //     // a) A soma desses números
    
// // //     // b) A subtração desses números
    
// // //     // c) A multiplicação desses números
    
// // //     // d) Qual deles é o maior
    
// // //     // Você pode fazer todas as operações na mesma função.
    
// // //     // Como estamos usando o TypeScript, devemos passar para o código o tipo de parâmetro que é esperado pela função, afinal, no javascript, nada nos impede de passar parâmetros sem especificação

// // //     // function operations(a:number, b:number):string {
// // //     //   //     let maiorNumero:number|string = '0'
// // //     //   //     if(a > b) {
// // //     //   //        maiorNumero = a
// // //     //   //     } else if (a < b) {
// // //     //   //         maiorNumero = b
// // //     //   //     } else {
// // //     //   //         maiorNumero = `Os números são iguais.`
// // //     //   //     }
// // //     //   //     return (
// // //     //   //         `
// // //     //   //         A soma desses números é: ${a+b}
// // //     //   //         A subtração desses números é: ${a-b}
// // //     //   //         A multiplicação desses números é: ${a*b}
// // //     //   //         O maior número é: ${maiorNumero}
// // //     // }

// // //     // - Exercício 7
    
// // //     // Uma das definições de seres vivos implica em identificar se ele possui células ou não. Hoje em dia, sabe-se que as características deles ficam salvas dentro de uma molécula, um tanto quanto grande, chamada de DNA (Ácido Desoxirribonucleico). Uma das tarefas mais importantes para a sobrevivência das células é a transcrição do RNA (Ácido Ribonucleico) a partir de um DNA. Este processo consiste em identificar as bases nitrogenadas que formam o DNA, em questão. Todas as moléculas de DNA podem ser representadas como uma sequência de bases nitrogenadas que podem ser: a A (adenina), T (timina), G (guanina) ou C (citosina). Abaixo, há um exemplo disto
    
// // //     // ```
// // //     // ATT GCT GCG CAT TAA CGA CGC GTA
// // //     // ```
    
// // //     // Para se formar o RNA, devemos realizar a troca das bases nitrogenadas, seguindo a regra: A (adenina) vira U (uracila - específica do RNA); T (timina) vira Adenina (A), C (citosina) vira G(guanina); e G (guanina) vira C (citosina).  O RNA transcrito a partir do exemplo de DNA acima é
    
// // //     // ```
// // //     // UAA CGA CGC GUA AUU GCU GCG CAU
// // //     // ```
// // //     // Escreva um programa que converta uma string de DNA em uma string de RNA. Para os exemplos acima, a entrada seria `"ATTGCTGCGCATTAACGACGCGTA"` e a saída `"UAACGACGCGUAAUUGCUGCGCAU"`


// // //     // function convertDNAtoRNA(dna: string): string {
// // //     //   //     let rna = ''
// // //     //   //   for (let i = 0; i < dna.length; i++) {
// // //     //   //     if (dna[i] === "G") {
// // //     //   //       rna += dna[i].replace("G", "C");
// // //     //   //     } else if (dna[i] === "C") {
// // //     //   //       rna += dna[i].replace("C", "G");
// // //     //   //     } else if (dna[i] === "T") {
// // //     //   //       rna += dna[i].replace("T", "A");
// // //     //   //     } else {
// // //     //   //       rna += dna[i].replace("A", "U");
// // //     //   //     }
// // //     //   //   }
// // //     //   //   return rna;
// // //     //   // }
// // //     //   // console.log(convertDNAtoRNA("ATTGCTGCGCATTAACGACGCGTA"));

// // //     // - Exercício 8
    
// // //     // Escreva uma função que receba uma string e retorne a string reversa. Em outras palavras, se o input da sua função for `"abcd"`, a saída deve ser `"dcba"` 

// // //     // function reversedString (string:string):string {
// // //     //   //     return string.split("").reverse().join("");
// // //     //   // }
// // //     // console.log(reversedString('abcd'))

// // //     // - Exercício 9
    
// // //     // Escreva uma função que valida se uma pessoa pode ser estudante da Labenu. Para isso a função deve receber como parâmetro as respostas dessas 4 perguntas:
    
// // //     // - Qual a sua idade?
// // //     // - Você possui ensino médio completo?
// // //     // - Quantas horas você tem disponível na semana para o curso?
// // //     // - O seu curso será o “integral” ou “noturno”?
    
// // //     // A função deve retornar um booleano (true ou false) que indica se a inscrição para o curso é válida, ou seja, se o usuário pode ou não fazer o curso da Labenu. A inscrição é válida quando todos os seguintes requisitos forem atendidos:
    
// // //     // - A pessoa possui mais de 18 anos;
// // //     // - Possui ensino médio completo;
// // //     // - Possui pelo menos 40 horas livres na semana para o curso integral e 20 horas para o curso noturno.

// // //     // function ableToStudyOnLabenu(age:number, highSchool: boolean, hoursAvailable:number, curso: string) {

// // //     //   //   if (curso === "integral") {
// // //     //   //     if (age >= 18 && highSchool === true && hoursAvailable >= 40) {
// // //     //   //       return true;
// // //       //     } else {
// // //       //       return false;
// // //       //     }
// // //       //   } else if (curso === "noturno") {
// // //       //     if (age >= 18 && highSchool === true && hoursAvailable >= 20) {
// // //       //       return true;
// // //       //     } else {
// // //       //       return false;
// // //       //     }
// // //       //   } else {
// // //       //     return "Nome do curso inserido incorretamente, tente novamente.";
// // //       //   }
// // //       // }
      
// // //       // console.log(ableToStudyOnLabenu(17, true, 40, "integral")); 
// // //       // console.log(ableToStudyOnLabenu(20, true, 40, "noturno")); 
// // //       // console.log(ableToStudyOnLabenu(20, true, 15, "noturno")); 
// // //       // console.log(ableToStudyOnLabenu(20, true, 15, "integrl"));

// // //       - **Exercício 1**
    
// // //     O Typescript é uma linguagem um pouco mais criteriosa que o Javascript, então vamos conhecer um pouco desses critérios.
    
// // //     a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um número a esta variável. O que acontece?

// // const minhaString: string = "valor"
// // // minhaString = 10  Erro porque só aceita string.
    
// // //     b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um tipo de valor?
// // let meuNumero : number = 54 
// // let meunumeroOuString: number | string //aceita números e strings
    
// // //     c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

// // //     `nome`, que é uma string;
    
// // //     `idade`, que é um número;
    
// // //     `corFavorita`, que é uma string.
// // type Pessoa = {
// //   nome: string,
// //   idade: number,
// //   corFavorita: string
// // }
// // Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um tipo Pessoa para garantir que todos os objetos tenham os mesmos campos.

// // const pessoa1: Pessoa = {
// //   nome: "Fulano",
// //   idade: 24,
// //   corFavorita: "rosa"
// // }

// // const pessoa2: Pessoa = {
// //   nome: "Fulana",
// //   idade: 43,
// //   corFavorita: "verde"
// // }

// // const pessoa3: Pessoa = {
// //   nome: "Fulane",
// //   idade: 29,
// //   corFavorita: "vermelho"
// // }

// // d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris. Utilize um `enum` para isso.

// // enum coresFavoritas {
// //   VERMELHO = "Vermelho",
// //   LARANJA = "Laranja",
// //   AMARELO = "Amarelo",
// //   VERDE = "Verde",
// //   AZUL = "Azul",
// //   AZULESCURO = "Azul Escuro",
// //   VIOLETA = "Violeta"}


// 3-Observe a função a seguir, escrita em JavaScript:

// function obterEstatisticas(numeros) {

//   const numerosOrdenados = numeros.sort(
//       (a, b) => a - b
//   )

//   let soma = 0

//   for (let num of numeros) {
//       soma += num
//   }

//   const estatisticas = {
//       maior: numerosOrdenados[numeros.length - 1],
//       menor: numerosOrdenados[0],
//       media: soma / numeros.length
//   }

//   return estatisticas
// }

// a) Quais são as entradas e saídas dessa função? Copie a função para um arquivo .ts e faça a tipagem desses parâmetros:  A entrada é um array de números, a saída são: o maior número, o menor número e a soma destes números.

// b) Quais outras variáveis compõem essa função? Explicite a tipagem de todas elas numerosOrdenados é um array de números colocados em ordem crescente
// // soma é um número resultado da soma de todos os números dentro do array que vem do parametro
// // estatisticas é um objeto contendo 3 numeros, sendo eles: o maior, o menor e a media dos números vindo do array do parametro

// c) Crie um *type* chamado **amostra** de dados, isto é, um objeto com as propriedades **numeros** e **obterEstatisticas**. Abaixo, temos um exemplo de objeto desse tipo, declarado em JavaScript:

// const amostraDeIdades = {

//   numeros: [21, 18, 65, 44, 15, 18],

//   obterEstatisticas: (numeros) => {...}
// }

// // const amostraDeIdades: Amostra = {

// //     numeros: [21, 18, 65, 44, 15, 18],

//     // obterEstatisticas: (numeros) => {...}
// // }


// - **Exercício 3**
    
//     Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.
    
//     Observe o seguinte array de posts:

//     const posts = [
//       {
//         autor: "Alvo Dumbledore",
//         texto: "Não vale a pena viver sonhando e se esquecer de viver"
//       },
//       {
//         autor: "Severo Snape",
//         texto: "Menos 10 pontos para Grifinória!"
//       },
//       {
//         autor: "Hermione Granger",
//         texto: "É levi-ô-sa, não levio-sá!"
//       },
//       {
//         autor: "Dobby",
//         texto: "Dobby é um elfo livre!"
//       },
//       {
//         autor: "Lord Voldemort",
//         texto: "Avada Kedavra!"
//       }
//     ]

//     a- Copie o código acima para um arquivo .ts depois:

// - crie um *type* para representar um post;
// - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.
// - Dica
    
//     Lembre-se da variável de tipo do typescript, que é uma descrição estrutural do comportamento de um objeto. Ou seja, o type define as propriedades e tipos que o objeto deve ter.

//     type Post = {
//       autor: string,
//       texto: string
//     }

//     const posts: typePosts[] = [
//       {
//         autor: "Alvo Dumbledore",
//         texto: "Não vale a pena viver sonhando e se esquecer de viver",
//       },
//       {
//         autor: "Severo Snape",
//         texto: "Menos 10 pontos para Grifinória!",
//       },
//       {
//         autor: "Hermione Granger",
//         texto: "É levi-ô-sa, não levio-sá!",
//       },
//       {
//         autor: "Dobby",
//         texto: "Dobby é um elfo livre!",
//       },
      
//       autor: "Lord Voldemort",
//       texto: "Avada Kedavra!",
  
//   ];

//     b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:

//     function buscarPostsPorAutor(posts: typePosts[], autorInformado: string):typePosts[] {
//       return posts.filter((post) => {
//         return post.autor === autorInformado;
//       });
//     }
    
//     // As entradas são um post(array de objetos) e o nome de um autor (string)
//     // A saída é o retorno de um filter (array) contendo o objeto que o nome do autor seja igual ao do parametro. Logo retorna um array de objetos (apena um objeto)


//     - **Exercício 4**
    
//     Na aula, vimos que os arquivos escritos em Typescript, com sua extensão `.ts` passam por um processo de conversão de typescript para Javascript para que possam ser lidos e executados. Este processo é chamado de **transpilação**. 
    
//     Com a biblioteca `typescript` instalada, temos acesso ao comando `tsc` no terminal. O `tsc` é o comando responsável por fazer a transpilação dos arquivos.
    
//     Abaixo, há um exemplo de código escrito em Typescript. 
    
//     a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários para responder as questões.
    
//     b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?
    
//     `exercicio-4.ts`
//     type pokemon = {
//       name: string,
//       types: string,
//       healthPoints: number
//     }
    
//     const pokemon1: pokemon = {
//       name: "Charmander",
//       types: "Fire",
//       healthPoints: 28
//     }
    
//     const pokemon2: pokemon = {
//       name: "Bulbasaur",
//       types: "Grass/Poison",
//       healthPoints: 31
//     }
    
//     const pokemon3: pokemon = {
//       name: "Squirtle",
//       types: "Water",
//       healthPoints: 35
//     }

//     c) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.

// d) Existe alguma maneira de **transpilar** múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// type pokemon = {
//   name: string;
//   types: string;
//   healthPoints: number;
// };

// const pokemon1: pokemon = {
//   name: "Charmander",
//   types: "Fire",
//   healthPoints: 28,
// };

// const pokemon2: pokemon = {
//   name: "Bulbasaur",
//   types: "Grass/Poison",
//   healthPoints: 31,
// };

// const pokemon3: pokemon = {
//   name: "Squirtle",
//   types: "Water",
//   healthPoints: 35,
// };

// // b) Criaria um script para ele no package.json: "exercicio4": "tsc && node ./build/exercicio4.js" e executaria.
// // c) Não teria mais necessidade de passar o nome do caminho, visto que a pasta SRC é a root.
// // d) Podemos rodar o comando tsc para transpilar vários arquivos ao colocar seus nomes separados por um espaço.


