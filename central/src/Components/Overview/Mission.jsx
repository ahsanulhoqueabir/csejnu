import React from "react";
import SectionTitle from "./SectionTitle";
import Lottie from "lottie-react";
import anim1 from "../../assets/animation/hero-ani-3.json";
const Mission = () => {
  return (
    <div>
      <SectionTitle>Mission</SectionTitle>
      <div className="float-end">
        <Lottie className="size-32 lg:w-60 h-24" animationData={anim1} />
      </div>
      <p className="text-justify rtl">
        The mission of CSE is to contribute the society by advancing the fields
        of Computer Science and Engineering through innovations in teaching and
        research thus enhancing student knowledge through instruction global
        engagement and experimental learning. The department of CSE provides
        excellent undergraduate and graduate education in a state-of-the art
        environment preparing students for careers as computer scientists in
        industry, government and academia. Also support society by participating
        and encouraging technology transfer.
      </p>
      <p className="text-justify">
        Through education, research and industry collaboration the department of
        CSE will be recognized universally as a part of the centrality of
        society. This department performs impactful research that advances the
        technology of the 21st century.
      </p>
    </div>
  );
};

export default Mission;
