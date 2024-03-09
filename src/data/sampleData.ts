// import { RecipeData } from "../types/RecipeDataTypes";

export const sampleData = {
  title: "My First Pizza",
  description:
    "This is a basic pizza crust that works well in a pizza oven or regular oven",
  ingredients: [
    {
      ingredientID: "0",
      friendlyName: "water",
    },
    {
      ingredientID: "1",
      friendlyName: "Olive Oil",
    },
    {
      ingredientID: "2",
      friendlyName: "Salt",
    },
    {
      ingredientID: "3",
      friendlyName: "instant yeast",
    },
    {
      ingredientID: "4",
      friendlyName: "00 Pizza Flour",
    },
    {
      ingredientID: "5",
      friendlyName: "bread flour",
    },
  ],
  steps: [
    {
      title: "Dissolve Yeast",
      ingredients: [
        { qty: 410, ingredientID: "0" },

        { qty: 3, ingredientID: "3" },
      ],
      text: "combine these ingredients in stand mixer bowl, whisk to combine",
    },
    {
      title: "Flours",
      ingredients: [
        { qty: 450, ingredientID: "4" },
        { qty: 140, ingredientID: "5" },
      ],
      text: "Add flours. Mix on low speed until shaggy.",
    },
    {
      title: "Salt",
      ingredients: [{ qty: 14, ingredientID: "2" }],
      text: "Add salt. Mix on medium speed until fully incorporated into the dough.",
    },
    {
      title: "Oil",
      ingredients: [{ qty: 20, ingredientID: "1" }],
      text: "Add oil with mixer running on medium speed, and mix until gluten is fully developed.",
    },
    {
      title: "Rest",
      ingredients: [],
      text: "Cover bowl, and rest at room temperature for 20 minutes",
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
