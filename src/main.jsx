import  { StrictMode } from "react";
import ReactDOM from "react-dom/client";
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
