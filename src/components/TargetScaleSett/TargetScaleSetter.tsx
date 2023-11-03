import { useContext, useState } from "react";
import { ScalerContext, ScalerContextType } from "../../context/ScalerContext";
import { NumberInput } from "@mantine/core";
export const TargetScaleSetter = () => {
  const { setTargetWeight } = useContext(ScalerContext) as ScalerContextType;

  const [pizzaCount, setPizzaCount] = useState(4);
  const [pizzaSize, setPizzaSize] = useState(250);

  return (
    <div>
      <NumberInput value={pizzaCount} label={"Number of Pizzas"} />{" "}
      <NumberInput value={pizzaSize} label={"Dough per pizza"} />
      {/* <input
        type="number"
        name=""
        id="pizzaCount"
        value={pizzaCount}
        onChange={(e) => {
          setPizzaCount(parseInt(e.target.value));
        }}
      />{" "}
      <input
        type="number"
        name=""
        id="pizzaSize"
        value={pizzaSize}
        onChange={(e) => {
          setPizzaSize(parseInt(e.target.value));
        }}
      /> */}
    </div>
  );
};
