import React from "react";
import QuoteDisplay from "./components/QuoteDisplay";
import QuoteControls from "./components/QuoteControls";
import "./App.css";

const App: React.FC = () => {
  return (
    <div id="app-wrapper">
      <header>
        <h1>Random Quote Generator</h1>
      </header>

      <main>
        <QuoteDisplay />
        <QuoteControls />
      </main>

      <footer>
        <p>
          Quotes provided by{" "}
          <a
            href="https://api-ninjas.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            API-Ninjas.com
          </a>
        </p>
        <p>
          An experiment by{" "}
          <a
            href="https://hirejeffgreen.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Jeff Green
          </a>
          . This project is developed with Vite, React, and Zustand. Hosted on
          Netlify.
        </p>
      </footer>
    </div>
  );
};

export default App;
