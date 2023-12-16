import { useContext } from "react";
import { ScalerContext, ScalerContextType } from "../../context/ScalerContext";
import { RecipeViewer } from "../RecipeViewer/RecipeViewer";
// RecipeViewerWrapper: a component that displays the recipe viewer if a recipe is loaded. If not it displays placeholder element
export const RecipeViewerWrapper = () => {
  const { isRecipeLoaded } = useContext(ScalerContext) as ScalerContextType;
  return isRecipeLoaded ? <RecipeViewer /> : <div>Recipe not loaded?</div>;
};
