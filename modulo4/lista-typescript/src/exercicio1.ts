// - Exercício 1
    
//     Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:

//     "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 
//     Entradas/Saídas

// input: string, string
// output: string

// function printBirthDate(name: string, birthDate: string): string {
// const date = birthDate.split("/")
// const day = date[0]
// const month = date[1]
// const year = date[2]
// return `Olá me chamo ${name}, nasci no dia ${day} do mês ${month} do ano de ${year}` 
// }
// console.log( printBirthDate( "Maria", "20/10/1990"))

// ****OU 

// function stringNameAndBirthDate (name: string, date: string): string {
//   return `Olá me chamo ${name}, nasci no dia ${date.slice(0,2)} do mês de ${date.slice(3, 5)} do ano de ${date.slice(6, 10)}`
// }

// console.log(stringNameAndBirthDate('Joao', '30/11/1995'))