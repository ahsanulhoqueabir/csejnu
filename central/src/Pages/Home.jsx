import Hero from "../Components/Home/Hero";
import Motto from "../Components/Home/Motto";
import { setTitle } from "../utilities/functions";

const Home = () => {
  setTitle("Home");
  return (
    <div>
      <Hero />
      <Motto />
    </div>
  );
};

export default Home;
