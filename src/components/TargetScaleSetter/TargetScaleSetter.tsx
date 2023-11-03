import { useContext, useState } from "react";
import { ScalerContext, ScalerContextType } from "../../context/ScalerContext";
export const TargetScaleSetter = () => {
  const { setTargetWeight } = useContext(ScalerContext) as ScalerContextType;

  const [pizzaCount, setPizzaCount] = useState(4);
  const [pizzaSize, setPizzaSize] = useState(250);

  return (
    <div>
      <input type="number" name="" id="pizzaCount" value={pizzaCount} />{" "}
      <input type="number" name="" id="pizzaSize" value={pizzaSize} />
    </div>
  );
};
