import { Outlet } from "react-router";

// components
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AuthLayout = () => {
  return (
    <div className="relative min-h-dvh flex flex-col">
      <Navbar />
      <div className="grow flex flex-col">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
