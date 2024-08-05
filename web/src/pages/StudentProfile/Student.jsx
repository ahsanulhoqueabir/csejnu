import {
  FaEnvelopeCircleCheck,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaLocationDot,
  FaLocationPin,
  FaSquarePollVertical,
  FaYoutube,
} from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import "../StudentProfile/StudentCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import Education from "./Sections/Education";
import Contact from "./Sections/Contact";

const Student = ({ item }) => {
  const [activeSection, setActiveSection] = useState("#about");

  const { id, personal, addressInfo, codingProfile, education, social } = item;
  const handleSection = (sectionId) => {
    setActiveSection(sectionId);
  };
  return (
    <div
      className={`Card bg-secondary-content text-info-content max-w-[450px] ${
        activeSection == "#about" ? "is-activee " : " "
      }`}
      id="card"
      data-state={activeSection}
    >
      {/* card header ---------------- */}
      <div className="card-header text-info-content">
        {/* <div className="card-cover bg-gradient-to-r from-teal-400 from-10% via-sky-200 via-50% to-teal-400 to-10%"></div> */}
        <div className="card-cover student-header"></div>
        <img
          className="card-avatar myBGimg object-cover object-center"
          src={
            personal.photo
              ? personal.photo
              : personal.gender === "F"
              ? "https://i.ibb.co/C09P0X4/pngwing-com.png"
              : "https://i.ibb.co/kD4FgLv/graduate-icon-5.png"
          }
          alt={personal.name.nickname}
        />
        <h1 className="card-fullname pb-3 uppercase">
          {personal.name.fullName}{" "}
        </h1>
        <h2 className="card-jobtitle">CSE Undergrad</h2>
      </div>
      {/* card main part --------------- */}
      <div className="card-main text-info-content">
        <div
          className={`card-section ${
            activeSection === "#about" ? "is-active" : ""
          }`}
          id="about"
        >
          <div className="card-content text-info-content">
            <div className="card-subtitle">ABOUT</div>
            <div
              className="card-desc text-info-content first-letter:text-7xl first-letter:font-bold first-letter:text-info-content
  first-letter:mr-3 first-letter:float-left"
            >
              {personal.about
                ? personal.about
                : " A CSE undergraduate with a passion for problem solving and web development. Eager to learn and grow, actively participates in coding competitions, hones my skills in web technologies, and maintains a portfolio to showcase my projects."}
            </div>
          </div>
        </div>
        <div
          className={`card-section ${
            activeSection === "#education" ? "is-active" : ""
          }`}
          id="education"
        >
          <Education education={education} />
        </div>
        <div
          className={`card-section ${
            activeSection === "#contact" ? "is-active" : ""
          }`}
          id="contact"
        >
          <Contact
            id={id}
            personal={personal}
            addressInfo={addressInfo}
            social={social}
            codingProfile={codingProfile}
          />
        </div>
      </div>
      <div className="card-buttons bg-[#78ABA8]">
        <button
          onClick={() => handleSection("#about")}
          className={activeSection == "#about" ? "is-active" : ""}
        >
          ABOUT
        </button>
        <button
          onClick={() => handleSection("#education")}
          className={activeSection === "#education" ? "is-active" : ""}
        >
          EDUCATION
        </button>
        <button
          onClick={() => handleSection("#contact")}
          className={activeSection === "#contact" ? "is-active" : ""}
        >
          CONTACT
        </button>
      </div>
    </div>
  );
};

export default Student;
