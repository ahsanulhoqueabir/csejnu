import { FaCircleNotch, FaRegCheckCircle } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const EduTimeline = ({ academics }) => {
  const thisYear = new Date().getFullYear();
  return (
    <div>
      <VerticalTimeline layout="1-column-left" lineColor="black">
        {academics?.map((inst, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{ background: "teal", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  teal" }}
            date={`
            ${inst.passingYear} - ${inst.startYear}`}
            iconStyle={{ background: "cyan", color: "black" }}
            icon={
              inst.passingYear > thisYear ? (
                <FaCircleNotch className=" animate-spin" />
              ) : (
                <FaRegCheckCircle className=" " />
              )
            }
          >
            <h3 className="vertical-timeline-element-title text-lg">
              {inst.major || `${inst.level} (${inst.background})`}
            </h3>
            <h4 className="vertical-timeline-element-subtitle capitalize">
              {inst.institution}{" "}
            </h4>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default EduTimeline;
