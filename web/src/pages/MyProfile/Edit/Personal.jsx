import { useState } from "react";
import profile from "../../../assets/profile.jpg";

const Personal = () => {
  const [data, setData] = useState();
  const info = {
    name: {
      fullName: "Ahsanul Hoque",
      nickname: "Abir",
    },
    about: "hi this is ahsanul houque abir",
  };
  return (
    <div className="">
      <div>
        <div>
          <img
            className="size-28 rounded-full object-contain "
            src={profile}
            alt=""
          />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Personal;
