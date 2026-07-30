import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router";

import heroMain from "../../../assets/hero-main.jpg";

const HeroMain = () => {
  return (
    <div
      className="w-8/12 pl-15 py-40 flex flex-col gap-6 rounded-xl bg-cover bg-no-repeat shadow-2xl"
      style={{
        backgroundImage: `url(${heroMain})`,
      }}
    >
      <p className="max-w-80 text-4xl text-white font-bold">
        Fresh & Healthy Organic Food
      </p>
      <div className="border-l-3 pl-4 border-green-400 text-white flex flex-col gap-1">
        <div className="flex items-center gap-4">
          <p className="text-lg font-semibold">Sale up to</p>
          <p className="text-lg font-semibold px-3 py-1 bg-[#FF8A00] rounded-xl">
            30% OFF
          </p>
        </div>
        <p className="text-sm font-thin">Free shipping on all your order.</p>
      </div>

      <Link
        to={"/shop"}
        className="w-fit px-10 py-4 flex items-center gap-4 rounded-4xl text-green-500 font-bold bg-white"
      >
        <p>Shop Now</p>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default HeroMain;
