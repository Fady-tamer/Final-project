import { NavLink } from "react-router";

// images
import logo from "../../assets/logo.svg";

const Logo = ({ style }) => {
  return (
    <NavLink to="/" className="flex items-center justify-center gap-2 shrink-0">
      <img src={logo} alt="logo" className="w-7" />
      <span
        className={`hidden md:block text-2xl font-bold text-[#1A1A1A] tracking-tight ${style}`}
      >
        The Daily Basket
      </span>
    </NavLink>
  );
};

export default Logo;
