import { FileLoader } from "./components/FileLoader/FileLoader";
import { RecipeViewer } from "./components/RecipeViewer/RecipeViewer";
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
        <main className="max-w-3xl">
          <RecipeViewer />
        </main>
      </ScalerWrapper>
    </div>
  );
};
export default App;
