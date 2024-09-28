import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pivot as Hamburger } from "hamburger-react";
export default function Mobile() {
  const [mobileVis, setMobileVis] = useState(false);
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", mobileVis);
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [mobileVis]);
  return (
    <>
      <ul
        className={`${
          mobileVis ? "h-[100dvh] overflow-y-scroll" : "h-0"
        }  transition-height duration-500 ease-in-out bg-mainBg flex flex-col px-16 gap-8 w-screen text-xl font-medium overflow-hidden fixed top-0 left-0 visible lg:hidden`}
      >
        <div className="flex flex-col gap-8 child-hover:text-indigo-500 child:duration-300 child:ease-in-out">
          <li className="h-[1px] p-4 bg-mainBg"></li>
          <Link onClick={() => setMobileVis(!mobileVis)} to="/">
            Home
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="reviews">
            Reviews
          </Link>

          <p className="w-full h-[1px] bg-white"></p>
          <Link to={"/signup"}>Sign up</Link>
          <Link to={"/login"}>Login</Link>
        </div>
      </ul>
      <div className="lg:hidden text-3xl relative z-50">
        <Hamburger
          size={18}
          rounded
          toggled={mobileVis}
          toggle={setMobileVis}
        ></Hamburger>
      </div>
    </>
  );
}
