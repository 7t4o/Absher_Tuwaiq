import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import SmartMap from "../pages/SmartMap";
import Analytics from "../pages/Analytics";
import Notifications from "../pages/Notifications";
import Login from "../pages/Login";

const basename = import.meta.env.MODE === "development" ? "/" : "/Absher_Tuwaiq";

export const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { index: true, element: <Home /> },
                { path: "dashboard", element: <Dashboard /> },
                { path: "map", element: <SmartMap /> },
                { path: "analytics", element: <Analytics /> },
                { path: "notifications", element: <Notifications /> },

                // login داخل نفس الـ tree
                { path: "login", element: <Login /> },
            ],
        },
    ],
    { basename }
);

