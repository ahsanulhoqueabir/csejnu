import BreadCrumb from "../Components/common/BreadCrumb";
import Mission from "../Components/Overview/Mission";
import Objectives from "../Components/Overview/Objectives";
import Vision from "../Components/Overview/Vision";

const Overview = () => {
  return (
    <>
      <BreadCrumb page={"overview"} />
      <div className="lg:px-28">
        <Vision />
        <Mission />
        <Objectives />
      </div>
    </>
  );
};

export default Overview;
