import{User } from "../model/User";
import{ BaseDatabase} from "./BaseDatabase";


export class UserDatabase extends BaseDatabase{

  public async creatUser (user:User): Promise<string>{

    await this.getConnection().insert ({
    id: user.getId(),
    name: user.getName(),
    email: user.getEmail(),
    password: user.getPassword()

  }).into("user_cookenu")
  return `Usuario ${user.getName()} cadastro com sucesso`

}
public async getUserByEmail(email: string): Promise<User| undefined>{
  const result = await this.getConnection()
  .select("*")
  .from ("user_cookenu")
  .where ({email:email})

  if (!result.length){
    return undefined;

  }
  return new User(result[0].id, result[0].name, result[0].email, result[0].password);
}
}