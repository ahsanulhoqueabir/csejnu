import Lottie from "lottie-react";
import anim from "../../assets/animation/csejnu.json";
const Hero = () => {
  return (
    <div className=" lg:flex items-center">
      {" "}
      <div className="lg:w-[45%]">
        <Lottie animationData={anim} />
      </div>
      <div className="w-full lg:w-[55%] myText py-16">
        <h1 className="text-4xl font-bold">Computer Science & Engineering</h1>
        <h2 className="text-3xl font-black">Jagannath University</h2>
        <p
          className="revMyText text-justify text-lg first-letter:text-7xl  first-letter:text-black first-letter:font-black
  first-letter:mr-3 first-letter:float-left select-none"
        >
          The Department of Computer Science and Engineering is one that
          inspires innovation at the junction of cutting-edge technology and
          visionary thinking. Our dynamic curriculum is designed for provocation
          and challenges, thus igniting curiosity with a burning desire for more
          discovery while arming our students with skills for leadership in an
          ever-more digital world. Faculty instruction comes from pioneering
          scholars and industry veterans in the business of pushing the limits
          of knowledge. Often research-intensive, hands-on, and
          interdisciplinary, we train our students under these emphases to sign
          up to answer the grand challenges of tomorrow. Become a part of a
          vibrant community dedicated to shaping the future of technology and
          engineering excellence.
        </p>
      </div>
    </div>
  );
};

export default Hero;
