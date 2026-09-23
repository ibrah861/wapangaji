import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

// App contents
import { App } from "./App";

const baseContent = ReactDOM.createRoot(document.getElementById("root"));

baseContent.render(
  <>
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </>,
);
