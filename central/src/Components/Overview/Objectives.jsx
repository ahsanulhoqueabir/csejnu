import React from "react";
import SectionTitle from "./SectionTitle";
import data from "./data.json";
import anim1 from "../../assets/animation/hero-ani-1.json";
import Lottie from "lottie-react";
const Objectives = () => {
  return (
    <div className="">
      <SectionTitle>Objectives</SectionTitle>
      <div>
        <div className="float-end">
          <Lottie className="size-32 lg:w-96 h-60" animationData={anim1} />
        </div>
        <p className="text-2xl pb-2">
          To realize our vision we must succeed the following objectives:
        </p>
        <ul className="list-decimal ml-4 space-y-2">
          {data.map((item, index) => (
            <li key={index}>
              <p>
                <strong className="font-semibold">{item.title}</strong> :{" "}
                <span className="capitalize">{item.subtitle}</span>
              </p>
              {item.objectives && (
                <ul className="list-square ml-5 space-y-1">
                  {item.objectives.map((objective, index) => (
                    <li key={index}>{objective}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Objectives;
