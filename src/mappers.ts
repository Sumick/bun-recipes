import { Recipe, RecipePreview } from "./types.ts";

export const mapRecipeToRecipePreview = (recipe: Recipe): RecipePreview => ({
  name: recipe.name,
  imageSrc: recipe.imageSrc,
});
