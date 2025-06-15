import { FaPhoneAlt } from "react-icons/fa";
import {
  FaEnvelopeCircleCheck,
  FaLocationDot,
  FaLocationPin,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import SMCP from "../../../utility/iconname";
import GetIcon from "../../../utility/icons";
const Contact = ({
  addressInfo,
  id,
  social,
  codingProfile,
  personal,
  profiles,
}) => {
  const { current } = addressInfo;
  const allProfile = {
    ...profiles.social,
    ...profiles.coding,
  };
  return (
    <div className="card-content mt-8">
      <div className="card-subtitle">CONTACT</div>
      <div className="mt-5 flex flex-col gap-5 text-lg">
        <div className=" flex gap-3 ">
          <FaLocationDot className="myBorderClass " />
          {current.location ? current.location : "Not Available"}
        </div>
        <div className="flex gap-3 ">
          <FaPhoneAlt className="myBorderClass " />
          {personal.phone && personal.gender == "M"
            ? personal.phone
            : "Not Available"}{" "}
        </div>
        <div className="flex gap-3 ">
          <FaEnvelopeCircleCheck className="myBorderClass " />
          {personal.email}{" "}
        </div>
        <div className="flex gap-3 ">
          <FaLocationPin className="rotate-180 pl-2 text-red-600 text-3xl  border-teal-600 border-l-2" />
          <h5> {personal.blood ? personal.blood : "Not Provided"}</h5>
        </div>

        <div className="card-social">
          {Object.keys(allProfile)
            .slice(0, 5)
            .map((profile, index) => (
              <Media profile={allProfile[profile]} key={index} />
            ))}
        </div>

        <Link to={`${id}`}>
          <button className="contact-me uppercase">LEARN more</button>
        </Link>
      </div>
    </div>
  );
};

export default Contact;

const Media = ({ profile }) => {
  const info = SMCP[profile.platform];
  return (
    <>
      <a
        className="underline animate-pulse"
        href={`${info.base && info.base}${
          profile.link?.trim() ||
          profile.handle?.trim() ||
          profile.username?.trim()
        }`}
      >
        <GetIcon
          icon={`${info.icon.trim()}`}
          lib={info.pack}
          className="text-5xl"
        />
      </a>
    </>
  );
};
