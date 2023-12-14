import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { sampleData } from "../data/sampleData";
import { z } from "zod";
import {
  RecipeData,
  RecipeIngredient,
  blankRecipe,
} from "../types/RecipeDataTypes";

export type ScalerContextType = {
  scaledRecipe: RecipeData;
  loadRecipe: (newRecipe: RecipeData) => void;
  setTargetWeight: (newWeight: number) => void;
  targetWeight: number;
  ingredientList: RecipeIngredient[];
};

export const ScalerContext = createContext<ScalerContextType | null>(null);

export const ScalerWrapper = (props: PropsWithChildren) => {
  const [recipe, setRecipe] = useState(blankRecipe);
  const [scaledRecipe, setScaledRecipe] = useState<RecipeData>(blankRecipe);
  const [recipeWeight, setRecipeWeight] = useState(0);
  const [targetWeight, setTargetWeight] = useState(3102);
  const [ingredientList, setIngredientList] = useState<RecipeIngredient[]>([]);

  // function that loads a new recipe into the context object
  // handles calculating the total weight of the original recipe for the scaling function
  const loadRecipe = (newRecipe: RecipeData) => {
    //add ingredient dictionary to context
    setIngredientList(newRecipe.ingredients);
    // calculate the total weight of the original recipe
    const totalWeight = newRecipe.steps
      .map((step) => {
        // extract the ingredient quantities from each step
        return step.ingredients.map((ingredient) => {
          return ingredient.qty;
        });
      })
      .flat()
      .reduce((item1, item2) => {
        return item1 + item2;
      });
    setRecipe(newRecipe);
    setRecipeWeight(totalWeight);
    scaleRecipe();
    // console.log(scaledRecipe);
  };
  // scales the recipe to the new target weight and saves it to scaledRecipe
  const scaleRecipe = () => {
    const newSteps = recipe.steps.map((step) => {
      const newIngredients = step.ingredients.map((ingredient) => {
        return {
          ingredientID: ingredient.ingredientID,
          qty: (ingredient.qty / recipeWeight) * targetWeight,
        };
      });
      return { ...step, ingredients: newIngredients };
    });
    setScaledRecipe({ ...recipe, steps: newSteps });
  };
  useEffect(() => {
    loadRecipe(sampleData);
    scaleRecipe();
    console.log(scaledRecipe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipe, targetWeight]);
  return (
    <ScalerContext.Provider
      value={{
        scaledRecipe,
        loadRecipe,
        setTargetWeight,
        targetWeight,
        ingredientList,
      }}
    >
      {props.children}
    </ScalerContext.Provider>
  );
};
