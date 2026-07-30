import { Link } from "react-router";
import { FaArrowRight } from "react-icons/fa6";

import heroside2 from "../../../assets/hero-side2.jpg";

const HeroSideBottom = () => {
  return (
    <div className="relative overflow-hidden h-[50%] rounded-xl shadow-2xl">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-no-repeat blur-[1px]"
        style={{
          backgroundImage: `url(${heroside2})`,
        }}
      ></div>
      <div className="relative z-10 h-full p-4 flex flex-col justify-center items-center gap-3">
        <p className="text-white font-semibold">Best Deal</p>
        <p className="max-w-70 text-3xl text-center text-white font-bold">
          Special Products Deal of the Month
        </p>
        <Link
          to={"/shop"}
          className="w-fit py-4 flex items-center gap-4 font-bold text-green-500"
        >
          <p>Shop Now</p>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default HeroSideBottom;
