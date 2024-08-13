import { FaUser } from "react-icons/fa";
import Contact from "./Contact";
import SocialLink from "./SocialLink";
import Skills from "./Skills";
import Languages from "./Languages";
import { useParams } from "react-router-dom";
import usePublicFetch from "../hooks/fetch/usePublicFetch";
import LoadingPage from "../pages/Shared/LoadingPage";
import { useEffect, useState } from "react";
import PageNotFound from "../pages/Shared/PageNotFound";
import Timeline from "./Timeline";

const Portfolio = () => {
  const { id } = useParams();
  const [info, setInfo] = useState({});
  const [isBlank, setBlank] = useState(false);
  const { loading, data, error } = usePublicFetch(
    `/students/allstudents?id=${id}`
  );
  useEffect(() => {
    if (!loading) {
      setInfo(data[0]);
    }
    if (data.length == 0 && !loading) {
      setBlank(true);
    }
  }, [loading]);

  // setLoading(false);
  if (loading) {
    return <LoadingPage />;
  }
  if (error || isBlank) {
    return <PageNotFound />;
  }
  const { personal, addressInfo, batch, education, role } = info;
  const showImage = () => {
    <dialog id="myimage" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Hello!</h3>
        <p className="py-4">Press ESC key or click outside to close</p>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>;
  };

  return (
    <>
      {data.length === 0 && <PageNotFound />}
      {data.length > 0 && (
        <div className="flex flex-col lg:flex-row lg:gap-6">
          {/*------------------------------- left side -------------------------------------- */}
          <div className="lg:w-[60%]">
            {/* heading  */}
            <div className="border-l-[30px] lg:border-l-[60px]  border-solid border-teal-900 pt-20 lg:pt-36 py-10">
              <h1 className="uppercase text-2xl lg:text-4xl px-10 font-extrabold tracking-widest	">
                Profile Info
              </h1>
            </div>
            {/* profile card  */}
            <div className="border-l-[40px] lg:border-l-[70px] flex items-center text-white gap-5  border-solid border-cyan-500 my-10 lg:mr-10	px-5  py-10 bg-teal-900">
              <img
                onClick={() => document.getElementById("myimage").showModal()}
                className="borderR  h-16 lg:h-28 "
                src={
                  personal?.photo
                    ? personal.photo
                    : personal?.gender === "F"
                    ? "https://i.ibb.co/C09P0X4/pngwing-com.png"
                    : "https://i.ibb.co/kD4FgLv/graduate-icon-5.png"
                }
                alt={info.personal?.name?.nickname}
              />
              {/* image modal  */}
              <dialog id="myimage" className="modal ">
                <div className="modal-box size-80  lg:size-96 p-0">
                  <img
                    className="size-80 lg:size-96 object-cover"
                    src={
                      personal?.photo
                        ? personal.photo
                        : personal?.gender === "F"
                        ? "https://i.ibb.co/C09P0X4/pngwing-com.png"
                        : "https://i.ibb.co/kD4FgLv/graduate-icon-5.png"
                    }
                    alt={info.personal?.name?.nickname}
                  />{" "}
                </div>
                <form method="dialog" className="modal-backdrop">
                  <button></button>
                </form>
              </dialog>
              <div>
                <h1 className="lg:text-4xl font-bold uppercase">
                  {personal?.name?.fullName}
                </h1>
                <div className="flex items-center gap-2 text-cyan-500">
                  <hr className=" border-2 border-cyan-500 w-[20%]" />
                  <p>STUDENT</p>
                </div>
              </div>
            </div>
            <div className="border-l-[30px] lg:border-l-[60px] flex flex-col gap-10 border-solid border-teal-900 py-10 pl-5 lg:pl-16">
              {/* about me  */}
              <div>
                <div className="flex gap-3 items-center text-xl lg:text-3xl font-bold">
                  <FaUser className="h-5 lg:h-20 text-xl lg:text-4xl" />
                  <p>ABOUT ME</p>
                </div>
                <p
                  className="text-lg text-justify leading-8 pr-5 lg:pr-0 indent-5"
                  dangerouslySetInnerHTML={{
                    __html: personal?.about
                      ? personal?.about
                      : "As a Computer Science & Engineering undergraduate have interest in competitive programming and Web Development, I possess an in-depth proficiency in MS Office applications. My passion for problem-solving and coding fuels my drive to excel in programming contests, where I constantly push boundaries to find creative solutions. My innovative vision allows me to approach challenges with a fresh perspective, seeking novel ways to optimize processes and enhance user experiences. With a strong foundation in technology and a thirst for continuous learning, I am committed to making a positive impact in the world of technology and beyond.",
                  }}
                ></p>
              </div>
              {/* education  */}
              <div className="">
                <p className="flex gap-3 items-center text-3xl font-bold">
                  Education
                </p>
                <Timeline academics={education} />
              </div>
            </div>
          </div>
          {/*------------------------------------ right side --------------------------------------- */}
          <div className="lg:w-[40%] border-l-[30px] lg:border-l-0 border-teal-900 pt-10  lg:pt-32 lg:bg-secondary-content pl-3 lg:pl-10">
            <Contact addressInfo={addressInfo} contact={personal} />
            <SocialLink
              social={info?.social ? info.social : []}
              coding={info?.codingProfile ? info.codingProfile : []}
            />
            <Skills />
            <Languages />
          </div>
        </div>
      )}
    </>
  );
};

export default Portfolio;
