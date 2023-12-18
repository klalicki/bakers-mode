import { useContext, useEffect, useState } from "react";
import { ScalerContext, ScalerContextType } from "../../context/ScalerContext";
import { NumberInput } from "@mantine/core";
export const TargetScaleSetter = () => {
  const { setTargetWeight, targetWeight, isRecipeLoaded } = useContext(
    ScalerContext
  ) as ScalerContextType;

  const [unitCount, setUnitCount] = useState<string | number>(4);
  const [unitWeight, setUnitWeight] = useState<string | number>(250);
  const [percentOver, setPercentOver] = useState<string | number>(0);

  useEffect(() => {
    const calculatedWeight =
      ((unitWeight as number) *
        (unitCount as number) *
        (100 + (percentOver as number))) /
      100;
    setTargetWeight(Math.round(calculatedWeight));
  }, [unitCount, unitWeight, setTargetWeight, percentOver]);
  return (
    <article className=" w-full border p-2">
      <h2 className="text-xl">Scaling</h2>
      <div className="flex gap-2 flex-wrap">
        <NumberInput
          className=" w-60"
          value={unitCount}
          label={"Number of units (pizza, loaf, etc)"}
          onChange={setUnitCount}
          disabled={!isRecipeLoaded}
        />{" "}
        <NumberInput
          className=" w-60"
          value={unitWeight}
          label={"Dough Weight per unit (g)"}
          onChange={setUnitWeight}
          disabled={!isRecipeLoaded}
        />
        <NumberInput
          className=" w-40"
          min={0}
          max={10}
          step={0.1}
          decimalScale={1}
          value={percentOver}
          label={"Percent Overage"}
          onChange={setPercentOver}
          disabled={!isRecipeLoaded}
        />
      </div>
      <p className="w-full text-right mt-2" aria-live="polite">
        total recipe weight: {targetWeight}g
      </p>
      {/* <div>Precision Mode: to be implemented later</div> */}
    </article>
  );
};
