import { PropsWithChildren, createContext, useState } from "react";
import { sampleData } from "../data/sampleData";
const ScalerContext = createContext({});

export const ScalerWrapper = (props: PropsWithChildren) => {
  const [recipe, setRecipe] = useState({});
  const [scaledRecipe, setScaledRecipe] = useState({});

  const loadRecipe = (newRecipe: any) => {
    console.log(newRecipe);
  };

  loadRecipe(sampleData);
  return (
    <ScalerContext.Provider value={{ scaledRecipe, loadRecipe }}>
      {props.children}
    </ScalerContext.Provider>
  );
};
