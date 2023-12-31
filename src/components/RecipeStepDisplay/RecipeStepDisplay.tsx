import type { RecipeIngredient, RecipeStep } from "../../types/RecipeDataTypes";
const formatWeight = (value: any) => {
  if (value < 20) {
    return value.toFixed(1);
  } else {
    return Math.round(value);
  }
};

export const RecipeStepDisplay = ({
  stepData,
  ingredientList,
  stepNumber,
  totalSteps,
}: {
  stepData: RecipeStep;
  ingredientList: RecipeIngredient[];
  stepNumber: number;
  totalSteps: number;
}) => {
  return (
    <article className="border-2 ">
      <h3 className=" text-lg p-2 bg-slate-800 text-white font-bold">
        {stepNumber} of {totalSteps}: {stepData.title}
      </h3>
      <div className="flex flex-wrap">
        {stepData.ingredients.length > 0 && (
          <section className="p-2 flex-shrink flex-auto basis-full sm:basis-1/2">
            <h4 className="font-bold">Ingredients</h4>
            <ul>
              {stepData.ingredients.map((item) => {
                const ingredientName = ingredientList.find((ing) => {
                  return ing.ingredientID === item.ingredientID;
                })?.friendlyName;

                return (
                  <li>
                    {formatWeight(item.qty)}g {ingredientName}
                  </li>
                );
              })}
            </ul>
          </section>
        )}
        <section className="p-2 flex-shrink basis-full sm:basis-1/2">
          <h4 className="font-bold">Instructions</h4>
          <p>{stepData.text}</p>
        </section>
      </div>
    </article>
  );
};
