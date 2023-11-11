import { useContext } from "react";
import { ScalerContext, ScalerContextType } from "../../context/ScalerContext";
import { RecipeStepDisplay } from "../RecipeStepDisplay/RecipeStepDisplay";
import { TargetScaleSetter } from "../TargetScaleSetter/TargetScaleSetter";

export const RecipeViewer = () => {
  const { scaledRecipe, targetWeight, ingredientList } = useContext(
    ScalerContext
  ) as ScalerContextType;

  const stepCount = scaledRecipe.steps.length;
  return (
    <section className="p-4 flex flex-col gap-4">
      <h1 className=" text-xl font-bold focus">{scaledRecipe.title}</h1>
      <p>{scaledRecipe.description}</p>
      <TargetScaleSetter />
      <h2>Steps</h2>

      <ol className="flex flex-col gap-3">
        {scaledRecipe.steps.map((step, index) => {
          return (
            <li tabIndex={0} className="focus:outline-8  focus:outline-red-600">
              <RecipeStepDisplay
                stepData={step}
                ingredientList={ingredientList}
                stepNumber={index + 1}
                totalSteps={stepCount}
              />
            </li>
          );
        })}
      </ol>
      <h2>Cooking Notes</h2>
      <ul>
        {scaledRecipe.cookingNotes.map((item) => {
          return <li>{item}</li>;
        })}
      </ul>
    </section>
  );
};
