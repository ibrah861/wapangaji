import { Outlet, replace, useNavigate } from "react-router-dom";
import { Menu } from "./pages/nav/Menu";
import { Navigation } from "./pages/nav/Navigation";

import { auth } from "./pages/axios/Axios";
import { useEffect } from "react";

export const ParentLayout = () => {
  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await auth.get("/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`,
          },
        });

        console.log(response.status !== 201);

        if (response.status !== 201) {
          useNavigate(to="/user-login", {replace : true})
        }
      } catch (err) {
        console.log(err);
      } finally {
        return;
      }
    };
    fetchdata();
  }, []);

  const isAuthenticated = localStorage.getItem("authToken");

  if (!isAuthenticated || isAuthenticated === "") {
    Navigation((to = "/user-login"), { replace: true });
  }
  return (
    <>
      <Navigation />
      <Menu />

      <>
        <Outlet />
      </>
    </>
  );
};
