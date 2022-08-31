export type recipe = {
   id: string
   titulo: string
   descricao: string
   idUsuario: string
   dataCriacao: number
}

export type user = {
   id: string
   name: string
   email: string
   password: string
   recipes?: recipe[]
}