import { useContext } from "react";
import { NavLink } from "react-router";

// animation
import { motion } from "framer-motion";

// context
import { mainStore } from "../../../context/MainContext";

const MobileDropDownMenu = ({ isMenuOpen, handelMobileMenu }) => {
  const { token, logoutFn } = useContext(mainStore);

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -15,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className={`absolute top-16 left-0 -z-10 flex w-full flex-col gap-4 overflow-hidden border-b-2 border-t border-b-green-500 border-t-gray-100 bg-white p-4 md:hidden`}
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
    </motion.div>
  );
};

export default MobileDropDownMenu;
