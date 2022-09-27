import { Request, Response } from "express";
import { UserDatabase } from "../Data/UserDatabase"
import { User } from "../model/User";
import { Authenticator } from "../services/Authenticator";
import GenerateId from "../services/GenerateId";
import { HashManager } from "../services/HashManager";

export class RecipeEndpoint {
  public async createRecipe(req: Request, res: Response) {
    try {
      const { recipe_title, recipe_description } = req.body;

      if (!recipe_title || !recipe_description) {
        throw new Error("Todos os campos são obrigatórios!!");
      }

      const userDataBase = new UserDatabase();


      // gerar o hash da senha

      const hashSenha = await new HashManager().hashDaSenha(password);
      
      // gerar token do usuario

      const token = new Authenticator().generate({ id });
      res.status(201).send({ message: response, token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new Error("Valores devem ser passados");
      }
      const userData = new UserDatabase();

      const emailExist = await userData.getUserByEmail(email);

      if (!emailExist) {
        throw new Error("As informações estão incorretas");
      }

      const correctPassword = await new HashManager().compare(
        password,
        emailExist.getPassword()
      );

      if (!correctPassword) {
        throw new Error("As informações estão incorretas");
      }

      const token = new Authenticator().generate({
        id: emailExist.getId(),
      });

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(error.StatusCode || 500).send({ message: error.message });
    }
  }
}

