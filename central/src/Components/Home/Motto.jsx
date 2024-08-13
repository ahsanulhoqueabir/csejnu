import bg from "../../assets/bg/tech.png";
import { getImage } from "../../utilities/functions";
import { FaQuoteLeft } from "react-icons/fa";

const Motto = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "contain",
        backgroundColor: "#04293A",

        // backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        objectFit: "cover",
        height: "450px",
        width: "100%",
      }}
      className="bg-fixed bg-opacity-70 rounded-lg flex justify-center items-center"
    >
      <div className="h-[300px] w-[85%] lg:w-2/3 bg-base-300 text-info-content rounded-md py-8 px-5 lg:flex items-center">
        <div className="lg:w-[30%] flex items-center gap-2 lg:flex-col">
          <img
            className="size-12 lg:size-40 rounded-md shadow-md shadow-teal-300"
            src={getImage("photo", "chairman.jpeg")}
            alt=""
          />
          <div>
            <p className="pt-3 font-medium">Dr. Uzzal Kumar Acharjee</p>
            <p className=" text-sm">Chairman</p>
          </div>
        </div>
        <div className="lg:w-[70%] relative">
          <fieldset className="border-2 rounded-lg border-black p-3">
            <legend className="">
              <FaQuoteLeft className="text-2xl " />
            </legend>
            <p className="text-sm lg:text-xl text-justify">
              Transforming ideas into impact, our department blends curiosity
              with expertise to forge groundbreaking technologies, inspiring
              students to explore, innovate, and drive meaningful change in an
              ever-evolving digital world.
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Motto;
