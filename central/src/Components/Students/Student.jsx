import { useNavigate } from "react-router-dom";
import SMCP from "../../../../web/src/utility/iconname";
import { getImage } from "../../utilities/functions";
import GetIcon from "../../utilities/Icon";
import "./style.css";

const Student = ({ student }) => {
  const navigate = useNavigate();
  const { id, personal } = student;
  const social = [...student.social, ...student.codingProfile];
  return (
    <div className="flex w-full  h-[550px] flex-col items-center justify-center  rounded-xl bg-accent-content p-4 shadow-lg text-info-content">
      {/* <div className="student-header card-cover"></div> */}
      <div className="group relative  ">
        <img
          onClick={() => document.getElementById(id).showModal()}
          width={110}
          height={110}
          className="h-[110px] w-[110px] rounded-full bg-slate-500 object-cover"
          src={
            personal?.photo ? personal.photo : getImage("photo", "profile.jpg")
          }
          alt={personal?.name.fullName}
        />
        {/* modal  */}
        <dialog id={id} className="modal">
          <div className="modal-box size-80 lg:size-96 p-0 shadow-md shadow-teal-200">
            <img
              className="size-80 lg:size-96 object-cover"
              src={
                personal?.photo
                  ? personal.photo
                  : getImage("photo", "profile.jpg")
              }
              // alt={info.personal?.name?.nickname}
            />{" "}
          </div>
          <form method="dialog" className="modal-backdrop">
            <button></button>
          </form>
        </dialog>
        <span className="absolute bottom-3 right-0 h-5 w-5 rounded-full border-[3px] border-white bg-green-500 dark:border-[#18181B]"></span>
        <span className="absolute bottom-3 right-0 h-5 w-5 animate-ping rounded-full bg-green-500"></span>
      </div>
      <div className="space-y-1 text-center pb-2">
        <h1 className="text-2xl font-playwrite">{personal?.name?.fullName}</h1>
        <p className="text-sm text-gray-400">CSE undergrad</p>
      </div>

      {/* bio  */}
      <div className="h-[350px] overflow-y-auto no-scrollbar">
        <div
          className="text-justify px-2 line-clamp-[8]	"
          dangerouslySetInnerHTML={{
            __html:
              personal?.about ||
              "Being a student, my academic journey sharpened me with excellent programming and problem-solving skills and in-depth knowledge of algorithms and data structures. My areas of interest are software development, artificial intelligence, and cybersecurity. I have practical experience in application building and hands-on working experience with state-of-the-art technologies through projects and internships. Looking forward to learning, contributing towards meaningful projects, and growing as a professional in the tech industry.(AI)",
          }}
        ></div>
      </div>
      {/* social icons  */}
      <div className="flex justify-between gap-4 py-1 pb-2">
        {social.slice(0, 5).map((prof, index) => (
          <Account key={index} profile={prof} />
        ))}
      </div>
      <div className="flex justify-center w-full">
        <button
          onClick={() => {
            navigate(`/students/details/${id}`);
          }}
          className="w-[90%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-success hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]"
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default Student;

const Account = ({ profile }) => {
  const info = SMCP[profile.platform];
  const regex = /^https?:\/\/www\./;
  const url = info?.base.replace(regex, "");
  const link =
    profile.link?.trim() || profile.handle?.trim() || profile.username?.trim();
  return (
    <li className="flex items-center gap-2 w-full ">
      <a
        href={`${info.base}${link}`}
        target="blank"
        className="p-2 bg-accent-content rounded-full"
      >
        <GetIcon
          className={"text-4xl text-success 2 rounded-full   animate-pulse"}
          icon={`${info.icon.trim()}`}
          lib={info.pack}
        />
      </a>
      {/* <p className="">{link}</p> */}
    </li>
  );
};
