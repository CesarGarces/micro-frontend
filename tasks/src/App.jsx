import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import TaskList from "./components/Tasks/TaskList";
import AddTask from "./components/Tasks/AddTask";
import "./index.css";
import { Toaster } from "sonner";

const App = () => (
  <Provider store={store}>
    <Toaster richColors />
    <div className="container">
      <AddTask />
      <TaskList />
    </div>
  </Provider>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);
root.render(<App />);
