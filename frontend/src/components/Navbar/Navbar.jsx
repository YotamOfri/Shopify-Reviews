import ShopifyLogo from "../../assets/icons/shopify.svg";
import Github from "../../assets/icons/github.svg";
import Mobile from "./Moblie";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="duration-300 ease-in-out  flex justify-between p-4 lg:p-6 px-8 lg:px-12 absolute z-40 top-0 left-1/2 -translate-x-1/2 w-full  text-white items-center  h-16 lg:h-[5.5rem] bg-[#060912] max-w-[2000px] m-auto border-b border-slate-700">
      <Link
        to={"/"}
        className="w-[33%] flex items-center font-bold md:text-2xl text-sm gap-2 cursor-pointer"
      >
        <img src={ShopifyLogo} width={40} alt="" />
        <h1>Beautify</h1>
      </Link>
      <div className="justify-center lg:flex hidden">
        <ul className="flex gap-4 items-center">
          <Link to={"reviews"}>Reviews</Link>
          <li>TBH</li>
          <li>TBH</li>
        </ul>
        <a
          className="border-l ml-6 pl-6 border-slate-800 "
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/YotamOfri"
        >
          <img src={Github} width={30} alt="" />
        </a>
      </div>
      <Mobile></Mobile>
    </div>
  );
}
