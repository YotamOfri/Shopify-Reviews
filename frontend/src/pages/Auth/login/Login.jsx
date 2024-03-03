import { RightArrowSVG } from "../../../components/AdvancedIcons/RightArrowSVG";
import Logo from "../../../assets/icons/Logo.svg";
import { Link } from "react-router-dom";
import Loginform from "./components/LoginForm";
import { BackgroundBeams } from "../../../components/Background";
export default function Login() {
  return (
    <div className="w-full h-[100dvh] min-h-[700px] flex justify-center items-center relative bg-no-repeat bg-center bg-cover background-overlay bg-opacity-20">
      <BackgroundBeams></BackgroundBeams>
      <div className="sm:w-[480px] w-full sm:h-fit h-full bg-secondBg border border-slate-600 text-white items-center p-10 rounded-xl flex flex-col gap-4 child:w-full z-30">
        {/* Logo */}
        <div className="flex justify-center">
          <Link to={"/"} className="flex gap-1 items-end justify-center">
            <img src={Logo} className="w-8" alt="" />
            <h1 className="text-lg font-bold">Beautify</h1>
          </Link>
        </div>
        {/* Header */}
        <div className="flex flex-col gap-1 pb-4">
          <h1 className="font-bold text-2xl">Log in</h1>
          <h2 className="text-sm text-gray-300">Continue to Beautify</h2>
        </div>
        {/* Inputs */}
        <Loginform></Loginform>
        {/* Register */}
        <div className="flex gap-1 text-sm group">
          <h1>New to Beautify</h1>
          <span className="text-secondary group-hover:text-indigo-500 duration-200 ease-in-out">
            <Link to={"/signup"} className="flex gap-[3px] items-center">
              Get started
              <RightArrowSVG
                fill={"#4f46e5"}
                className={"group-hover:ml-[2px] duration-300 ease-in-out"}
              ></RightArrowSVG>
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
