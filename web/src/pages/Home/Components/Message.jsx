import React, { useEffect, useState } from "react";
import anim from "../../../assets/chatbox.json";
import Lottie from "lottie-react";
import { FaSync } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/axios/useAxiosSecure";

const Message = () => {
  const axiosPublic = useAxiosPublic();
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(true);
  const [msg, setMsg] = useState(
    "Click Icon(Diamond or Double Arrow) to get Your Message!"
  );
  useEffect(() => {
    axiosPublic.get("/messages").then((res) => {
      setMessage(res.data);
      setLoading(false);
    });
  }, []);

  const handleMsgShow = () => {
    const length = message?.length;
    const position = Math.floor(Math.random() * length);
    setMsg(message[position].message);
  };
  return (
    <div className="flex gap-5 lg:px-20  py-10">
      <div className="w-full hidden lg:block">
        <Lottie className="h-60" animationData={anim}></Lottie>
      </div>
      <div className="w-full ">
        <div className=" bg-gradient-to-tr rounded from-pink-300 to-blue-300 p-0.5 shadow-lg">
          <div className="bg-base-100 h-60 rounded p-5 relative flex flex-col">
            <img
              onClick={handleMsgShow}
              className="absolute -top-9  w-[60px] border h-[60px] object-cover rounded-full p-2 bg-slate-100 duration-300 hover:scale-105"
              src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL2pvYjk2OC1lbGVtZW50LTAxMi14LmpwZw.jpg"
              alt=""
            />
            <div className="py-5 myText flex-1">{!loading && msg}</div>
            <div className="flex justify-center mt-5">
              <button onClick={handleMsgShow}>
                <FaSync />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Message;
