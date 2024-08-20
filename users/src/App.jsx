import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store";
import UserList from "./components/Users/UserList";
import { Toaster } from "sonner";
import ErrorBoundary from "./components/Error/ErrorBoundary";

import "./index.css";

const App = () => (
  <Provider store={store}>
    <ErrorBoundary>
    <div className="container">
      <Toaster
        richColors
        position="bottom-right"
        toastOptions={{ duration: 3000 }}
      />
      <UserList />
    </div>
    </ErrorBoundary>
  </Provider>
);

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find the root element");

const root = ReactDOM.createRoot(rootElement);

root.render(<App />);
