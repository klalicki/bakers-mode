import { FileLoader } from "./components/FileLoader/FileLoader";
import { RecipeViewerWrapper } from "./components/RecipeViewerWrapper/RecipeViewerWrapper";
// import { TargetScaleSetter } from "./components/TargetScaleSetter/TargetScaleSetter";

import { ScalerWrapper } from "./context/ScalerContext";
import "@mantine/core/styles.css";
import "@mantine/dropzone/styles.css";

const App = () => {
  return (
    // <div className="flex flex-col items-center">
    <ScalerWrapper>
      <header className="w-full bg-red-500 p-2 text-white flex flex-wrap justify-between items-center">
        <p className=" text-xl font-bold">Bakers Mode &gt; Viewer</p>
        <button className="font-bold px-2 py-1 border-white  border-2 rounded-md  hover:bg-white hover:text-red-500">
          Load Sample Recipe
        </button>
      </header>
      <main className="w-full pt-4 pb-4 flex flex-col items-center">
        {/* <FileLoader /> */}
        <RecipeViewerWrapper />
      </main>
    </ScalerWrapper>
    // </div>
  );
};
export default App;
