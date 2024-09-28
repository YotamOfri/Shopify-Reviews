import { Routes } from "react-router-dom";
import { RouterRender } from "./RoutesConfig/RouterRender";
import Layout from "./RoutesConfig/Layouts/Layout";
import { AnimatePresence } from "framer-motion";
import LandingPage from "./pages/LandingPage/LandingPage";
import Form from "./pages/Reviews/Form";
import Login from "./pages/Auth/login/Login";
import Signup from "./pages/Auth/signup/Signup";
import { WebsiteContext } from "./context/WebsiteContext";
import useAuth from "./hooks/auth/useAuth";
import Loading from "./components/animations/Loading";
import AuthenticatedRoute from "./RoutesConfig/Routes/AuthenticatedRoute";
import UnAuthenticatedRoute from "./RoutesConfig/Routes/UnAuthenticatedRoute";
import Overview from "./pages/OverView/Overview";
import AuthenticatedLayout from "./RoutesConfig/Layouts/AuthenticatedLayout";
function MainRoutes() {
  const { user, setUser, status } = useAuth();
  // Paths
  const routePaths = [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: (
            <UnAuthenticatedRoute>
              <LandingPage />
            </UnAuthenticatedRoute>
          ),
        },
        { path: "reviews", element: <Form /> },
      ],
    },
    {
      path: "login",
      element: (
        <UnAuthenticatedRoute>
          <Login />
        </UnAuthenticatedRoute>
      ),
    },
    {
      path: "signup",
      element: (
        <UnAuthenticatedRoute>
          <Signup />
        </UnAuthenticatedRoute>
      ),
    },
    {
      path: "/admin",
      element: <AuthenticatedLayout />,
      children: [
        {
          path: "overview",
          element: (
            <AuthenticatedRoute>
              <Overview />
            </AuthenticatedRoute>
          ),
        },
        { path: "reviews", element: <Form /> },
      ],
    },
  ];
  const Contextobject = { user, setUser };
  return (
    <WebsiteContext.Provider value={Contextobject}>
      <AnimatePresence mode="wait">
        {status === "pending" && (
          <Loading
            size={"w-screen h-screen"}
            color={"stroke-indigo-500"}
          ></Loading>
        )}
        {status !== "pending" && <Routes>{RouterRender(routePaths)}</Routes>}
      </AnimatePresence>
    </WebsiteContext.Provider>
  );
}
export default MainRoutes;
