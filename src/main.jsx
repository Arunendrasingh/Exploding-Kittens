import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import MainGame from "./features/MainGame.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <MainGame />
  </React.StrictMode>
);
