// import { RecipeData } from "../types/RecipeDataTypes";

export const sampleData = {
  title: "Gluten Free Pizza",
  description: "This is a gluten-free crust using Caputo Fioreglut",
  ingredients: [
    {
      ingredientID: "0",
      friendlyName: "water",
    },
    {
      ingredientID: "1",
      friendlyName: "Gluten-Free Pizza Flour",
    },
    {
      ingredientID: "2",
      friendlyName: "Instant Yeast",
    },
    {
      ingredientID: "3",
      friendlyName: "Oil",
    },
    {
      ingredientID: "4",
      friendlyName: "Salt",
    },
  ],
  steps: [
    {
      title: "Mix most of the ingredients",
      ingredients: [
        { qty: 1000, ingredientID: "1" },

        { qty: 800, ingredientID: "0" },
        { qty: 15, ingredientID: "2" },
        { qty: 35, ingredientID: "4" },
      ],
      text: "Using paddle, mix on medium speed for 5 minutes",
    },
    {
      title: "Oil",
      ingredients: [{ qty: 35, ingredientID: "3" }],
      text: "Add oil, and mix for 2 minutes on low speed.",
    },

    {
      title: "Rest",
      ingredients: [],
      text: "Cover bowl, and rest at room temperature for 30 minutes",
    },
    {
      title: "Scaling",
      ingredients: [],
      text: "Scale dough to individual pizzas, and put in oiled containers with lids",
    },
    {
      title: "Proofing",
      ingredients: [],
      text: "Proof dough for about 4 hours at room temp",
    },
  ],
  cookingNotes: [
    "dunk each ball of dough in 00 flour before stretching.",
    "launch directly onto pizza stone.",
    "cooks well at 650F for 5-6 minutes.",
  ],
};
