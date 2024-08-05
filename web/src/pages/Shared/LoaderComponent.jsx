import Lottie from "lottie-react";
import anim from "../../assets/animation/loader.json";
const LoaderComponent = () => {
  return (
    <div className="flex justify-center mx-auto items-center">
      <Lottie
        className="text-xs  mx-auto flex text-center"
        animationData={anim}
      />
    </div>
  );
};

export default LoaderComponent;
