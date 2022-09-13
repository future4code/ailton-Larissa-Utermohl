import { Request, Response } from "express"
import { connection } from "../data/connection"
import { recipe } from "../types"

export async function getAllRecipes(req: Request,res: Response): Promise<void> {
   try {

      // paginacao de 2 elementos
      // pagina 1 offset = 0
      // pagina 2 offset = 2
      // pagina 3 offset = 4
      // pagina 4 offset = 6


      // nao colocar a tipagem , pois da erro se vier undefined
      let nome = req.query.nome
      let ordernacao = req.query.order
      
      let pagina = req.query.pagina
      const produtosPorPagina = 2

      // ProdutosPorPagina são limitados pelo BackEnd (2 produtos por página)
      // Feito isso , a gente usa na formula o total de produtos vezes a pagina - 1
      // o -1 é usado para limitar os produtos entre os multiplos do produtoPorPagina
      // produtosPorPagina = 2 , offset => 0 , 2, 4 ,6 , 8 ,10 ,etc...
      const offset = produtosPorPagina * (Number(pagina) - 1)
     
      
      // verifica se vem undefined , se vier , a variavel recebe uma string vazia e retorna todas as receitas
      if(!nome){
         nome = ""
      }

      // verifica se vem undefined e por padrão usamos o ASC
      if(!ordernacao){
         ordernacao = "asc"
      }

      
      // const result = await connection("aula49_recipes")
      //                .where("title","like",`%${nome}%`)
      //                .orderBy("title",`${ordernacao}`)
      //                .limit(produtosPorPagina)
      //                .offset(offset)
      
   
         // const result = await connection.raw(`
         //    SELECT * FROM aula49_recipes WHERE TITLE LIKE "%${nome}%"
         //    ORDER BY title ${ordernacao}
         //    limit ${produtosPorPagina}
         //    offset ${offset}
         // `)

         // const result = await connection.raw(`
         //    SELECT * FROM aula49_recipes where id =1
         // `)

         const result = await connection("aula49_recipes").where({id:1})

         // console.log(result[0])

         if(!result.length){
            res.statusCode = 404
            throw new Error(`Não consegui achar a receita com nome -> ${nome}`)
         }

         const recipes = result.map((recipe:any)=>{
            const type:recipe={
               id:recipe.id,
               titulo: recipe.title,
               descricao: recipe.description,
               idUsuario: recipe.userId,
               dataCriacao: recipe.createdAt
            }

            return type;
         })

        
      res.status(200).send(result)
      
   } catch (error:any) {
      res.status(res.statusCode || 500).send({message:error.message})
   }
}


// limit 2
// offset 2 - select * from tabela mas vai ignorar os 2 primeiros valores
// 1,2,3,4,5,6,7,8
// 3,4,
// 5,6,
// 7,8