import { FileLoader } from "./components/FileLoader/FileLoader";
import { RecipeViewerWrapper } from "./components/RecipeViewerWrapper/RecipeViewerWrapper";
// import { TargetScaleSetter } from "./components/TargetScaleSetter/TargetScaleSetter";
import { ScalerWrapper } from "./context/ScalerContext";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";

const App = () => {
  return (
    <div className="flex flex-col items-center">
      <ScalerWrapper>
        <header>
          <h2>Bakers Mode</h2>
          <FileLoader />
        </header>
        <main className="max-w-3xl p-2">
          <RecipeViewerWrapper />
        </main>
      </ScalerWrapper>
    </div>
  );
};
export default App;
