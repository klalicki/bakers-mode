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
    <article className=" w-full border p-2">
      <h2>Scaling</h2>
      <div className="flex gap-2 flex-wrap">
        <NumberInput
          className=" w-60"
          value={pizzaCount}
          label={"Number of Pizzas"}
          onChange={setPizzaCount}
        />{" "}
        <NumberInput
          className=" w-60"
          value={pizzaSize}
          label={"Dough per pizza"}
          onChange={setPizzaSize}
        />
      </div>

      <h2>
        total weight:
        {targetWeight}
      </h2>
    </article>
  );
};
