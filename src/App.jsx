import "./App.css";
import InputField from "./components/MortgageForm/InputField";
import Placeholder from "./components/Results/Placeholder";
import ResultDisplay from "./components/Results/ResultDisplay";

function App() {
  return (
    <>
      <main>
        <section>
          <h1 className="title-header">Mortgage Calculator</h1>
          <h2 className="underline clear-text">Clear All</h2>
          <InputField />
          <Placeholder />
          <ResultDisplay />
        </section>
      </main>
    </>
  );
}

export default App;
