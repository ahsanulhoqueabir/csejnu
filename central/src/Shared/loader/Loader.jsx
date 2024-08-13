import React from "react";
import loader from "../../assets/animation/loaderM.json";
import Lottie from "lottie-react";

const Loader = () => {
  return (
    <div className="size-24 mx-auto ">
      <Lottie animationData={loader} />
    </div>
  );
};

export default Loader;
