import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";

// IMPORTED ROUTES
// --------------------------------------
// LOGIN --  AUTH ROUTE
import { Login } from "./pages/auth/Login";
// ---------------------------------------

// OTHER ROUTES
import { Userdashboard } from "./pages/otherPages/Userdashboard";
import { Navigation } from "./pages/nav/navigation";
import { Profile } from "./pages/otherPages/Profile";
// --------------------------------------

// css Links
import "./app.css";
import "./pages/auth/auth.css";
import "./pages/otherPages/userdashboard.css";
import "./pages/nav/navigation.css";
import "./pages/uiComponent/loader_style/Loader.css";

// --------------------------

export const App = () => {

  const handleNav = window.location.pathname !== "/"
 
  return (
    <>
    
   {
     handleNav && <Navigation/>
   }
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/user-profile" element={<Profile />} />
        <Route path="/user-dashboard" element={<Userdashboard />} />
      </Routes>
    </>
  );
};
