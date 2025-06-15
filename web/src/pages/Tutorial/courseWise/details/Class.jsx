import React from "react";
import { dateDifference, getImage } from "../../../../utility/functions";
import { Link } from "react-router-dom";

const Class = ({ item }) => {
  const path = item.course.CourseTitle.replace(/ /g, "-");
  return (
    <div className="md:w-[60%] ">
      <div className="border-2  border-teal-600 rounded-lg">
        <iframe
          className="h-[240px] md:h-[280px] lg:h-[450px] w-full rounded"
          src={`https://www.youtube.com/embed/${item.classURL}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>
      <div className="pt-2 grid">
        <strong>{item.topic}</strong>
        <small>
          {" "}
          {new Date(item.date).toString().split(" ").slice(0, 4).join(" ")}
          <span className="pl-2">({dateDifference(item.date)})</span>
        </small>
      </div>
      <div className="pt-5 flex items-center gap-3">
        <img
          className="rounded-full size-8 bg-info-content"
          src={getImage("others", "teacher.png")}
          alt=""
        />
        <Link
          className="font-semibold"
          to={`/academic/tutorial-online/${path}`}
        >
          {item.course.CourseTitle}
        </Link>
      </div>
    </div>
  );
};

export default Class;
