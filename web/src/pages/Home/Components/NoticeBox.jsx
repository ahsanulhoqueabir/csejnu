import React, { useEffect, useState } from "react";
import { FaMapPin } from "react-icons/fa";
import Swal from "sweetalert2";
import ExploreButton from "../../../components/Button/ExploreButton";
import { useNavigate } from "react-router-dom";
import {
  dateConvert,
  timeConvert,
  getTextColor,
} from "../../../utility/usefulfuntion";
import useAxiosPublic from "../../../hooks/axios/useAxiosSecure";

const NoticeBox = () => {
  const axiosPublic = useAxiosPublic();
  const [notice, setNotice] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axiosPublic.get("/notice/upcoming").then((res) => {
      setNotice(res.data.data);
    });
  }, []);

  const handleDetails = (notice) => {
    const { title, description, date, time } = notice;
    const data = description
      .map((it, i) => {
        return `<li class='text-left marker:text-sky-400'>${description[i]}</li>`;
      })
      .join("");

    Swal.fire({
      title: `<h1 class='text-normal md:text-xl space-y-5'>${title}</h1>`,
      html: `
      <div class='text-left text-small md:text-xl'>
      
      <h2 class =' font-bold'>Description: </h2>
    ${data}

    <h2 class='pt-5'><span class='font-bold'>Schedule</span>: ${dateConvert(
      date
    )} At ${time}

    
      </div>
`,
      showConfirmButton: false,
    });
  };
  const handlePage = () => {
    navigate("/allnotices");
  };

  return (
    <>
      <h1 className="text-4xl font-bold text-center py-10 myText select-none">
        Notice Board - Upcoming Events
      </h1>
      <div className="h-[450px] bg-base-200 p-3 lg:p-10 rounded-lg shadow-lg shadow-green-200">
        <section className="py-5 relative">
          {notice?.map((card, index) => (
            <div className="" key={index}>
              {index % 2 === 0 ? (
                <div
                  key={index}
                  onClick={() => handleDetails(card)}
                  className={` p-3 h- w-fit  my-3 cursor-pointer absolute rounded-lg shadow-lg `}
                  style={{
                    top: `${Math.random() * 70}%`,
                    left: `${Math.random() * 30}%`,
                    backgroundColor: `${card.bgcolor}`,
                  }}
                >
                  <div className="relative">
                    <FaMapPin className="absolute -top-8 -left-6 rotate-[-45deg] text-4xl text-info-content" />
                    <div className="absolute top-0 gap-1 right-0 flex text-sm">
                      {card.tag.map((it, i) => {
                        return (
                          <p
                            key={i}
                            className="py-1 px-4 bg-base-200  rounded-full "
                          >
                            {card.tag[i]}
                          </p>
                        );
                      })}
                    </div>
                    <div className={`pt-10 text-${getTextColor(card.bgcolor)}`}>
                      <h1>{card.title}</h1>
                      <h2>{dateConvert(card.date) + " " + card.time}</h2>
                    </div>
                  </div>
                </div>
              ) : (
                <div
                  key={index}
                  onClick={() => handleDetails(card)}
                  className={` p-3 h- w-60 cursor-pointer  my-3 absolute rounded-lg shadow-lg  `}
                  style={{
                    top: `${Math.random() * 100}px`,
                    right: `${Math.random() * 30}%`,
                    backgroundColor: `${card.bgcolor}`,
                  }}
                >
                  <div className="relative">
                    <FaMapPin className="absolute -top-8 -left-6 rotate-[-45deg] text-4xl text-teal-600" />

                    <div className="absolute top-0 gap-1 right-0 flex text-sm">
                      {card.tag.map((it, i) => {
                        return (
                          <p
                            key={i}
                            className="py-1 px-4 bg-teal-200  rounded-full "
                          >
                            {card.tag[i]}
                          </p>
                        );
                      })}
                    </div>
                    <div className="pt-10">
                      <h1>{card.title}</h1>
                      <h2>{dateConvert(card.date) + " " + card.time}</h2>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
      <ExploreButton onClick={handlePage} className={"my-10 mx-auto"}>
        See All Notices
      </ExploreButton>
    </>
  );
};

export default NoticeBox;
