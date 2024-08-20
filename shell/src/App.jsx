import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Report = lazy(() => import("reports/Report"));

const App = () => (
  <div>
    <header>
      <h1>Micro Frontend Shell</h1>
    </header>
    <main>
      <Suspense fallback={<div>Loading...</div>}>
        <Report />
      </Suspense>
    </main>
  </div>
);
const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
