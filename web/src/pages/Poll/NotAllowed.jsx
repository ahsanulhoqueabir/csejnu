import Lottie from "lottie-react";
import anim from "../../assets/animation/right.json";
const NotAllowed = () => {
  return (
    <div>
      <p className="px-4 pt-10 lg:px-28 text-center">
        You have already voted. You can't vote again. Thank you for your
        participation.
      </p>
      <Lottie animationData={anim} />
    </div>
  );
};

export default NotAllowed;
