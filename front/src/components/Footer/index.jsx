import { useContext } from "react";
import { NavLink, Link } from "react-router";

// icons
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

// components
import { mainStore } from "../../context/MainContext";

const Footer = () => {
  const { setSelectedCategory } = useContext(mainStore);

  const handleCategoryClick = (categoryName) => {
    if (setSelectedCategory) {
      setSelectedCategory(categoryName);
    }
  };

  return (
    <footer className="bg-[#191919] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 pb-12 border-b border-gray-800">
          {/* Brand & Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-4 pr-4">
            <NavLink to="/" className="flex items-center gap-2">
              <svg
                width="32"
                height="30"
                viewBox="0 0 32 30"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.2749 2.87433C27.4022 2.87433 21.9311 3.19836 19.1352 5.99279C17.9247 7.20329 17.3202 9.17664 17.4771 11.4102C17.4975 11.7052 17.6937 11.9566 17.9756 12.0496C18.256 12.1412 18.5641 12.0554 18.7559 11.8302C20.3108 10.0006 22.2435 8.53443 24.5046 7.47215C24.6964 7.3806 24.9231 7.37331 25.1295 7.44599C25.3111 7.51138 25.4535 7.63488 25.5276 7.79332C25.6816 8.11885 25.6322 8.54751 25.1207 8.78871C25.0917 8.80322 25.0655 8.82216 25.0365 8.83524C25.0263 8.8396 25.0147 8.83817 25.006 8.84252C19.4346 11.4611 16.6954 16.0299 15.4514 20.7279C14.5446 14.8455 12.6294 11.3826 10.8202 9.25667C9.51095 7.55941 8.22341 6.65986 7.47943 6.1513C7.34136 6.05682 6.92435 5.77202 6.7514 5.59907C6.46803 5.3157 6.46803 4.85503 6.7514 4.57166C7.03477 4.28973 7.49687 4.28973 7.81218 4.60361C7.88923 4.67193 8.01272 4.75912 8.16966 4.86375L8.29902 4.95094C9.35108 5.67168 11.31 7.01004 13.0479 9.89166C13.2034 10.1489 13.5042 10.2869 13.7963 10.2317C14.0928 10.1794 14.3252 9.95126 14.3834 9.65625C14.7627 7.71921 14.5927 4.84481 12.8649 3.11703C10.069 0.324032 4.59789 1.06881e-08 0.726671 1.06881e-08C0.32553 -6.81062e-05 0 0.325462 0 0.726535C0 4.59918 0.324032 10.0703 3.11846 12.8663C4.28387 14.0317 6.08147 14.5548 7.86736 14.5548C9.32486 14.5548 10.7533 14.19 11.8476 13.5579C13.3399 16.6502 14.5316 21.2698 14.5316 28.3366C14.5316 28.7376 14.8571 29.0632 15.2582 29.0632C15.6592 29.0632 15.9848 28.7376 15.9848 28.3366C15.9848 24.3942 16.6605 19.6626 19.173 15.7682C20.18 16.752 21.9137 17.3754 23.8347 17.4335C23.9306 17.4364 24.0251 17.4379 24.1195 17.4379C26.0711 17.4379 27.796 16.8261 28.8815 15.7391C31.6773 12.9432 31.9999 7.47208 31.9999 3.59936C32.0015 3.19836 31.6774 2.87433 31.2749 2.87433Z"
                  fill="#00B307"
                />
              </svg>
              <span className="text-2xl font-bold">Ecobazar</span>
            </NavLink>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-sm pt-2">
              <a
                href="tel:+201234567890"
                className="text-white hover:text-green-500 transition-colors underline underline-offset-8 decoration-green-600 font-semibold"
              >
                +20 123 456 7890
              </a>
              <span className="text-gray-500">or</span>
              <a
                href="mailto:support@ecobazar.com"
                className="text-white hover:text-green-500 transition-colors underline underline-offset-8 decoration-green-600 font-semibold"
              >
                support@ecobazar.com
              </a>
            </div>
          </div>

          {/* Column 1: My Account */}
          <div className="flex flex-col gap-3">
            <p className="text-lg font-bold text-white mb-2">My Account</p>
            <NavLink
              to="/shoppingCart"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Shopping Cart
            </NavLink>
            <NavLink
              to="/wishlist"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Wishlist
            </NavLink>
          </div>

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3">
            <p className="text-lg font-bold text-white mb-2">Navigation</p>
            <NavLink
              to="/"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Shop
            </NavLink>
            <NavLink
              to="/aboutUs"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              About Us
            </NavLink>
            <NavLink
              to="/contactUs"
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Contact Us
            </NavLink>
          </div>

          {/* Column 3: Categories */}
          <div className="flex flex-col gap-3">
            <p className="text-lg font-bold text-white mb-2">Categories</p>
            <Link
              to="/shop"
              onClick={() => handleCategoryClick("Fresh Fruit")}
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Fresh Fruit
            </Link>
            <Link
              to="/shop"
              onClick={() => handleCategoryClick("Fresh Vegetables")}
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Fresh Vegetables
            </Link>
            <Link
              to="/shop"
              onClick={() => handleCategoryClick("Beverages")}
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Beverages
            </Link>
            <Link
              to="/shop"
              onClick={() => handleCategoryClick("Meat & Fish")}
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Meat & Fish
            </Link>
            <Link
              to="/shop"
              onClick={() => handleCategoryClick("Bread & Bakery")}
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Bread & Bakery
            </Link>
            <Link
              to="/shop"
              onClick={() => handleCategoryClick("Beauty & Health")}
              className="text-gray-400 hover:text-green-500 text-sm transition-colors"
            >
              Beauty & Health
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Socials */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© Ecobazar eCommerce. All Rights Reserved</p>

          <div className="flex items-center gap-3 text-lg">
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-500 hover:text-white flex items-center justify-center transition-all"
            >
              <FaFacebookF className="text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-500 hover:text-white flex items-center justify-center transition-all"
            >
              <FaTwitter className="text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-500 hover:text-white flex items-center justify-center transition-all"
            >
              <FaPinterestP className="text-sm" />
            </a>
            <a
              href="#"
              className="w-9 h-9 rounded-full bg-gray-800 hover:bg-green-500 hover:text-white flex items-center justify-center transition-all"
            >
              <FaInstagram className="text-sm" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
