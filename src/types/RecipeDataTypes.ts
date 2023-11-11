export type RecipeIngredient = {
  ingredientID: string;
  friendlyName: string;
};

export type RecipeIngredientMeasured = {
  qty: number;
  ingredientID: string;
};

export type RecipeStep = {
  title: string;
  ingredients: RecipeIngredientMeasured[];
  text: string;
};

export type RecipeData = {
  title: string;
  description: string;
  ingredients: RecipeIngredient[];
  steps: RecipeStep[];
  cookingNotes: string[];
};

export const blankRecipe: RecipeData = {
  title: "",
  description: "",
  ingredients: [],
  steps: [],
  cookingNotes: [],
};
