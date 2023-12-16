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
        <header className="w-full bg-red-500 p-2 text-white flex justify-between items-center ">
          <h2 className=" text-xl font-bold">Bakers Mode &gt; Viewer</h2>
          <button className="font-bold px-2 py-1 border-white  border-2 rounded-md">
            Load Sample Recipe (not implemented yet)
          </button>
        </header>
        <main className="max-w-3xl pt-4 pb-4">
          <FileLoader />
          <RecipeViewerWrapper />
        </main>
      </ScalerWrapper>
    </div>
  );
};
export default App;
