import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import { AuthProvider } from "../../useContext/AuthProvider";

import {
  LogOut,
  LayoutDashboard,
  CreditCard,
  User,
  Bell,
  KeyRound,
} from "lucide-react";
import { authContext } from "../../useContext/AuthContext";

export const Menu = () => {
  const { openNavBar, setOpenNavBar } = useContext(authContext);

  const handleClick = () => {
    setOpenNavBar(false);
  };
  return (
    <>
      {openNavBar && (
        <div className="menu">
          <span className="menu_times" onClick={handleClick}>
            &times;
          </span>
          <span className="menu_title">Navigation Menu</span>

          <ul className="menu_navigation_links">
            <Link to="user-dashboard">
              <li onClick={handleClick}>
                <LayoutDashboard size={14.5} />
                My dashboard
              </li>
            </Link>

            <Link to="user-payment">
              <li onClick={handleClick}>
                <CreditCard size={14.5} />
                Payment
              </li>
            </Link>

          </ul>

          <div className="menu_logout">
            <button
              className="logout_btn"
              onClick={() => {
                handleClick();
              }}
            >
              <LogOut size={14.5} color="red" />
              Logout
            </button>
          </div>
        </div>
      )}
    </>
  );
};
