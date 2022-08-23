// - Exercício 5
    
//     Considerando o `array` de usuários abaixo, crie uma função que receba este `array` como parâmetro e retorne uma lista com apenas os emails dos usuários “admin”.

//     [
//       {name: "Rogério", email: "roger@email.com", role: "user"},
//       {name: "Ademir", email: "ademir@email.com", role: "admin"},
//       {name: "Aline", email: "aline@email.com", role: "user"},
//       {name: "Jéssica", email: "jessica@email.com", role: "user"},  
//       {name: "Adilson", email: "adilson@email.com", role: "user"},  
//       {name: "Carina", email: "carina@email.com", role: "admin"}  ]

// input: type[]
// output: string[]
// Saída esperada

// [	"ademir@email.com", "carina@email.com" ]

enum ROLE{
  USER = "user",
  ADMIN = "admin"
}

type User ={
  name: string,
  email: string,
  role: ROLE
}
const users: User[] = [
  {name: "Rogério", email: "roger@email.com", role: ROLE.USER},
{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
{name: "Aline", email: "aline@email.com", role: ROLE.USER},
{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
]

function getAdmins (lista: User[]): string[] {
const admins = lista.filter((item: User)=>{
return item.role === ROLE.ADMIN
})
const resultado = admins.map((item: User) => {
  return item.email
})

return resultado
}

console.log(getAdmins(users))
      
