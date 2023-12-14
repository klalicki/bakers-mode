import { z } from "zod";

export const ZRecipeIngredient = z.object({
  ingredientID: z.string(),
  friendlyName: z.string(),
});

export type RecipeIngredient = z.infer<typeof ZRecipeIngredient>;

export const ZRecipeIngredientMeasured = z.object({
  qty: z.number(),
  ingredientID: z.string(),
});

export type RecipeIngredientMeasured = z.infer<
  typeof ZRecipeIngredientMeasured
>;

export const ZRecipeStep = z.object({
  title: z.string(),
  ingredients: z.array(ZRecipeIngredientMeasured),
  text: z.string(),
});
export type RecipeStep = z.infer<typeof ZRecipeStep>;

export const ZRecipeData = z.object({
  title: z.string(),
  description: z.string(),
  ingredients: z.array(ZRecipeIngredient),
  steps: z.array(ZRecipeStep),
  cookingNotes: z.array(z.string()),
});

export type RecipeData = z.infer<typeof ZRecipeData>;

export const blankRecipe: RecipeData = {
  title: "",
  description: "",
  ingredients: [],
  steps: [],
  cookingNotes: [],
};
