import "./App.css";
import InputField from "./components/MortgageForm/InputField";
import Placeholder from "./components/Results/Placeholder";

function App() {
  return (
    <>
      <main>
        <section>
          <h1 className="title-header">Mortgage Calculator</h1>
          <h2 className="underline clear-text">Clear All</h2>
          <InputField />
          <Placeholder />
        </section>
      </main>
    </>
  );
}

export default App;
