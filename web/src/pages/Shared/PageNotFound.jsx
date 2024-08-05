import Lottie from "lottie-react";
import ani from "../../assets/animation/page-not-available.json";
const PageNotFound = () => {
  return (
    <div>
      <Lottie className="w-full h-[calc(100vh-170px)]" animationData={ani} />
    </div>
  );
};

export default PageNotFound;
