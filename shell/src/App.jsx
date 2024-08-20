import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Report = lazy(() => import("reports/Report"));
const User = lazy(() => import("users/User"));
const TasksPage = lazy(() => import("tasks/TasksPage"));

const App = () => (
  <div>
    <header>
      <h1>Micro Frontend Shell</h1>
    </header>
    <main className="main-container">
      <Suspense fallback={<div>Loading...</div>}>
        <div className="micro-frontend-box">
          <Report />
        </div>
        <div className="micro-frontend-box">
          <TasksPage />
        </div>
        <div className="micro-frontend-box">
          <User />
        </div>
      </Suspense>
    </main>
  </div>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
