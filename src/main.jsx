import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./useContext/AuthProvider";

// App contents
import { App } from "./App";

const baseContent = ReactDOM.createRoot(document.getElementById("root"));

baseContent.render(
  <>
    <StrictMode>
      <AuthProvider>
        <App />
      </AuthProvider>
    </StrictMode>
  </>,
);
