import Lottie from "lottie-react";
import ani from "../assets/animation/page-not-available.json";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div>
      <Lottie className="w-full h-[calc(100vh-170px)]" animationData={ani} />
      <button className="w-48 flex justify-center btn bg-secondary text-white mx-auto">
        <Link to="/">Go to Home</Link>
      </button>
    </div>
  );
};

export default PageNotFound;
