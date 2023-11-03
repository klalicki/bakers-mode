import type { RecipeStep } from "../../types/RecipeDataTypes";
import { Card } from "@mantine/core";
const formatWeight = (value: any) => {
  if (value < 20) {
    return value.toFixed(1);
  } else {
    return Math.round(value);
  }
};

export const RecipeStepDisplay = ({ stepData }: { stepData: RecipeStep }) => {
  return (
    <article className="border-2 p-2">
      <h2 className=" text-lg">{stepData.title}</h2>
      <ul>
        {stepData.ingredients.map((item) => {
          return (
            <li>
              {formatWeight(item.qty)}g {item.name}
            </li>
          );
        })}
      </ul>
      <p>{stepData.text}</p>
    </article>
  );
};
