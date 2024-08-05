import React from "react";
import ani2 from "../../../assets/animation/com-code.json";
import Lottie from "lottie-react";

const Section2 = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-3 items-center ">
      <div className="lg:w-[30%]">
        <Lottie className="h-[550px]" animationData={ani2}></Lottie>
      </div>
      <div className="lg:w-[60%] text-xl">
        <p>
          Computer science plays a pivotal role in shaping the modern world,
          driving innovation across industries.
          <br />
          Its importance lies in solving complex problems, optimizing processes,
          and enabling technological advancements. In today's digital era, the
          job market for computer science professionals is thriving, offering
          diverse opportunities. From software development and cybersecurity to
          artificial intelligence and data analysis, the demand for skilled
          computer scientists is consistently high.
          <br />
          As technology continues to evolve, the job market in computer science
          remains dynamic, promising fulfilling careers and the chance to
          contribute to society's ongoing technological transformation.
          Embracing computer science opens doors to a world of possibilities and
          continual growth.
        </p>
      </div>
    </div>
  );
};

export default Section2;
