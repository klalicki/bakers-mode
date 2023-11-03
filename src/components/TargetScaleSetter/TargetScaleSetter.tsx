import { useContext, useEffect, useState } from "react";
import { ScalerContext, ScalerContextType } from "../../context/ScalerContext";
import { NumberInput } from "@mantine/core";
export const TargetScaleSetter = () => {
  const { setTargetWeight, targetWeight } = useContext(
    ScalerContext
  ) as ScalerContextType;

  const [pizzaCount, setPizzaCount] = useState<string | number>(4);
  const [pizzaSize, setPizzaSize] = useState<string | number>(250);

  useEffect(() => {
    setTargetWeight((pizzaSize as number) * (pizzaCount as number));
  }, [pizzaCount, pizzaSize, setTargetWeight]);
  return (
    <div className="flex gap-4">
      <NumberInput
        value={pizzaCount}
        label={"Number of Pizzas"}
        onChange={setPizzaCount}
      />{" "}
      <NumberInput
        value={pizzaSize}
        label={"Dough per pizza"}
        onChange={setPizzaSize}
      />
      <h2>
        total weight:
        {targetWeight}
      </h2>
    </div>
  );
};
