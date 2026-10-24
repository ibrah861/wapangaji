import React, { useState } from "react";

// css Links
import "./app.css";
import "./pages/auth/auth.css";
import "./pages/otherPages/css/userdashboard.css";
import "./pages/nav/navigation.css";
import "./pages/uiComponent/loader_style/Loader.css";
import "./pages/uiComponent/loader_style/Loader2.css";
import "./pages/otherPages/css/notification&payment.css";
import "./pages/otherPages/css/landpage.css"

import { router } from "./Router";
import { RouterProvider } from "react-router-dom";
// --------------------------

export const App = () => {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};
