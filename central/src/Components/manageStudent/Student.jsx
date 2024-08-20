import { getBatch } from "../../utilities/functions";
import useAxiosPublic from "../../Hooks/axios/useAxiosPublic";
import axios from "axios";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/axios/useAxiosSecure";
import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
const apiKey = 868918224352984;
const cloudName = "dgv0tczin";
const Student = ({ student }) => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const [photoURL, setPhotoURL] = useState(null);
  const { personal, batch, _id } = student;
  const handlePhotoUpload = async (e) => {
    try {
      const { data } = await axiosPublic.get("/generate-signature");
      const photo = e.target.files[0];
      const formData = new FormData();
      formData.append("file", photo);
      formData.append("timestamp", data.timestamp);
      formData.append("api_key", apiKey);
      formData.append("signature", data.signature);

      const uploadResponse = await axios.post(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPhotoURL(uploadResponse.data.url);
      await axiosSecure
        .put(`/admin/manageuser?id=${student?._id}`, {
          "personal.photo": uploadResponse.data.url,
        })
        .then((res) => {
          toast.success("Photo Updated Successfully");
        });
    } catch (error) {
      console.error("Error uploading:", error);
      toast.error(error.message);
    }
  };
  useEffect(() => {
    setPhotoURL(personal.photo);
  }, [student]);
  return (
    <tr className="divide-x-2 divide-info-content border-2 border-info-content">
      <td className="size-12 object-cover relative p-2 mx-auto ">
        <div>
          <label htmlFor={_id} className="flex w-full max-w-[140px]">
            <div className="w-max truncate rounded-full hover:shadow-[0px_0px_4px_0.5px] border-[3px] border-teal-200 p-[1px] text-sm font-medium text-info-content shadow-md">
              <img
                src={photoURL || personal.photo || ""}
                alt="photo"
                className="size-10 rounded-full"
              />
            </div>
          </label>
          <input
            onChange={(e) => {
              if (e.target.files && e.target.files[0]) {
                handlePhotoUpload(e);
              }
            }}
            className="hidden"
            type="file"
            name="photo"
            id={_id}
          />
        </div>
      </td>
      <td className=" text-nowrap">{personal.name.fullName}</td>
      <td className=" text-nowrap">{personal.email}</td>
      <td className=" text-nowrap">{getBatch(batch)}</td>
    </tr>
  );
};

export default Student;
