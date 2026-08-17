import { useContext, useState } from "react";
import { Link, NavLink } from "react-router";

// animation
import { AnimatePresence } from "framer-motion";

// icons
import { PiShoppingCartSimple } from "react-icons/pi";
import { HiMenu } from "react-icons/hi";
import { GoPerson, GoHeart, GoX } from "react-icons/go";

// context
import { mainStore } from "../../context/MainContext";

// components
import MobileDropDownMenu from "./MobileDropDownMenu";
import { IoExitOutline } from "react-icons/io5";
import UserMenu from "./UserMenu";
import Logo from "../Logo";

const Navbar = () => {
  // context
  const { token, cart } = useContext(mainStore);

  // states
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  // fn
  const handelMobileMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handelUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const cartCounter = cart.length;

  return (
    <header className="w-full bg-white border-b-2 border-gray-200 sticky top-0 z-40">
      <div className="container px-4 py-4 lg:px-0 flex justify-between items-center gap-2">
        {/* Brand Logo */}
        <Logo />

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
          {isMenuOpen ? <GoX /> : <HiMenu />}
        </button>

        {/* Mobile Drawer Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <MobileDropDownMenu
              isMenuOpen={isMenuOpen}
              handelMobileMenu={handelMobileMenu}
            />
          )}
        </AnimatePresence>

        {/* Right Actions */}
        <div className="relative flex items-center gap-4">
          {token ? (
            <>
              <Link
                to="/shoppingCart"
                className="flex items-center gap-1 text-gray-700 hover:text-green-500 transition-colors"
                aria-label="Shopping Cart"
              >
                <PiShoppingCartSimple className="text-2xl" />
                {<span className="p-1 font-bold">{cartCounter}</span>}
              </Link>

              {/* user Menu Toggle */}
              <button
                onClick={handelUserMenu}
                className="flex items-center gap-1 text-gray-700 hover:text-green-500 transition-colors cursor-pointer"
              >
                <GoPerson className="text-2xl" />
              </button>

              <AnimatePresence>
                {isUserMenuOpen && <UserMenu handelUserMenu={handelUserMenu}/>}
              </AnimatePresence>
            </>
          ) : (
            <Link
              to="/auth/login"
              className="px-4 py-2 font-semibold rounded-2xl text-white bg-green-500"
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
