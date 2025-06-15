import { useRef, useState } from "react";
import useUserdata from "../../../../hooks/fetch/useUserdata";
import { dateInput, getImage } from "../../../../utility/functions";
import LoaderComponent from "../../../Shared/LoaderComponent";
import { toast } from "react-toastify";
import useAxiosSecure from "../../../../hooks/axios/useAxiosSecure";
import useAuth from "../../../../hooks/useAuth";

const Personal = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const fileInputRef = useRef();
  const { loading, data, error, setUserData } = useUserdata();
  const [newData, setupdatedData] = useState({});

  if (loading) {
    return <LoaderComponent />;
  }
  const handlePhotoClick = () => {
    fileInputRef.current.click();
  };
  const handelPhotoUpload = (e) => {
    const apiURL = import.meta.env.VITE_APIKEY_IMGAGEUPLOAD_TOKEN;
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${apiURL}`;
    const photoFile = e.target.files[0];
    const imgData = new FormData();
    imgData.append("image", photoFile);
    if (photoFile) {
      fetch(img_hosting_url, {
        method: "POST",
        body: imgData,
      })
        .then((res) => res.json())
        .then(async (data) => {
          if (data.success === true) {
            setUserData({
              ...data,
              personal: {
                ...data.personal,
                photo: data.data.display_url,
              },
            });

            await axiosSecure
              .put(`/students/updateStudent?email=${user?.email}`, {
                "personal.photo": data.data.display_url,
              })
              .then((res) => {
                toast("Photo Updated Successfully");
              });
          }
        });
    }
  };
  const handleInput = async (e) => {
    e.preventDefault();
    await axiosSecure
      .put(`/students/updateStudent?email=${user?.email}`, newData)
      .then((res) => {
        toast("Info Updated Successfully");
      })
      .catch((err) => {
        toast.error("Failed to update Info");
      });
  };

  return (
    <div>
      <div>
        <div className="group relative size-36 duration-500">
          <img
            onClick={handlePhotoClick}
            className="size-36 group-hover:opacity-50 duration-75 group-hover:duration-[2000ms] rounded-full object-cover"
            src={data.personal?.photo || ""}
            alt=""
          />
          <img
            onClick={handlePhotoClick}
            className="size-16 absolute inset-0 opacity-0 duration-100 ease-out group-hover:opacity-100 group-hover:duration-[2000ms] top-10 left-10"
            src={getImage("stocks", "camera.png")}
            alt=""
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handelPhotoUpload}
            className="hidden"
          />
        </div>
      </div>
      <div className="py-5">
        <form onSubmit={handleInput} className=" text-info-content">
          <div className="grid lg:grid-cols-2 gap-5 ">
            <div className={`space-y-2 text-sm `}>
              <label className=" font-medium">Full Name</label>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                defaultValue={data.personal?.name?.fullName}
                onChange={(e) => {
                  setupdatedData({
                    ...newData,
                    "personal.name.fullName": e.target.value,
                  });
                }}
                className={`inputText `}
              />
            </div>
            <div className={`space-y-2 text-sm `}>
              <label className=" font-medium">Nickname</label>
              <input
                name="nickname"
                type="text"
                placeholder="Your Nickname"
                defaultValue={data.personal?.name?.nickname}
                onChange={(e) => {
                  setupdatedData({
                    ...newData,
                    "personal.name.nickname": e.target.value,
                  });
                }}
                className={`inputText `}
              />
            </div>
            <div className={`space-y-2 text-sm `}>
              <label className=" font-medium">Email</label>
              <input
                name="email"
                type="text"
                disabled
                placeholder="Your Email"
                defaultValue={data.personal?.email}
                className={`inputText cursor-not-allowed`}
              />
            </div>
            <div className="space-y-2 ">
              <label className="font-medium">Blood Group</label>
              <select
                name="blood"
                defaultValue={data?.personal?.blood}
                className="w-full bg-secondary-content py-2 px-4 focus:outline-none placeholder:text-black"
                onChange={(e) => {
                  setupdatedData({
                    ...newData,
                    "personal.blood": e.target.value,
                  });
                }}
              >
                {Object.keys(bloodGroups).map((option, ind) => {
                  return (
                    <option
                      key={ind}
                      className="bg-secondary-content "
                      value={option}
                    >
                      {bloodGroups[option]}
                    </option>
                  );
                })}
              </select>
            </div>{" "}
            <div className="space-y-2 ">
              <label className="font-medium">Phone No</label>
              <input
                name="phone"
                type="text"
                maxLength={11}
                placeholder="Your Phone No"
                defaultValue={data.personal?.phone}
                onChange={(e) => {
                  setupdatedData({
                    ...newData,
                    "personal.phone": e.target.value,
                  });
                }}
                className={`inputText `}
              />
            </div>
            <div className="space-y-2 ">
              <label className="font-medium">Date of Birth</label>
              <input
                name="dob"
                type="date"
                placeholder="Date of Birth"
                value={dateInput(data.personal?.birthday)}
                onChange={(e) => {
                  setupdatedData({
                    ...newData,
                    "personal.birthday": e.target.value,
                  });
                }}
                className={`inputText `}
              />
            </div>
          </div>
          <div className="py-6 flex justify-center">
            <button
              type="submit"
              className="bg-accent-content w-full lg:w-1/3 mx-auto text-primary-button px-4 py-3 rounded-md"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Personal;

const bloodGroups = {
  "A+": "A+",
  "A-": "A-",
  "B+": "B+",
  "B-": "B-",
  "AB+": "AB+",
  "AB-": "AB-",
  "O+": "O+",
  "O-": "O-",
};
