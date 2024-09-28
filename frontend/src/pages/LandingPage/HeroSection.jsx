import { ReactTyped } from "react-typed";
import { Link } from "react-router-dom";
import ReviewsImage from "../../assets/images/Home/ReviewsImage.png";
export default function HeroSection() {
  return (
    <div className="flex w-full justify-center h-[80dvh] min-h-[400px] relative px-8 overflow-hidden items-center pb-10">
      <div className="absolute inset-0 h-full w-full bg-transparent bg-[radial-gradient(rgba(229,231,235,0.15)_1px,transparent_1px)] bg-[size:16px_16px] -z-10"></div>
      <div className="absolute -z-10 top-1/4 md:left-[2.5%] -left-1/3">
        <img
          src={ReviewsImage}
          className="w-96 rounded-lg -rotate-45 border border-slate-500 opacity-50"
        ></img>
      </div>
      <div className="absolute top-[5%] left-0 w-full h-52 bg-gradient-to-r from-black to-neutral-900 blur-3xl -z-10"></div>
      <div className="absolute top-1/4 left-0 transform -translate-x-1/2 w-96 h-96 bg-gradient-to-r from-cyan-950 via-red-900 to-yellow-900 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute top-3/4 right-0 transform translate-x-1/2 w-96 h-96 bg-gradient-to-l from-cyan-500 via-indigo-600 to-purple-500 opacity-40 rounded-full  blur-3xl"></div>
      <div className="text-white font-bold lg:text-7xl md:text-5xl text-4xl flex flex-col gap-14 items-center z-20">
        <span className="w-fit text-center max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32 ">
          Improve Your Shopify Store with Loaded Templates That Are
          <ReactTyped
            strings={["Better.", "Faster."]}
            typeSpeed={150}
            backSpeed={100}
            loop
            className="px-4 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-pink-700"
          />
        </span>
        <Link
          to={"/signup"}
          className="focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 text-white font-semibold h-12 px-8 rounded-lg w-full flex items-center justify-center sm:w-auto bg-indigo-500 highlight-white/20 hover:bg-indigo-400 text-sm duration-200 ease-in-out tracking-normal"
        >
          Get Started
        </Link>
      </div>
    </div>
  );
}
