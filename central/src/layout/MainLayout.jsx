import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Nav/Navbar";
import Footer from "../Shared/Footer";
import { ScrollToTopOnRouteChange } from "../Components/common/ScrollToTopOnRouteChange";

const MainLayout = () => {
  return (
    <div className="text-info-content transition-colors duration-1000 ease-in-out font-changa font-light text-lg">
      <Navbar />
      <ScrollToTopOnRouteChange />
      <div className="px-5 lg:px-20 py-10 min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
