import { useState } from "react";
import toast from "react-hot-toast";

// icons
import { FaFacebookF, FaPinterestP } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { IoLogoInstagram } from "react-icons/io5";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    toast.success("Thank you for subscribing!");
    setEmail("");
  };

  return (
    <div className="py-12 px-6 bg-[#F7F7F7]">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Left Column: Heading & Description */}
        <div className="w-full lg:w-4/12 text-center lg:text-left">
          <h3 className="text-2xl font-bold text-gray-900">
            Subscribe to our Newsletter
          </h3>
          <p className="text-sm text-gray-500 mt-1 leading-relaxed">
            Pellentesque eu nibh eget mauris congue mattis mattis nec tellus.
            Phasellus imperdiet elit eu magna.
          </p>
        </div>

        {/* Right Column: Input Form & Social Links */}
        <div className="w-full lg:w-8/12 flex flex-col md:flex-row items-center gap-6">
          {/* Subscription Form */}
          <form
            onSubmit={handleSubmit}
            className="relative w-full md:w-8/12 flex items-center bg-white rounded-full border border-gray-300 focus-within:border-green-500 focus-within:ring-2 focus-within:ring-green-100 transition-all overflow-hidden shadow-sm"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Example@gmail.com"
              className="grow px-6 py-3 text-sm text-gray-800 placeholder-gray-400 focus:outline-none"
              required
            />
            <button
              type="submit"
              className="absolute right-0 px-4 md:px-8 py-3.5 text-sm text-white font-bold bg-green-500 hover:bg-green-600 transition-colors cursor-pointer shrink-0"
            >
              Subscribe
            </button>
          </form>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-3 w-full md:w-4/12">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-sm bg-white"
            >
              <FaFacebookF className="text-base" />
            </a>
            <a
              href="#"
              aria-label="Twitter X"
              className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-sm bg-white"
            >
              <BsTwitterX className="text-base" />
            </a>
            <a
              href="#"
              aria-label="Pinterest"
              className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-sm bg-white"
            >
              <FaPinterestP className="text-base" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 flex items-center justify-center rounded-full text-gray-600 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-sm bg-white"
            >
              <IoLogoInstagram className="text-lg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
