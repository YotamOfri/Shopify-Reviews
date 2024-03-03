import Logo from "../../assets/icons/Logo.svg";
import Mobile from "./Moblie";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="duration-300 ease-in-out  flex justify-between p-4 lg:p-6 px-8 lg:px-12 absolute z-40 top-0 left-1/2 -translate-x-1/2 w-full  text-white items-center  h-16 lg:h-[5.5rem] bg-[#060912] max-w-[2000px] m-auto border-b border-slate-700">
      <div className="w-[33%] flex items-center">
        <Link
          to={"/"}
          className="flex items-center font-bold md:text-2xl text-sm gap-2 cursor-pointer mr-6 pr-6 border-slate-800 lg:border-r"
        >
          <img src={Logo} width={40} alt="" />
        </Link>
        <ul className="lg:flex hidden">
          <Link to={"reviews"}>Reviews</Link>
        </ul>
      </div>
      <div className="justify-center lg:flex hidden">
        <ul className="flex gap-4 items-center">
          <Link to={"/signup"}>Sign up</Link>
          <Link
            to={"/login"}
            className="focus:outline-none duration-200 ease-in-out focus:ring-2  text-white font-semibold h-10 px-8 rounded-lg w-full flex items-center justify-center sm:w-auto bg-indigo-500 highlight-white/20 hover:bg-indigo-400 text-sm"
          >
            Login
          </Link>
        </ul>
      </div>
      <Mobile></Mobile>
    </div>
  );
}
