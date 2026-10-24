import { useContext } from "react";
import { Navigate, Outlet, replace } from "react-router-dom";
import { authContext } from "../useContext/AuthContext";

export const ParentRoute = () => {
  const { isAuth } = useContext(authContext);

  console.log(isAuth);

  if (!isAuth) {
    return window.location.replace("/user-login")
  }

  return <Outlet />;
};