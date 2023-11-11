import { useContext } from "react";
import { ScalerContext, ScalerContextType } from "../../context/ScalerContext";
import { RecipeStepDisplay } from "../RecipeStepDisplay/RecipeStepDisplay";

export const RecipeViewer = () => {
  const { scaledRecipe, targetWeight, ingredientList } = useContext(
    ScalerContext
  ) as ScalerContextType;

  return (
    <section className="p-4 flex flex-col gap-4">
      <h1>{scaledRecipe.title}</h1>
      <p>{scaledRecipe.description}</p>
      <p>target weight: {targetWeight}</p>
      <h2>Steps</h2>
      {scaledRecipe.steps.map((step) => {
        return (
          <RecipeStepDisplay stepData={step} ingredientList={ingredientList} />
        );
      })}
      <h2>Cooking Notes</h2>
      <ul>
        {scaledRecipe.cookingNotes.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </section>
  );
};
