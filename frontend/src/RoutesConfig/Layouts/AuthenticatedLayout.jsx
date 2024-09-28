import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/UnAuthenticated/Navbar";
import Footer from "../../components/Footer/Footer";
import { Suspense } from "react";
export default function AuthenticatedLayout() {
  return (
    <>
      <Navbar></Navbar>
      <Suspense>
        <Outlet></Outlet>
      </Suspense>
      <Footer></Footer>
    </>
  );
}
