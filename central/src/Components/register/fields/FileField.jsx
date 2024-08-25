import axios from "axios";
import { useState } from "react";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import useAxiosPublic from "../../../Hooks/axios/useAxiosPublic";
import Swal from "sweetalert2";
const apiKey = 868918224352984;
const cloudName = "dgv0tczin";
const FileField = ({ setData, field }) => {
  const [isUploading, setUploading] = useState(false);
  const axiosPublic = useAxiosPublic();
  const [showName, setShowName] = useState({});
  const [imageSrc, setImageSrc] = useState(null);
  const handlePhotoUpload = async (e) => {
    e.preventDefault();
    setUploading(true);
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
      setData((prevData) => ({
        ...prevData,
        [field.name]: uploadResponse.data.url,
      }));
      setUploading(false);
      console.log(uploadResponse.data.url);
      //   setPhotoURL(uploadResponse.data.url);
    } catch (error) {
      console.error("Error uploading:", error);
      toast.error(error.message);
    }
  };
  const uploadFlow = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();

      reader.onload = () => {
        setImageSrc(reader.result);
      };

      reader.readAsDataURL(file);
    }
    Swal.fire({
      text: "Are you sure to add this?",
      imageUrl: `${imageSrc}`,
      imageWidth: 350,
      imageHeight: 400,
      imageAlt: "Reselect photo if not shown there!",
    }).then((res) => {
      if (res.isConfirmed) {
        // handlePhotoUpload(e);
      } else {
        setImageSrc(null);
      }
    });
  };
  return (
    <div className="space-y-2  text-sm ">
      {/* {imageSrc && <img src={imageSrc} alt="" />} */}
      <h1 className=" font-medium font-philosopher text-xl">{field.label} </h1>
      <label
        className="flex  w-full items-center gap-4 rounded-md text-info-content bg-base-300 px-6 py-2 "
        htmlFor={field.name}
      >
        <FaArrowUpFromBracket size={20} />

        <div className="text-lg flex gap-5 items-center text-wrap">
          {" "}
          <p className="text-wrap">
            {showName.name ? showName.name : `Upload ${field.label}`}
          </p>
          {isUploading && <Spinner />}
        </div>
      </label>
      <input
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            const imageFile = e.target.files[0];
            setShowName(imageFile);
            handlePhotoUpload(e);
            // uploadFlow(e);
          }
        }}
        className="hidden"
        id={field.name}
        type="file"
      />
    </div>
  );
};

export default FileField;

const Spinner = () => {
  return (
    <div className="size-6 animate-[spin_2s_linear_infinite] rounded-full border-4 border-dotted border-info-content"></div>
  );
};
