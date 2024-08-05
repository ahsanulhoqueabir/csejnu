import Lottie from "lottie-react";
import anim1 from "../assets/loaderrr.json";
import anim2 from "../assets/dot-ani.json";
const BannerSkeleton = () => {
  return (
    <>
      <div
        className="relative z-1 flex items-center justify-center bg-base-300  h-36  px-10 skeleton
      "
      >
        <h1 className={`h-7 w-56 skeleton  `}></h1>
        <div className="absolute bottom-0 left-0 lg:px-20">
          <Lottie animationData={anim1} className="h-20 lg:h-30"></Lottie>
        </div>
        <div className="absolute translate-x-1/2 opacity-40">
          <Lottie animationData={anim2} className=" h-36 lg:h-44"></Lottie>
        </div>
      </div>
    </>
  );
};

export default BannerSkeleton;
