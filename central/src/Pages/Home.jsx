import Hero from "../Components/Home/Hero";
import Motto from "../Components/Home/Motto";
import Notices from "../Components/Home/Notices";
import { setTitle } from "../utilities/functions";

const Home = () => {
  setTitle("Home");
  return (
    <div>
      <Hero />
      <Motto />
      <Notices />
    </div>
  );
};

export default Home;
