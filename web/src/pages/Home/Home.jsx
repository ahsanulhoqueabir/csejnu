import ani1 from "../../assets/education-table.json";
import rocket from "../../assets/rocket.json";
import Lottie from "lottie-react";
import "../../index.css";
import LoadingPage from "../Shared/LoadingPage";
import Message from "./Components/Message";
import NoticeBox from "./Components/NoticeBox";
import useAuth from "../../hooks/useAuth";
import JNUNotice from "./Components/JNUNotice";
import Section2 from "./Components/Section2";

const Home = () => {
  const { loading } = useAuth();
  if (loading) {
    return <LoadingPage />;
  }

  return (
    <div className="lg:px-24 px-5 py-10">
      <div className="">
        <img
          className="w-full h-full shadow-2xl rounded-lg"
          src="https://i.ibb.co/R4dHwyS/jnu-cse-13.jpg"
          alt=""
        />
      </div>

      <div className="my-10">
        <NoticeBox />
      </div>
      {/* message section  */}
      <Message />
      {/* 1st section---------------  */}
      <div className="flex flex-col-reverse pt-5 lg:flex-row  gap-3 items-center ">
        <div className="lg:w-[30%] relative">
          <h1 className="text-2xl lg:text-5xl">
            {" "}
            Explore innovation, collaboration, and cutting-edge tech in our
            dynamic learning community. Success awaits!
          </h1>
          <div
            className=" absolute h-8 lg:h-24 "
            style={{ animation: "slideRocket 5s linear	 infinite" }}
          >
            <Lottie className="h-24" animationData={rocket}></Lottie>
          </div>
        </div>
        <div className="lg:w-[70%]">
          <Lottie className="h-[550px]" animationData={ani1}></Lottie>
        </div>
      </div>
      <JNUNotice />
      {/* 2nd section ------------------ */}
      {/* <Section2 /> */}
    </div>
  );
};

export default Home;
