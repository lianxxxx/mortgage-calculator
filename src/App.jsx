import "./App.css";
import InputField from "./components/MortgageForm/InputField";
import Placeholder from "./components/Results/Placeholder";
import ResultDisplay from "./components/Results/ResultDisplay";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("");
  const [term, setTerm] = useState("");
  const [rate, setRate] = useState("");
  const [type, setType] = useState("");
  const [result, setResult] = useState(null);

  const handleClearAll = () => {
    setAmount("");
    setTerm("");
    setRate("");
    setType("");
    setResult(null);
  };
  return (
    <>
      <main>
        <section className="calculator-section">
          <div className="input-area">
            <div className="header-row">
              <h1 className="title-header">Mortgage Calculator</h1>
              <h2 className="underline clear-text" onClick={handleClearAll}>
                Clear All
              </h2>
            </div>
            <InputField
              amount={amount}
              setAmount={setAmount}
              term={term}
              setTerm={setTerm}
              rate={rate}
              setRate={setRate}
              type={type}
              setType={setType}
              setResult={setResult}
            />
          </div>

          <div className="result-area">
            {result ? <ResultDisplay result={result} /> : <Placeholder />}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
