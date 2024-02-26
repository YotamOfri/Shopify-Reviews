import { Routes } from "react-router-dom";
import { RouterRender } from "./RoutesConfig/RouterRender";
import Layout from "./RoutesConfig/Layout";
import { AnimatePresence } from "framer-motion";
import Home from "./pages/Home/Home";
import Form from "./pages/Form";
function MainRoutes() {
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
  ];
  return (
    <AnimatePresence mode="wait">
      <Routes>{RouterRender(routePaths)}</Routes>
    </AnimatePresence>
  );
}
export default MainRoutes;
