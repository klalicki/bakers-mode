import { RecipeData } from "../types/RecipeDataTypes";

export const sampleData: RecipeData = {
  title: "My First Pizza",
  description: "This is a sample pizza recipe",
  ingredients: [
    {
      ingredientID: "0",
      friendlyName: "water",
    },
    {
      ingredientID: "1",
      friendlyName: "salt",
    },
    {
      ingredientID: "2",
      friendlyName: "sugar",
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
      friendlyName: "vital wheat gluten",
    },
    {
      ingredientID: "6",
      friendlyName: "all-purpose flour",
    },
  ],
  steps: [
    {
      title: "Wet ingredients",
      ingredients: [
        { qty: 552, ingredientID: "0" },
        { qty: 24, ingredientID: "1" },
        { qty: 9, ingredientID: "2" },
        { qty: 6, ingredientID: "3" },
      ],
      text: "combine these ingredients in stand mixer bowl, stir with dough hook.",
    },
    {
      title: "Flours",
      ingredients: [
        { qty: 880, ingredientID: "4" },
        { qty: 40, ingredientID: "5" },
        { qty: 40, ingredientID: "6" },
      ],
      text: "add flours to liquid, and mix with dough hook on speed 4 for 10 minutes. The dough will be relatively wet.",
    },
    {
      title: "Bulk Ferment",
      ingredients: [],
      text: "Cover bowl, and rise at room temperature for 2 hours.",
    },
    {
      title: "Scaling",
      ingredients: [],
      text: "Scale dough to individual pizzas, and put in oiled containers with lids",
    },
    {
      title: "Proofing",
      ingredients: [],
      text: "Proof dough for at least 30 minutes while the oven preheats",
    },
  ],
  cookingNotes: [
    "dunk each ball of dough in 00 flour before stretching.",
    "launch directly onto pizza stone.",
    "cooks well at 650F for 5-6 minutes.",
  ],
};
