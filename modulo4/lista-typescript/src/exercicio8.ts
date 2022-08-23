// Escreva uma função que pergunta ao usuário a data de nascimento de uma pessoa (ex.: “24/04/1993”, e a data de emissão da sua carteira de identidade (ex.: “07/11/2015”). A função deve retornar um booleano que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

// - Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos

const currentDate: number = new Date().getTime();

function idCardNeedsRenewal (birthDate: string, issuanceIdCard: string): boolean {
  // Descobrindo a idade
  const dateOfBirth: number = new Date(birthDate).getTime();
  const idade: number = Math.floor((currentDate - dateOfBirth) / 31536000000);  //Transformando de milisegundos para ano

  // Descobrindo quanto tempo a pessoa está sem renovar a carteira
  const dateOfIssuance: number = new Date(issuanceIdCard).getTime();
  const timeWithoutRenewal: number = Math.floor((currentDate - dateOfIssuance) / 31536000000); //Transformando de milisegundos para ano

  if (idade <= 20 && timeWithoutRenewal >= 5) {
    return true;
  } else if (idade > 20 && idade <= 50 && timeWithoutRenewal >= 10) {
    return true;
  } else if (idade > 50 && timeWithoutRenewal >= 15) {
    return true;
  } else {
    return false;
  }
}

console.log(idCardNeedsRenewal("1995/11/30", "2010/10/20"));