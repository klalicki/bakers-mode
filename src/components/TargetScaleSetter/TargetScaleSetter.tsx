import { useContext, useEffect, useState } from "react";
import { ScalerContext, ScalerContextType } from "../../context/ScalerContext";
import { NumberInput } from "@mantine/core";
export const TargetScaleSetter = () => {
  const { setTargetWeight, targetWeight } = useContext(
    ScalerContext
  ) as ScalerContextType;

  const [unitCount, setUnitCount] = useState<string | number>(4);
  const [unitWeight, setUnitWeight] = useState<string | number>(250);

  useEffect(() => {
    setTargetWeight((unitWeight as number) * (unitCount as number));
  }, [unitCount, unitWeight, setTargetWeight]);
  return (
    <article className=" w-full border p-2">
      <h2>Scaling</h2>
      <div className="flex gap-2 flex-wrap">
        <NumberInput
          className=" w-72"
          value={unitCount}
          label={"Number of units (pizza, loaf, etc)"}
          onChange={setUnitCount}
        />{" "}
        <NumberInput
          className=" w-72"
          value={unitWeight}
          label={"Dough Weight per unit (g)"}
          onChange={setUnitWeight}
        />
      </div>

      <p aria-live="polite">total weight: {targetWeight}g</p>
    </article>
  );
};
