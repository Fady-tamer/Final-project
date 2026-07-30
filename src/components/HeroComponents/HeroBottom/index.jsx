import { BiSupport } from "react-icons/bi";
import { BsBagCheckFill } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa6";
import { LuCaravan } from "react-icons/lu";

const HeroBottom = () => {
  return (
    <div className="p-10 flex justify-between items-center gap-4 rounded-xl bg-white shadow-2xl">
      <div className="flex items-center gap-8">
        <LuCaravan className="text-5xl text-green-500" />
        <div>
          <p className="font-bold">Free Shipping</p>
          <p className="text-[#aaa]">Free shipping on all your order</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <BiSupport className="text-5xl text-green-500" />
        <div>
          <p className="font-bold">Customer Support 24/7</p>
          <p className="text-[#aaa]">Instant access to Support</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <BsBagCheckFill className="text-5xl text-green-500" />
        <div>
          <p className="font-bold">100% Secure Payment</p>
          <p className="text-[#aaa]">We ensure your money is save</p>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <FaBoxOpen className="text-5xl text-green-500" />
        <div>
          <p className="font-bold">Money-Back Guarantee</p>
          <p className="text-[#aaa]">30 Days Money-Back Guarantee</p>
        </div>
      </div>
    </div>
  );
};

export default HeroBottom;
