import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import ContentContextProvider from "./contexts/Content/ContentContext";

ReactDOM.render(
  <React.StrictMode>
    <ContentContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContentContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
