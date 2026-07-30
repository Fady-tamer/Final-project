import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";

const MainLayout = () => {
  return (
    <div className="relative min-h-dvh flex flex-col">
      <Navbar />
      <div className="grow flex flex-col">
        <Outlet />
      </div>
      {/* <Newsletter /> */}
      <Footer />
    </div>
  );
};

export default MainLayout;
