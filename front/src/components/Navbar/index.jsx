import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";

// icons
import { IoHeartOutline } from "react-icons/io5";
import { PiShoppingCartSimple } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";

// context
import { mainStore } from "../../context/MainContext";

const Navbar = () => {
  const { token, logoutFn, cart } = useContext(mainStore);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handelMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const cartCounter = cart.length;

  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 w-full">
      <div className="container px-4 py-4 lg:px-0 flex justify-between items-center gap-2">
        {/* Brand Logo */}
        <NavLink to="/" className="flex items-center gap-2 shrink-0">
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="sm:w-7 sm:h-7"
          >
            <path
              d="M31.2749 2.87433C27.4022 2.87433 21.9311 3.19836 19.1352 5.99279C17.9247 7.20329 17.3202 9.17664 17.4771 11.4102C17.4975 11.7052 17.6937 11.9566 17.9756 12.0496C18.256 12.1412 18.5641 12.0554 18.7559 11.8302C20.3108 10.0006 22.2435 8.53443 24.5046 7.47215C24.6964 7.3806 24.9231 7.37331 25.1295 7.44599C25.3111 7.51138 25.4535 7.63488 25.5276 7.79332C25.6816 8.11885 25.6322 8.54751 25.1207 8.78871C25.0917 8.80322 25.0655 8.82216 25.0365 8.83524C25.0263 8.8396 25.0147 8.83817 25.006 8.84252C19.4346 11.4611 16.6954 16.0299 15.4514 20.7279C14.5446 14.8455 12.6294 11.3826 10.8202 9.25667C9.51095 7.55941 8.22341 6.65986 7.47943 6.1513C7.34136 6.05682 6.92435 5.77202 6.7514 5.59907C6.46803 5.3157 6.46803 4.85503 6.7514 4.57166C7.03477 4.28973 7.49687 4.28973 7.81218 4.60361C7.88923 4.67193 8.01272 4.75912 8.16966 4.86375L8.29902 4.95094C9.35108 5.67168 11.31 7.01004 13.0479 9.89166C13.2034 10.1489 13.5042 10.2869 13.7963 10.2317C14.0928 10.1794 14.3252 9.95126 14.3834 9.65625C14.7627 7.71921 14.5927 4.84481 12.8649 3.11703C10.069 0.324032 4.59789 1.06881e-08 0.726671 1.06881e-08C0.32553 -6.81062e-05 0 0.325462 0 0.726535C0 4.59918 0.324032 10.0703 3.11846 12.8663C4.28387 14.0317 6.08147 14.5548 7.86736 14.5548C9.32486 14.5548 10.7533 14.19 11.8476 13.5579C13.3399 16.6502 14.5316 21.2698 14.5316 28.3366C14.5316 28.7376 14.8571 29.0632 15.2582 29.0632C15.6592 29.0632 15.9848 28.7376 15.9848 28.3366C15.9848 24.3942 16.6605 19.6626 19.173 15.7682C20.18 16.752 21.9137 17.3754 23.8347 17.4335C23.9306 17.4364 24.0251 17.4379 24.1195 17.4379C26.0711 17.4379 27.796 16.8261 28.8815 15.7391C31.6773 12.9432 31.9999 7.47208 31.9999 3.59936C32.0015 3.19836 31.6774 2.87433 31.2749 2.87433Z"
              fill="#00B307"
            />
          </svg>
          <span className="text-xl sm:text-2xl font-bold text-[#1A1A1A] tracking-tight">
            Ecobazar
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLink to="/" className="text-green-500 font-semibold">
            <p className="active-nav-text">Home</p>
          </NavLink>
          <NavLink to="/shop" className="text-green-500 font-semibold">
            <p className="active-nav-text">Shop</p>
          </NavLink>
        </nav>

        {/* Mobile Hamburger Menu Toggle */}
        <button
          type="button"
          onClick={handelMobileMenu}
          className="md:hidden text-2xl text-gray-700 p-1"
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Mobile Drawer Menu */}
        <div
          className={`absolute top-16 left-0 w-full ${isMenuOpen ? "h-fit p-4" : "h-0 py-0"} md:hidden border-t border-gray-100 bg-white flex flex-col gap-4 duration-300 transition-all overflow-hidden`}
        >
          <NavLink
            to="/"
            onClick={handelMobileMenu}
            className="text-center text-green-500 font-semibold"
          >
            <p className="active-nav-text">Home</p>
          </NavLink>
          <NavLink
            to="/shop"
            onClick={handelMobileMenu}
            className="text-center text-green-500 font-semibold"
          >
            <p className="active-nav-text">Shop</p>
          </NavLink>
          {token && (
            <button
              type="button"
              onClick={() => {
                logoutFn();
                handelMobileMenu;
              }}
              className="text-center px-4 py-2 rounded-2xl text-white font-semibold bg-red-500"
            >
              Logout
            </button>
          )}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          {token ? (
            <>
              <Link
                to="/wishlist"
                aria-label="Wishlist"
                className="text-gray-700 hover:text-green-500 transition-colors"
              >
                <IoHeartOutline className="text-2xl" />
              </Link>

              <Link
                to="/shoppingCart"
                className="flex items-center gap-1 text-gray-700 hover:text-green-500 transition-colors"
                aria-label="Shopping Cart"
              >
                <PiShoppingCartSimple className="text-2xl" />
                {<span className="p-1 font-bold">{cartCounter}</span>}
              </Link>

              <button
                type="button"
                onClick={logoutFn}
                className="hidden md:block px-4 py-2 font-semibold text-white rounded-2xl bg-red-500 hover:bg-[#D93025] transition-colors cursor-pointer"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                to="/login"
                className="px-4 py-2 font-semibold rounded-2xl text-white bg-green-500"
              >
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
