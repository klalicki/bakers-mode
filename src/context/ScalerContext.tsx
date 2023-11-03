import { PropsWithChildren, createContext, useState } from "react";
import { sampleData } from "../data/sampleData";
import { RecipeData, blankRecipe } from "../types/RecipeDataTypes";
const ScalerContext = createContext({});

export const ScalerWrapper = (props: PropsWithChildren) => {
  const [recipe, setRecipe] = useState(blankRecipe);
  const [scaledRecipe, setScaledRecipe] = useState<RecipeData>(blankRecipe);

  const loadRecipe = (newRecipe: RecipeData) => {
    const tempRecipe = { ...newRecipe };
    console.log(tempRecipe);
  };

  loadRecipe(sampleData);
  return (
    <ScalerContext.Provider value={{ scaledRecipe, loadRecipe }}>
      {props.children}
    </ScalerContext.Provider>
  );
};
