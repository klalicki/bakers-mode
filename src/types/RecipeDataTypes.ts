export type RecipeIngredient = {
  qty: number;
  name: string;
};

export type RecipeStep = {
  title: string;
  ingredients: RecipeIngredient[];
  text: string;
};

export type RecipeData = {
  title: string;
  description: string;
  steps: RecipeStep[];
  cookingNotes: string[];
};

export const blankRecipe: RecipeData = {
  title: "",
  description: "",
  steps: [],
  cookingNotes: [],
};
