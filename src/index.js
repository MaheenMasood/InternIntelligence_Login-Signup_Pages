import React from "react";
import ReactDOM from "react-dom/client"; // 👈 yeh update zaroori hai!
import { BrowserRouter } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
