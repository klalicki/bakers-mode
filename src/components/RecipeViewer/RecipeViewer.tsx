import { useContext } from "react";
import { ScalerContext, ScalerContextType } from "../../context/ScalerContext";
import { RecipeStepDisplay } from "../RecipeStepDisplay/RecipeStepDisplay";

export const RecipeViewer = () => {
  const { scaledRecipe, targetWeight, ingredientList } = useContext(
    ScalerContext
  ) as ScalerContextType;

  return (
    <section className="p-4 flex flex-col gap-4">
      <h2>{scaledRecipe.title}</h2>
      <h3>{scaledRecipe.description}</h3>
      <p>target weight: {targetWeight}</p>
      <h3>Steps</h3>
      {scaledRecipe.steps.map((step) => {
        return (
          <RecipeStepDisplay stepData={step} ingredientList={ingredientList} />
        );
      })}
      <h3>Cooking Notes</h3>
      <ul>
        {scaledRecipe.cookingNotes.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </section>
  );
};
