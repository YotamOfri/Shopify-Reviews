import React from "react";
import ReactDOM from "react-dom/client";
import MainRoutes from "./router";
import { BrowserRouter } from "react-router-dom";
import "./assets/css/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainRoutes></MainRoutes>
    </BrowserRouter>
  </React.StrictMode>
);
/*  
or rgb(10, 16, 29);
main bg-slate-900
secondery bg-[#182235]
text text-slate-500
accent bg-indigo-500
*/
