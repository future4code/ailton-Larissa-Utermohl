export class Recipe {
  constructor(
    private recipe_id: string,
    private recipe_title: string,
    private recipe_description: string,
    private created_at: string
  ) {}

  public getId() {
    return this.recipe_id;
  }

  public getTitle() {
    return this.recipe_title;
  }

  public getDescription() {
    return this.recipe_description;
  }

  public getAuthorId() {
    return this.created_at;
  }
}