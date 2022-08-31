import { Request, Response } from "express";
import { requisicaoCep } from "../services/requisicaoCep";
import { Usuario } from "../types/usuario";
import { inserirUsuario } from "../data/inserirUsuario";
import axios from "axios";

export async function criarEndereco(req: Request, res: Response) {
    try {
        const cep = req.params.cep

        if(!cep){
            res.statusCode = 404
            throw new Error("Cep nao foi passado.")
        }
       
        axios.get(`https://https://viacep.com.br/ws/${cep}/json/`)
        // buscar informacoes de endereco atraves do cep
       const consultaCep = await requisicaoCep(cep);

       if(!consultaCep){
           res.statusCode = 404
           throw new Error(`Não existe cep com o numero -> ${cep}`)
       }

       const usuarioCadastro:Usuario={
           bairro:consultaCep.bairro,
           cidade:consultaCep.localidade,
           estado:consultaCep.uf,
           logradouro:consultaCep.logradouro
       }

        // inserir no banco as informacoes
      await inserirUsuario(usuarioCadastro)

      res.status(201).send("Pessoa cadastrada com sucesso!")
        
    } catch (error: any) {
        res.status(res.statusCode || 500).send({ message: error.message})
    }
}