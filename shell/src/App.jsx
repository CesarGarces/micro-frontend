import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Report = lazy(() => import("reports/Report"));
const UserList = lazy(() => import("users/UserList"));
const TasksPage = lazy(() => import("tasks/TasksPage"));

const App = () => (
  <div>
    <header>
      <h1>Micro Frontend Shell</h1>
    </header>
    <main className="main-container">
      <div className="micro-frontend-box">
        <Suspense fallback={<div>Argando Report</div>}>
          <Report />
        </Suspense>
      </div>
      <div className="micro-frontend-box">
        <Suspense fallback={<div>Cargando Tareas</div>}>
          <TasksPage />
        </Suspense>
      </div>
      <div className="micro-frontend-box">
        <Suspense fallback={<div>Cargando Usuarios</div>}>
          <UserList />
        </Suspense>
      </div>
    </main>
  </div>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
