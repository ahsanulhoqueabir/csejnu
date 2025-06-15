import { useNavigate } from "react-router-dom";
import { getImage } from "../../utilities/functions";

const SingleFaculty = ({ faculty }) => {
  const { personal, position } = faculty;
  const navigate = useNavigate();
  const rName = personal.name.fullName.split(" ").join("-");
  return (
    <div className="md:flex gap-3  p-2 border border-info-content rounded-md">
      <div className="w-44 md:w-64 mx-auto">
        <img
          className="h-44 rounded-md object-cover"
          src={
            personal.photo
              ? personal.photo
              : personal.gender === "M"
              ? getImage("photo", "faculty.jpeg")
              : getImage("photo", "facultyfff.jpeg")
          }
          alt=""
        />
      </div>
      <div className="w-full flex-col pt-3 lg:pt-0">
        <div className=" flex-1">
          <h1>{personal.name.fullName}</h1>
          <h2 className="text-sm">{position}</h2>
          <h3>{personal.email}</h3>
          <a type="+tel">{personal.phone}</a>
        </div>
        <div className="flex justify-center w-full py-5 ">
          <button
            onClick={() => {
              navigate(`/faculty/profile/${rName}`);
            }}
            className="w-[90%] rounded-full py-2 font-medium text-gray-400 shadow-[0px_0px_10px_#E2DADA] duration-500  hover:scale-95 hover:bg-success hover:text-white hover:shadow-xl dark:shadow-[0px_2px_8px_0px_rgba(0,0,0,0.8)]"
          >
            View Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFaculty;
