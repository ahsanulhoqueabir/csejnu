import { FaCalendarAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";

const Contact = ({ personal, contact, addressInfo }) => {
  const bday = () => {
    const date = new Date(personal.birthday);
    const d = date.toString();
    return `${d.split(" ")[0]} ${d.split(" ")[1]} ${d.split(" ")[2]}`;
  };

  return (
    <div className="text-info-content">
      <h1 className="text-3xl">CONTACT</h1>
      <ul className="py-5 text-lg flex flex-col gap-3">
        <li className="flex items-center gap-4">
          <a
            href={`tel:+88${contact?.phone}`}
            className="p-2 bg-accent-content rounded-full"
          >
            <FaPhone className=" text-sm" />
          </a>
          <p>{contact?.phone ? contact?.phone : "01********"}</p>
        </li>
        <li className="flex items-center gap-4">
          <a
            href={`mailto:${contact?.email}`}
            className="p-2 bg-accent-content rounded-full"
          >
            <FaEnvelope className=" text-sm" />
          </a>
          <p>{contact?.email}</p>
        </li>
        <li className="flex items-center gap-4">
          <a
            href={`https://www.google.com/maps/search/${addressInfo?.current?.location}`}
            target="blank"
            className="p-2 bg-accent-content rounded-full"
          >
            <FaMapMarkerAlt className=" text-sm" />
          </a>
          <p>{addressInfo?.current?.location} Dhaka,Bangladesh</p>
        </li>
        <li className="flex items-center gap-4">
          <p className="p-2 bg-accent-content rounded-full">
            <FaCalendarAlt />
          </p>
          <p>{personal?.birthday ? bday() : "Nai"}</p>
        </li>
      </ul>
      <hr className=" border-gray-400 w-3/4 py-5" />
    </div>
  );
};

export default Contact;
