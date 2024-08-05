import React, { useState } from "react";
import NoticeField from "./Components/NoticeField";
import Banner from "../../../components/Banner";
import Headline from "../../../components/Headline";
import noticeicon from "../../../assets/noticeicon.json";
import Lottie from "lottie-react";

const NewNotice = () => {
  const [count, setCount] = useState(1);

  let [ItemCount, setItemCount] = useState([1]);
  const [noticeData, setNoticeData] = useState([
    {
      course: "",
      courseTeacher: "",
      date: "",
      description: "",
      room: "",
      tag: [],
      time: "",
      title: "",
    },
  ]);
  const handeNewClass = () => {
    let l = ItemCount.length;
    setCount(count + 1);
    setItemCount([...ItemCount, l + 1]);
    setNoticeData([
      ...noticeData,
      {
        course: "",
        courseTeacher: "",
        date: "",
        description: "",
        room: "",
        tag: [],
        time: "",
        title: "",
      },
    ]);
  };
  const updatePageNumber = (num) => {
    if (num > page || 1 > num) {
      return setCount(1);
    }
    setCount(num);
  };
  const handleNotice = () => {
    let data = [];
    console.log("clicked");
    console.log(noticeData);
  };
  console.log(noticeData);

  return (
    <div className="min-h-screen z-[999]">
      <Banner>
        <Headline>Add New Notice</Headline>
      </Banner>
      <section className="py-10 flex flex-col gap-16 lg:flex-row px-5 lg:px-24">
        <div className="w-[80%] hidden lg:block">
          <Lottie className=" lg:sticky lg:top-5" animationData={noticeicon} />
        </div>
        <div className="w-full  bg-gradient-to-tr p-0.5 shadow-lg rounded from-pink-300 to-blue-300 ">
          <div className="bg-base-100 p-3">
            <div>
              <NoticeField
                itemNo={count}
                noticeData={noticeData}
                setNoticeData={setNoticeData}
              />
            </div>

            <div className="pt-7 flex select-none justify-center items-center gap-3 ">
              <div className="flex justify-center items-center gap-2 bg-white p-2 shadow-lg rounded-full">
                {ItemCount.map((item, ind) => (
                  <div
                    onClick={() => {
                      setCount(item);
                    }}
                    className={`cursor-pointer hover:scale-110 text-sm scale-100 transition-all duration-200 px-3 ${
                      count === item ? "bg-sky-500 text-white" : "bg-white"
                    } border-sky-300  font-semibold text-gray-700   py-[6px] rounded-full`}
                    key={item}
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div>
                <button
                  onClick={handeNewClass}
                  className={`cursor-pointer hover:scale-[1.05]  scale-100 transition-all duration-200 px-2 text-center flex justify-center items-center bg-sky-500 text-white  border-teal-200 border-2 rounded-full text-3xl`}
                >
                  +
                </button>
              </div>
            </div>

            <button onClick={handleNotice} className="btn w-full mt-8 my-2">
              Submit
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewNotice;
