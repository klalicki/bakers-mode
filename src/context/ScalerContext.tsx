import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { sampleData } from "../data/sampleData";
import {
  ZRecipeData,
  RecipeData,
  RecipeIngredient,
  blankRecipe,
} from "../types/RecipeDataTypes";

export type ScalerContextType = {
  scaledRecipe: RecipeData;
  // validateAndLoad: (newRecipe: any) => void;
  setTargetWeight: (newWeight: number) => void;
  targetWeight: number;
  ingredientList: RecipeIngredient[];
  schemaErrorText: string;
  loadFromJSON: (jsonData: string) => void;
  isRecipeLoaded: boolean;
};

export const ScalerContext = createContext<ScalerContextType | null>(null);

export const ScalerWrapper = (props: PropsWithChildren) => {
  const [recipe, setRecipe] = useState(blankRecipe);
  const [scaledRecipe, setScaledRecipe] = useState<RecipeData>(blankRecipe);
  const [recipeWeight, setRecipeWeight] = useState(0);
  const [targetWeight, setTargetWeight] = useState(3102);
  const [ingredientList, setIngredientList] = useState<RecipeIngredient[]>([]);
  const [schemaErrorText, setSchemaErrorText] = useState("");
  const [isRecipeLoaded, setIsRecipeLoaded] = useState(false);

  const loadFromJSON = (jsonData: string) => {
    try {
      const newDataObj = JSON.parse(jsonData);
      validateAndLoad(newDataObj);
      // setSchemaErrorText("");
    } catch {
      setSchemaErrorText(
        "Error loading the recipe file. File is not readable as a JSON file"
      );
    }
  };

  const validateAndLoad = (newData: any) => {
    try {
      ZRecipeData.parse(newData);
      loadRecipe(newData);
    } catch (error) {
      // the new data does not fit the expected schema :(
      setSchemaErrorText(
        "Error loading the recipe file. File is not a valid recipe."
      );
      // console.log(error);
      // TODO: add a visible error when the data does not match
    }
  };

  // function that loads a new recipe into the context object
  // handles calculating the total weight of the original recipe for the scaling function

  const loadRecipe = (newRecipe: RecipeData) => {
    setSchemaErrorText("");
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
    setIsRecipeLoaded(true);
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
    validateAndLoad(sampleData);
    scaleRecipe();
    console.log(scaledRecipe);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [recipe, targetWeight]);
  return (
    <ScalerContext.Provider
      value={{
        scaledRecipe,
        // validateAndLoad,
        setTargetWeight,
        targetWeight,
        ingredientList,
        schemaErrorText,
        loadFromJSON,
        isRecipeLoaded,
      }}
    >
      {props.children}
    </ScalerContext.Provider>
  );
};
