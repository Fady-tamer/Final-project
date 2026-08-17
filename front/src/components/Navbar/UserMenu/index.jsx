import { useContext } from "react";
import { Link } from "react-router";

// animation
import { motion } from "framer-motion";

// icons
import { GoHeart, GoPerson } from "react-icons/go";
import { IoExitOutline } from "react-icons/io5";

// context
import { mainStore } from "../../../context/MainContext";

const menuVariants = {
  hidden: {
    opacity: 0,
    x: 20,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.15, ease: "easeOut" },
  },
};

const UserMenu = ({ handelUserMenu }) => {
  const { logoutFn } = useContext(mainStore);

  return (
    <motion.div
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="absolute top-12 right-0 p-3 flex flex-col gap-2 rounded-2xl bg-gray-200 shadow-xl"
    >
      <Link
        onClick={handelUserMenu}
        to="/profile"
        aria-label="Profile"
        className="w-full px-4 py-2 flex items-center gap-3 rounded-xl text-gray-700 hover:text-white bg-gray-300 hover:bg-green-500 transition-colors"
      >
        <GoPerson className="text-xl" />
        <span>Profile</span>
      </Link>

      <Link
        onClick={handelUserMenu}
        to="/wishlist"
        aria-label="Wishlist"
        className="w-full px-4 py-2 flex items-center gap-3 rounded-xl text-gray-700 hover:text-white bg-gray-300 hover:bg-green-500 transition-colors"
      >
        <GoHeart className="text-xl" />
        <span>Wishlist</span>
      </Link>

      <button
        type="button"
        onClick={logoutFn}
        className="w-full px-4 py-2 flex items-center gap-3 rounded-xl text-white bg-red-500 hover:bg-red-600 transition-colors cursor-pointer"
      >
        <IoExitOutline className="text-xl" />
        <span>Logout</span>
      </button>
    </motion.div>
  );
};

export default UserMenu;
