import { RecipeViewer } from "./components/RecipeViewer/RecipeViewer";
import { TargetScaleSetter } from "./components/TargetScaleSetter/TargetScaleSetter";
import { ScalerWrapper } from "./context/ScalerContext";
import "@mantine/core/styles.css";

const App = () => {
  return (
    <ScalerWrapper>
      <main>
        <section>
          <h1>Pizza</h1>
        </section>
        <section>
          <TargetScaleSetter />
        </section>
        <RecipeViewer />
      </main>
    </ScalerWrapper>
  );
};
export default App;
