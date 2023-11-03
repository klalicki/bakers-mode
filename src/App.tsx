import { TargetScaleSetter } from "./components/TargetScaleSett/TargetScaleSetter";
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
      </main>
    </ScalerWrapper>
  );
};
export default App;
