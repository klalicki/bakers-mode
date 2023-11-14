import { RecipeViewer } from "./components/RecipeViewer/RecipeViewer";
// import { TargetScaleSetter } from "./components/TargetScaleSetter/TargetScaleSetter";
import { ScalerWrapper } from "./context/ScalerContext";
import "@mantine/core/styles.css";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <ScalerWrapper>
        <main className="max-w-3xl">
          <RecipeViewer />
        </main>
      </ScalerWrapper>
    </div>
  );
};
export default App;
