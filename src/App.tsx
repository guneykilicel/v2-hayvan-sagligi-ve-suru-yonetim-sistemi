import React, { useContext, useEffect, lazy, Suspense } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { AuthContext } from "./context/AuthContext";
import { ThemeContext } from "./context/ThemeContext";
import "./App.scss";
import MoonIcon from "./assets/icons/moon.svg";
import SunIcon from "./assets/icons/sun.svg";
import { CircularProgress } from "@mui/material";

// Lazy load components
const BaseLayout = lazy(() => import("./layout/BaseLayout"));
const Dashboard = lazy(() => import("./screens/dashboard/DashboardScreen"));
const PageNotFound = lazy(() => import("./screens/error/PageNotFound"));
const Login = lazy(() => import("./screens/login/Login"));

function App() {
  axios.defaults.baseURL = `http://localhost:5000`;
  const { user } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: user ? <BaseLayout /> : <Navigate to="/login" replace />,
      children: [
        { path: "/", element: <Dashboard /> },
        
        { path: "*", element: <PageNotFound /> },
      ],
    },
    { path: "/login", element: <Login /> },
    // { path: "*", element: <PageNotFound /> },
  ]);

  return (
    <Suspense
      fallback={
        <div className="fallback">
          <CircularProgress
              style={{ width: "25px", height: "25px" }}
              color="primary"
            />
        </div>
      }
    >
      <RouterProvider router={router} />
      
      <button
          type="button"
          className="theme-toggle-btn"
          onClick={toggleTheme}
        >
          <img
            className="theme-icon"
            src={theme === "light" ? SunIcon : MoonIcon}
            alt="Theme Icon"
          />
        </button>
      <ToastContainer />
    </Suspense>
  );
}

export default App;
