import { useContext } from "react";
import { NavLink, Link } from "react-router";

// icons
import {
  FaFacebookF,
  FaTwitter,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa";

// context
import { mainStore } from "../../context/MainContext";

// images
import logo from "../../assets/logo.svg";
import Logo from "../Logo";

const Footer = () => {
  const { token, setSelectedCategory } = useContext(mainStore);

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
          <div className="lg:col-span-2 flex flex-col gap-4 text-center">
            <Logo style={"text-white"} />

            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
              quas sint beatae saepe, iure tenetur tempora libero corporis
              necessitatibus cumque aliquid sit dolorem, consectetur officiis
              pariatur. Veniam dolores modi doloremque.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-3 text-sm pt-2">
              <a
                href="tel:+201234567890"
                className="text-white hover:text-green-500 transition-colors underline underline-offset-8 decoration-green-600 font-semibold"
              >
                +20 100 000 0000
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
          {token && (
            <div className="flex flex-col gap-3 text-center">
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
          )}

          {/* Column 2: Quick Links */}
          <div className="flex flex-col gap-3 text-center">
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
          </div>

          {/* Column 3: Categories */}
          <div className="flex flex-col gap-3 text-center">
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
          <p>© The Daily Basket eCommerce. All Rights Reserved</p>

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
