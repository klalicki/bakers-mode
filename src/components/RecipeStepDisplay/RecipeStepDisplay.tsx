import type { RecipeStep } from "../../types/RecipeDataTypes";

const formatWeight = (value: any) => {
  if (value < 20) {
    return value.toFixed(1);
  } else {
    return Math.round(value);
  }
};

export const RecipeStepDisplay = ({ stepData }: { stepData: RecipeStep }) => {
  return (
    <article>
      <h2>{stepData.title}</h2>
      <ul>
        {stepData.ingredients.map((item) => {
          return (
            <li>
              {formatWeight(item.qty)}g {item.name}
            </li>
          );
        })}
      </ul>
    </article>
  );
};
