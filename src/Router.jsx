import { createBrowserRouter } from "react-router-dom";

// LOGIN --  AUTH ROUTE
import { Login } from "./pages/auth/Login";
// ---------------------------------------

// OTHER ROUTES
import { Userdashboard } from "./pages/otherPages/Userdashboard";
import { Payment } from "./pages/otherPages/Payment";
import { Reset } from "./pages/otherPages/Reset";
import { ParentRoute } from "./protectedRoutes/ParentRoute";
import { ParentLayout } from "./ParentLayout";
import { LandPage } from "./pages/otherPages/LandPage";
import { Admin_registration } from "./pages/otherPages/Admin_registration";
import { Payment_fill } from "./pages/otherPages/Payment_fill";

export const router = createBrowserRouter([
  {
    path: "/user-login",
    element: <Login />,
  },
  {
    path: "/user-reset",
    element: <Reset />,
  },
  {
    path: "/landpage",
    element: <LandPage />,
  },

  {
    path: "/parent",
    element: <ParentRoute />,
    children: [
      {
        element: <ParentLayout />,
        children: [
          {
            path: "user-dashboard",
            element: <Userdashboard />,
          },
          {
            path: "user-payment",
            element: <Payment />,
          },
          {
            path: "admin-registration",
            element: <Admin_registration />,
          },
          {
            path: "admin-fillpayment",
            element: <Payment_fill />,
          },
        ],
      },
    ],
  },
]);
