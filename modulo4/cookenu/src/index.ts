import app  from "./app";
import { UserEndpoint} from "./endpoints/User";
import { Recipe } from "./model/Recipe";

const user = new UserEndpoint()
app.post ("/user", user.createUser )
app.post ("/login", user.login )
app.get("/user/profile", user.);
app.get("/user/:user_id", user.);

//Recipes
app.post("/recipe", Recipe.createRecipe);
app.get("/recipe/:recipe_id", recipe.getReciveById);