import { Routes } from "react-router-dom";
import { RouterRender } from "./RoutesConfig/RouterRender";
import Layout from "./RoutesConfig/Layout";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import Form from "./pages/Reviews/Form";
import Login from "./pages/Auth/login/Login";
import { Signup } from "./pages/Auth/signup/Signup";
import { useState } from "react";
import { WebsiteContext } from "./context/WebsiteContext";
function MainRoutes() {
  const [user, setUser] = useState({});
  // Paths
  const routePaths = [
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <Home /> },
        { path: "reviews", element: <Form /> },
      ],
    },
    { path: "login", element: <Login /> },
    { path: "signup", element: <Signup /> },
  ];
  const Contextobject = { user, setUser };
  return (
    <WebsiteContext.Provider value={Contextobject}>
      <AnimatePresence mode="wait">
        <Routes>{RouterRender(routePaths)}</Routes>
      </AnimatePresence>
    </WebsiteContext.Provider>
  );
}
export default MainRoutes;
