import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Pivot as Hamburger } from "hamburger-react";
import Github from "../../assets/icons/github.svg";
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
        }  transition-height duration-500 ease-in-out bg-black flex flex-col px-16 gap-8 w-screen text-xl font-medium overflow-hidden fixed top-0 left-0`}
      >
        <div className="flex flex-col gap-8">
          <li className="h-[1px] p-4 bg-black"></li>
          <Link onClick={() => setMobileVis(!mobileVis)} to="/">
            Home
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="reviews">
            Reviews
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="#">
            TBH
          </Link>
          <Link onClick={() => setMobileVis(!mobileVis)} to="#">
            TBH
          </Link>
          <p className="w-full h-[1px] bg-white"></p>
          <Link
            onClick={() => setMobileVis(!mobileVis)}
            className="flex"
            to="/contact-us"
          >
            <img src={Github} width={30} alt="" />
          </Link>
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
