import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import InputField from "./components/MortgageForm/InputField";

function App() {
  return (
    <>
      <main>
        <section>
          <h1 className="title-header">Mortgage Calculator</h1>
          <h2 className="underline clear-text">Clear All</h2>
          <InputField />
        </section>
      </main>
    </>
  );
}

export default App;
