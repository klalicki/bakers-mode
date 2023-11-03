import { useContext, useEffect, useState } from "react";
import { ScalerContext, ScalerContextType } from "../../context/ScalerContext";
import { NumberInput } from "@mantine/core";
export const TargetScaleSetter = () => {
  const { setTargetWeight } = useContext(ScalerContext) as ScalerContextType;

  const [pizzaCount, setPizzaCount] = useState<string | number>(4);
  const [pizzaSize, setPizzaSize] = useState<string | number>(250);
  const [calculatedTargetWeight, setCalculatedTargetWeight] =
    useState<number>(1000);

  useEffect(() => {
    setCalculatedTargetWeight((pizzaSize as number) * (pizzaCount as number));
  }, [pizzaCount, pizzaSize]);
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
        {calculatedTargetWeight}
      </h2>
    </div>
  );
};
