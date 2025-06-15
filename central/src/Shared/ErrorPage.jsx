import Lottie from "lottie-react";
import err from "../assets/animation/error-404";
import { Link, useRouteError } from "react-router-dom";
import { FaArrowTurnUp } from "react-icons/fa6";
const ErrorPage = () => {
  const data = useRouteError();
  return (
    <div className=" flex justify-center flex-col items-center h-screen py-10">
      <Lottie className="w-[60%] h-96 flex-1" animationData={err}></Lottie>
      <Link className="btn bg-teal-200 rounded hover:bg-green-400" to="/">
        <FaArrowTurnUp className="h-4 -rotate-90"> </FaArrowTurnUp> Back to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
