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
}: {
  stepData: RecipeStep;
  ingredientList: RecipeIngredient[];
}) => {
  return (
    <article className="border-2 ">
      <h3 className=" text-lg p-2 bg-slate-800 text-white font-bold">
        {stepData.title}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2">
        {stepData.ingredients.length > 0 && (
          <section className="p-2 flex-auto ">
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
        <section className="p-2 flex-1">
          <h4 className="font-bold">Instructions</h4>
          <p>{stepData.text}</p>
        </section>
      </div>
    </article>
  );
};
