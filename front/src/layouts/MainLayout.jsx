import { Outlet } from "react-router";

// components
import Navbar from "../components/Navbar";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div className="relative min-h-dvh flex flex-col">
      <Navbar />
      <div className="grow flex flex-col">
        <Outlet />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default MainLayout;
