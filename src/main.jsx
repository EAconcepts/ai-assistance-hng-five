import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import "./index.css";
import { AssistantProvider } from "./components/AssistantContext.jsx";
import Assistance from './components/Assistance'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AssistantProvider>
      <App />
      <Assistance />
    </AssistantProvider>
  </React.StrictMode>
);
