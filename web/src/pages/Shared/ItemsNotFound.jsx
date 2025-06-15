import Lottie from "lottie-react";
import anim from "../../assets/animation/not-found.json";
const ItemsNotFound = () => {
  return (
    <div>
      <Lottie className="lg:h-96" animationData={anim} />
    </div>
  );
};

export default ItemsNotFound;
