import React from "react";
import ReactDOM from "react-dom/client";
import MainRoutes from "./router";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_CLIENT_ID}>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <MainRoutes></MainRoutes>
        </BrowserRouter>
      </QueryClientProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
/*  
or rgb(10, 16, 29);
main bg-slate-900
secondery bg-[#182235]
text text-slate-500
accent bg-indigo-500
*/
