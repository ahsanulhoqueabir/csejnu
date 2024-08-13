import Lottie from "lottie-react";
import anim from "../assets/animation/periodic-loader.json";
const LoadingPage = () => {
  return (
    <div className="flex justify-center min-h-[calc(100vh-72px)] items-center">
      <Lottie className="h-[450px]" animationData={anim} />
    </div>
  );
};

export default LoadingPage;
