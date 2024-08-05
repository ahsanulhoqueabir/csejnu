import React from "react";
import noticeicon from "../../../assets/noticeicon.json";
import Lottie from "lottie-react";
import { timeConvert } from "../../../utility/usefulfuntion";
import Swal from "sweetalert2";
import Banner from "../../../components/Banner";
import Headline from "../../../components/Headline";
import { toast } from "react-toastify";

import { addNoticeFields as fields } from "../../../utility/fieldData.js";
import useAxiosSecure from "../../../hooks/axios/useAxiosSecure";
const AddNotice = () => {
  const axiosSecure = useAxiosSecure();
  const handleNotice = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const data = {};
    for (let name of formData.keys()) {
      data[name] = formData.get(name);
    }

    const dsc = data.description.split(".");
    if (!dsc[dsc.length - 1]) {
      dsc.pop();
    }
    const tags = data.tag.split(",");
    if (!tags[tags.length - 1]) {
      tags.pop();
    }
    const newTime = timeConvert(data.time);
    data.description = dsc;
    data.tag = tags;
    data.time = newTime;
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, add it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.post("/notice/add", data);
        toast.success("Your notice has been added!");
      }
    });
    // form.reset();
  };
  return (
    <div className="min-h-[calc(100vh-150px)]">
      <Banner>
        <Headline>Add New Notice</Headline>
      </Banner>
      <section className=" flex flex-col gap-16 lg:flex-row px-5 lg:px-24">
        <div className="w-[80%]">
          <Lottie className=" lg:sticky lg:top-5" animationData={noticeicon} />
        </div>
        <div className="w-full lg:py-20">
          {/* <Headline>Add New Notice</Headline> */}
          <form onSubmit={handleNotice} className="">
            <div className="grid grid-cols-1  gap-3">
              {fields.map((field, index) => {
                return field.type === "select" ? (
                  <div
                    key={index}
                    data-aos="zoom-in-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className="space-y-2 "
                  >
                    <label className="font-medium" htmlFor={field.name}>
                      {field.label}
                    </label>
                    <select
                      key={index}
                      name={field.name}
                      className="w-full placeholder:text-black bg-neutral py-2 px-4 focus:outline-none"
                    >
                      <option selected disabled hidden>
                        {field.label}
                      </option>
                      {field.options.map((option, index) => (
                        <option
                          className="bg-base-100"
                          key={index}
                          value={option.value}
                        >
                          {option.placeholder}
                        </option>
                      ))}
                    </select>
                  </div>
                ) : (
                  <div
                    key={index}
                    data-aos="zoom-in-up"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    className={`space-y-2 text-sm ${
                      field.type === "textarea" && "lg:col-span-2"
                    }`}
                  >
                    <label htmlFor={field.name}>{field.label}</label>
                    <input
                      key={index}
                      name={field.name}
                      type={field.type}
                      defaultValue={field.default ? field.default : ""}
                      placeholder={field.placeholder}
                      className={`w-full text-base-100 bg-neutral placeholder:text-black px-4 py-3 rounded-md border border-indigo-300 focus:outline-none ${
                        field.type === "textarea" && "min-h-24 col-span-2 p-2"
                      }`}
                    />
                  </div>
                );
              })}
            </div>
            <button className="btn my-5 w-full">Submit</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddNotice;
