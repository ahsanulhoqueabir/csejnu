import { Outlet } from "react-router-dom";
import "./App.css";
import MyNav from "./components/common/MyNav";
import Footer from "./components/common/Footer";
import "react-tabs/style/react-tabs.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
import { ScrollToTopOnRouteChange } from "./components/common/ScrollToTopOnRouteChange";
import Drawer from "./components/common/Drawer";
function App() {
  // const [isOpen, setIsOpen] = useState(true);
  // const ShowedAlert = sessionStorage.getItem("Anniversary");
  // if (ShowedAlert === null) {
  //   setIsOpen(true);
  //   sessionStorage.setItem("Anniversary", true);
  // }
  return (
    <div className=" lg:w-full selection:bg-teal-300 selection:text-black font-changa font-light text-lg">
      {/* <MyNav /> */}
      <Drawer />
      {/* <SideBar /> */}
      <ScrollToTopOnRouteChange />
      <div className="w-full lg:w-full min-h-screen bg-primary-content pgT">
        <Outlet />
      </div>
      <Footer />
      {/* <MyModal isOpen={isOpen} setIsOpen={setIsOpen}></MyModal> */}
    </div>
  );
}

export default App;
