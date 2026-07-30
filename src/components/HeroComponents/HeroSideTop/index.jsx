import { Link } from "react-router";

import heroside1 from "../../../assets/hero-side1.jpg";
import { FaArrowRight } from "react-icons/fa6";

const HeroSideTop = () => {
  return (
    <div
      className="h-[50%] p-4 flex flex-col gap-3 bg-cover bg-no-repeat rounded-xl shadow-2xl"
      style={{
        backgroundImage: `url(${heroside1})`,
      }}
    >
      <p className="font-semibold">Summer Sale</p>
      <p className="text-3xl font-semibold">75% OFF</p>
      <p className="text-sm font-thin">Only Fruit & Vegetable</p>
      <Link
        to={"/shop"}
        className="w-fit py-4 flex items-center gap-4 font-bold text-green-500"
      >
        <p>Shop Now</p>
        <FaArrowRight />
      </Link>
    </div>
  );
};

export default HeroSideTop;
