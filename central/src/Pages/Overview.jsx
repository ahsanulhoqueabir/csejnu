import Mission from "../Components/Overview/Mission";
import Objectives from "../Components/Overview/Objectives";
import Vision from "../Components/Overview/Vision";

const Overview = () => {
  return (
    <div className="lg:px-28">
      <Vision />
      <Mission />
      <Objectives />
    </div>
  );
};

export default Overview;
