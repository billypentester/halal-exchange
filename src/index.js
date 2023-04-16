import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import TokenProvider from "./contexts/Token1Context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <TokenProvider>
      <App />
    </TokenProvider>
  </BrowserRouter>
);
