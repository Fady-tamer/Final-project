import { GoSearch } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Newsletter = () => {
  return (
    <div className="p-10 bg-[#F7F7F7]">
      <div className="container flex items-center gap-32">
        <div className="w-4/12">
          <p className="text-2xl font-bold">Subcribe our Newsletter</p>
          <p className="text-sm text-gray-400">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>
        <div className="w-8/12 flex items-center gap-5">
          <form className="relative w-7/12">
            <input
              type="text"
              placeholder="Enter Your Email"
              className="w-full px-7 py-3 rounded-3xl border border-[#ccc]"
            />
            <button
              type="submit"
              className="absolute right-0 px-10 py-3 text-white font-bold rounded-3xl border border-green-500 bg-green-500 cursor-pointer"
            >
              Subscribe
            </button>
          </form>
          <div className="w-4/12 flex justify-center gap-4">
            <FaFacebookF className="w-10 h-10 p-2 rounded-full hover:bg-green-500 hover:text-white duration-300 cursor-pointer" />
            <BsTwitterX className="w-10 h-10 p-2 rounded-full hover:bg-green-500 hover:text-white duration-300 cursor-pointer" />
            <FaPinterestP className="w-10 h-10 p-2 rounded-full hover:bg-green-500 hover:text-white duration-300 cursor-pointer" />
            <IoLogoInstagram className="w-10 h-10 p-2 rounded-full hover:bg-green-500 hover:text-white duration-300 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
