import "../StudentProfile/StudentCard.css";
import { useState } from "react";
import Education from "./Sections/Education";
import Contact from "./Sections/Contact";

const Student = ({ item }) => {
  const [activeSection, setActiveSection] = useState("#about");

  const {
    id,
    personal,
    addressInfo,
    codingProfile,
    education,
    profiles,
    social,
  } = item;
  const handleSection = (sectionId) => {
    setActiveSection(sectionId);
  };
  return (
    <div
      className={`Card bg-secondary-content text-info-content max-w-[450px] ${
        activeSection == "#about" ? "is-activee " : " "
      } h-[460px]`}
      id="card"
      data-state={activeSection}
    >
      {/* card header ---------------- */}
      {activeSection === "#about" ? (
        <AboutHeader id={id} personal={personal} />
      ) : (
        <Header id={id} personal={personal} />
      )}
      {/* <AboutHeader id={id} personal={personal} /> */}

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
              className="font-changa card-desc text-info-content first-letter:text-7xl first-letter:font-bold first-letter:text-info-content
  first-letter:mr-3 first-letter:float-left"
              dangerouslySetInnerHTML={{
                __html: personal.about
                  ? personal.about
                  : " A CSE undergraduate with a passion for problem solving and web development. Eager to learn and grow, actively participates in coding competitions, hones my skills in web technologies, and maintains a portfolio to showcase my projects.",
              }}
            ></div>
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
            profiles={profiles}
            personal={personal}
            addressInfo={addressInfo}
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

const Header = ({ personal, id }) => {
  return (
    <div className=" relative h-16">
      <div className=" add-card-cover student-header"></div>
      <div className="py-3 px-5 flex items-center z-20">
        <div>
          <img
            onClick={() => document.getElementById(id).showModal()}
            className="rounded-full absolute top-2 size-12 myBGimg object-cover object-center shadow shadow-white"
            src={
              personal.photo
                ? personal.photo
                : personal.gender === "F"
                ? "https://i.ibb.co/C09P0X4/pngwing-com.png"
                : "https://i.ibb.co/kD4FgLv/graduate-icon-5.png"
            }
            alt={personal.name.nickname}
          />
        </div>
        <div>
          <h1 className="absolute top-3 left-20 font-semibold  uppercase font-philosopher">
            {personal.name.fullName}{" "}
          </h1>
          <h2 className="absolute left-20 top-9 text-gray-500 font-medium text-xs">
            CSE Undergrad
          </h2>
        </div>
      </div>{" "}
      {/* <hr className="border absolute top-[72px] border-info-content w-[92%] mx-5" /> */}
      <dialog id={id} className="modal">
        <div className="modal-box size-80 lg:size-96 p-0 shadow-md shadow-teal-200">
          <img
            className="size-80 lg:size-96 object-cover"
            src={
              personal?.photo
                ? personal.photo
                : personal?.gender === "F"
                ? "https://i.ibb.co/C09P0X4/pngwing-com.png"
                : "https://i.ibb.co/kD4FgLv/graduate-icon-5.png"
            }
            // alt={info.personal?.name?.nickname}
          />{" "}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
    </div>
  );
};

const AboutHeader = ({ personal, id }) => {
  return (
    <div className="card-header ">
      <div className="card-cover student-header"></div>
      <img
        onClick={() => document.getElementById(id).showModal()}
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

      <h1 className=" font-philosopher card-fullname pb-5 uppercase">
        {personal.name.fullName}{" "}
      </h1>
      <h2 className="card-jobtitle">CSE Undergrad</h2>
      <dialog id={id} className="modal">
        <div className="modal-box size-80 lg:size-96 p-0 shadow-md shadow-teal-200">
          <img
            className="size-80 lg:size-96 object-cover"
            src={
              personal?.photo
                ? personal.photo
                : personal?.gender === "F"
                ? "https://i.ibb.co/C09P0X4/pngwing-com.png"
                : "https://i.ibb.co/kD4FgLv/graduate-icon-5.png"
            }
            alt={personal?.name?.nickname}
          />{" "}
        </div>
        <form method="dialog" className="modal-backdrop">
          <button></button>
        </form>
      </dialog>
    </div>
  );
};
